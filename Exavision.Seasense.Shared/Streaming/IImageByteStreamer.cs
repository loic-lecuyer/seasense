using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Exavision.Seasense.Shared.Streaming {
    public interface IImageByteStreamer {
        public Task StreamAsync(HttpContext context);
    }
}
