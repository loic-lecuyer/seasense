using Exavision.Seasense.Server.Middlewares;
using Exavision.Seasense.Server.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;
using System;
using System.IO;
using System.Net;
using System.Reflection;
using System.Text;

namespace Exavision.Seasense.Server {
    public class Startup {
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration) {
            Configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services) {
            services.AddHttpsRedirection(options => {
                options.RedirectStatusCode = (int)HttpStatusCode.PermanentRedirect;
                // @TODO update ssl port from conf
                options.HttpsPort = 443;
            });
            services.AddSingleton<IUserRepository, UserRepository>();
            services.AddSingleton<ITokenService, TokenService>();
            services.AddSingleton<ISiteService, SiteService>();
            services.AddSingleton<IWebSocketService, WebSocketService>();
            services.AddSingleton<IStreamingService, StreamingService>();
            services.AddControllers().AddNewtonsoftJson(options => {
                options.SerializerSettings.TypeNameHandling = TypeNameHandling.Auto;
                options.SerializerSettings.ContractResolver = new DefaultContractResolver {
                    NamingStrategy = new CamelCaseNamingStrategy()
                };
                options.SerializerSettings.SerializationBinder = new SerializationBinder();
                options.SerializerSettings.Converters.Add(new StringEnumConverter());
            });
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options => {
                options.TokenValidationParameters = new TokenValidationParameters {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = Configuration["Jwt:Issuer"],
                    ValidAudience = Configuration["Jwt:Issuer"],
                    IssuerSigningKey = new
                    SymmetricSecurityKey
                    (Encoding.UTF8.GetBytes
                    (Configuration["Jwt:Key"]))
                };
            });

            services.AddCors(c => {
                c.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            });

            services.AddMvc((MvcOptions options) => {
                options.SslPort = 443;
                options.EnableEndpointRouting = false;
            });

            string appPath = Path.GetDirectoryName(Assembly.GetEntryAssembly().Location);
            services.AddSpaStaticFiles(configuration => {
                configuration.RootPath = Path.Combine(appPath, "www");
            });


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ISiteService siteService, IWebSocketService webSocketService) {
            siteService.Start();

            if (env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
            }
            app.UseMiddleware<StreamMiddleware>();
            app.UseMiddleware<JwtMiddleware>();
            app.UseRouting();
            app.UseSpaStaticFiles(new StaticFileOptions {
                OnPrepareResponse = context => {
                    if (context.File.Name == "index.html") {
                        context.Context.Response.Headers.Add("Cache-Control", "no-cache, no-store");
                        context.Context.Response.Headers.Add("Expires", "-1");
                    }
                }
            });

            var webSocketOptions = new WebSocketOptions() {
                KeepAliveInterval = TimeSpan.FromSeconds(3)
            };
            app.UseWebSockets(webSocketOptions);
            app.Map("/ws", builder => {
                builder.Use(async (context, next) => {
                    await webSocketService.HandleRequest(context, next);

                });
            });




            app.UseSpa(spa => {
                if (env.IsDevelopment()) {
                    spa.Options.SourcePath = "Client";
                }
            });
            app.UseStaticFiles(new StaticFileOptions() {
                ServeUnknownFileTypes = true
            });
            app.UseMvc();

            app.UseEndpoints(endpoints => {
                endpoints.MapControllers();
            });



        }
    }
}
