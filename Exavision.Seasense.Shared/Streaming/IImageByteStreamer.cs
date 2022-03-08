using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace Exavision.Seasense.Shared.Streaming {
    public interface IImageByteStreamer {
        public Task StreamAsync(HttpContext context);
        public IImageByteProvider Provider { get; }
    }
}
