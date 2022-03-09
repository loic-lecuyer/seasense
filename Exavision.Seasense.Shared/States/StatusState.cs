using System;
using System.Collections.Generic;
using System.Text;

namespace Exavision.Seasense.Shared.States {
    public enum Status { 
        Ok,
        Warning,
        Error
    }
    public class StatusState : State {
        public Status Status { get; set; }
        public string Message { get; set; }
    }
}
