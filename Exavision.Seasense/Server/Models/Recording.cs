using Exavision.Seasense.Shared.Models;
using System;

namespace Exavision.Seasense.Server.Models {
    public class Recording {

        private readonly string materialId;
        private readonly string filePrefix;


        public string Id { get; }
        public User User { get; }


        public DateTime StartDate { get; private set; }
        public string FileName { get; internal set; }

        public string MaterialId => this.materialId;

        public Recording(User user, string materialId, string filePrefix) {
            this.StartDate = DateTime.Now;
            this.Id = Guid.NewGuid().ToString();
            this.User = user;
            this.materialId = materialId;
            this.filePrefix = filePrefix;
            DateTime now = DateTime.Now;

            this.FileName = this.filePrefix + "_" + now.Year + "-" + now.Month + "-" + now.Day + "__" + now.Hour + "-" + now.Minute + "-" + now.Second + ".mp4";

        }


    }
}
