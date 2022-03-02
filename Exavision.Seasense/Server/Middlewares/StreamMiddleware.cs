namespace Exavision.Seasense.Server.Middlewares {
    using Exavision.Seasense.Server.Services;
    using Exavision.Seasense.Streaming;
    using Microsoft.AspNetCore.Http;
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


        /// <summary>
        /// Initializes a new instance of the <see cref="StreamMiddleware"/> class.
        /// </summary>
        /// <param name="next">The next<see cref="RequestDelegate"/>.</param>
        /// <param name="streamService">The streamService<see cref="StreamService"/>.</param>
        public StreamMiddleware(RequestDelegate next, IStreamingService streamingService) {
            _next = next;
            this.streamingService = streamingService;

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
            ImageByteStreamer streamer = this.streamingService.GetImageByteStreamer(materialId);
            if (streamer != null) {
                await StreamAsync(context, streamer);
            }
            else {
                await _next(context);
                return;
            }
        }

        /// <summary>
        /// The StreamAsync.
        /// </summary>
        /// <param name="context">The context<see cref="HttpContext"/>.</param>
        /// <param name="streamer">The creator<see cref="IStreamer"/>.</param>
        /// <returns>The <see cref="Task"/>.</returns>
        /// 

        private static async Task StreamAsync(HttpContext context, ImageByteStreamer streamer) {
            await streamer.StreamAsync(context);

        }

    }
}
