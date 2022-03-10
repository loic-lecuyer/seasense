using System;

namespace Exavision.Seasense.Shared.Models {
    public class MediaFile {
        public string Name { get; set; }
        public string Url { get; set; }
        public long Size { get; set; }
        public DateTime CreationDate { get; set; }
    }
}
