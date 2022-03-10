using System;

namespace Exavision.Seasense.Shared.States {
    public class RecordingState : State {
        public string UserLogin { get; set; }
        public DateTime StartDate { get; set; }
        public string FileName { get; set; }

        public string Id { get; set; }

        public string MaterialId { get; set; }

        public string Description { get; set; }
    }
}
