using Exavision.Seasense.Shared.Materials;
using System;
using System.Collections.Generic;
using System.Text;

namespace Exavision.Seasense.Shared.Capabilities {
    public abstract class Capability<M> where M : Material,new()  {
    }
}
