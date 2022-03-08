using EasySharpIni;
using EasySharpIni.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Serilog;
using Serilog.Events;
using System;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Reflection;
using System.Runtime.InteropServices;

namespace Exavision.Seasense.Server {
    public class Program {
        const ushort DEFAULT_HTTP_PORT = 80;
        const ushort DEFAULT_HTTPS_PORT = 443;
        const string DEFAULT_IP = "127.0.0.1";
        const string LOG_DIRECTORY = "logs";
        const string SETTINGS_FILE_NAME = "settings.ini";
        const string SETTINGS_NETWORK_SECTION_NAME = "Network";
        const string SETTINGS_NETWORK_IP_NAME = "Ip";
        const string SETTINGS_NETWORK_PORT_HTTP_NAME = "HttpPort";
        const string SETTINGS_NETWORK_PORT_HTTPS_NAME = "HttpsPort";

        public static void Main(string[] args) {
            bool isService = SanitizeIsService(args);
            string appPath = Path.GetDirectoryName(Assembly.GetEntryAssembly().Location);
            string logPath = Path.Combine(appPath, LOG_DIRECTORY);
            Log.Logger = new LoggerConfiguration()
                  .WriteTo.File(
                    path: Path.Combine(logPath, "log.txt"),
                    rollingInterval: RollingInterval.Day,
                    rollOnFileSizeLimit: true,
                    fileSizeLimitBytes: 123456)
                  .WriteTo.Console()
                  .MinimumLevel.Override("Microsoft", LogEventLevel.Information)
                  .CreateLogger();
            ushort portHttp, portHttps;
            IPAddress ipAddress;
            ParseSettings(appPath, out ipAddress, out portHttp, out portHttps);
            CreateHostBuilder(appPath, isService, ipAddress, portHttp, portHttps, args).Build().Run();
        }

        private static void ParseSettings(string appPath, out IPAddress ipAddress, out ushort portHttp, out ushort portHttps) {
            string settingPath = Path.Combine(appPath, SETTINGS_FILE_NAME);
            IniFile settingFile = new IniFile(settingPath).Parse();
            IniSection settingNetworkSection = settingFile.GetSection(SETTINGS_NETWORK_SECTION_NAME);
            IniField settingNetworkIpField = settingNetworkSection.GetField(SETTINGS_NETWORK_IP_NAME, DEFAULT_IP.ToString());
            IniField settingNetworkPortHttpField = settingNetworkSection.GetField(SETTINGS_NETWORK_PORT_HTTP_NAME, DEFAULT_HTTP_PORT.ToString());
            IniField settingNetworkPortHttpsField = settingNetworkSection.GetField(SETTINGS_NETWORK_PORT_HTTPS_NAME, DEFAULT_HTTPS_PORT.ToString());
            ipAddress = IPAddress.Parse(settingNetworkIpField.Get());
            portHttp = ushort.Parse(settingNetworkPortHttpField.Get());
            portHttps = ushort.Parse(settingNetworkPortHttpsField.Get());
        }

        public static IHostBuilder CreateHostBuilder(string appPath, bool isService, IPAddress ipAddress, ushort portHttp, ushort portHttps, string[] args) {
            string urlHttp = "http://" + ipAddress + ":" + portHttp;
            string urlHttps = "https://" + ipAddress + ":" + portHttps;
            Log.Information("URL : " + urlHttp + " , " + urlHttps);
            IHostBuilder builder = Host.CreateDefaultBuilder(args)
             .UseSerilog()
             .ConfigureWebHostDefaults(webBuilder => {
                 webBuilder.UseUrls(new string[] { urlHttp, urlHttps })
                 .UseKestrel(options => {
                     options.Listen(ipAddress, portHttps, listenOptions => {
                         listenOptions.UseHttps("seasense.pfx", "Exavision");
                     });
                     options.Listen(ipAddress, portHttp, listenOptions => {
                     });

                 }).UseStartup<Startup>();
             });
            if (isService) {
                if (RuntimeInformation.IsOSPlatform(OSPlatform.Linux)) {
                    builder.UseSystemd();
                }
                if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows)) {
                    builder.UseWindowsService();
                }
            }
            builder.UseContentRoot(appPath);
            return builder;
        }



        private static bool SanitizeIsService(string[] args) {
            return !(Debugger.IsAttached || args.Contains("--console"));
        }
    }
}
