namespace Exavision.Seasense.Server.Middlewares {
    using Exavision.Seasense.Server.Services;
    using Exavision.Seasense.Shared.Materials;
    using Exavision.Seasense.Shared.Streaming;
    using Microsoft.AspNetCore.Http;
    using Serilog;
    using System;
    using System.Linq;
    using System.Net.Http;
    using System.Threading.Tasks;

    /// <summary>
    /// Defines the <see cref="StreamMiddleware" />.
    /// </summary>
    public class StreamMiddleware {
        /// <summary>
        /// Defines the _next.
        /// </summary>
        private readonly RequestDelegate _next;
        private readonly IStreamingService streamingService;
        private readonly ISiteService siteService;


        /// <summary>
        /// Initializes a new instance of the <see cref="StreamMiddleware"/> class.
        /// </summary>
        /// <param name="next">The next<see cref="RequestDelegate"/>.</param>
        /// <param name="streamService">The streamService<see cref="StreamService"/>.</param>
        public StreamMiddleware(RequestDelegate next, IStreamingService streamingService, ISiteService siteService) {
            _next = next;
            this.streamingService = streamingService;
            this.siteService = siteService;
        }

        /// <summary>
        /// The InvokeAsync.
        /// </summary>
        /// <param name="context">The context<see cref="HttpContext"/>.</param>
        /// <returns>The <see cref="Task"/>.</returns>
        public async Task InvokeAsync(HttpContext context) {
            if (!context.Request.Path.Value.StartsWith("/stream/")) {
                await _next(context);
                return;
            }

            string materialId = context.Request.Path.Value.Substring(8);
            if (materialId.StartsWith("/")) materialId = materialId.Substring(1);
            if (materialId.IndexOf("/") != -1) {
                materialId = materialId.Substring(0, materialId.IndexOf("/"));
            }
            IMaterial material = this.siteService.FindMaterialById(materialId);
            if (material is ICamera camera) {
                // For mjpeg do reverse proxy to have same origine and https support 
                if (camera.StreamUrl.StartsWith("http")) {
                    await this.ReverseProxyAsync(context, camera.StreamUrl);
                }
                else {
                    IImageByteStreamer streamer = this.streamingService.GetImageByteStreamer(materialId);
                    if (streamer != null) {
                        await StreamAsync(context, streamer);
                    }
                    else {
                        await _next(context);
                        
                    }
                }

            }
            else {
                await _next(context);
                
            }
        }

        private void CopyFromTargetResponseHeaders(HttpContext context, HttpResponseMessage responseMessage) {
            foreach (var header in responseMessage.Headers) {
                context.Response.Headers[header.Key] = header.Value.ToArray();
            }

            foreach (var header in responseMessage.Content.Headers) {
                context.Response.Headers[header.Key] = header.Value.ToArray();
            }
            context.Response.Headers.Remove("transfer-encoding");
        }

        private async Task ReverseProxyAsync(HttpContext context, string streamUrl) {
            Log.Information("ReverseProxyAsync Start for " + context.Connection.RemoteIpAddress + " url " + streamUrl);
            try {

                using HttpClient httpClient = new HttpClient();
                var requestMessage = new HttpRequestMessage();
                requestMessage.RequestUri = new System.Uri(streamUrl);
                requestMessage.Method = HttpMethod.Get;
                using (var responseMessage = await httpClient.SendAsync(requestMessage, HttpCompletionOption.ResponseHeadersRead, context.RequestAborted)) {
                    context.Response.StatusCode = (int)responseMessage.StatusCode;
                    CopyFromTargetResponseHeaders(context, responseMessage);
                    await responseMessage.Content.CopyToAsync(context.Response.Body, context.RequestAborted);

                }

            }
            catch (Exception ex) {
                if (!(ex is OperationCanceledException)) Log.Warning("ReverseProxyAsync end without cancellation " + ex.Message);
            }
            Log.Information("ReverseProxyAsync Stop for " + context.Connection.RemoteIpAddress + " url " + streamUrl);
        }



        private static async Task StreamAsync(HttpContext context, IImageByteStreamer streamer) {
            await streamer.StreamAsync(context);

        }

    }
}
