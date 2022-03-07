using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Exavision.Seasense.Shared.Models {
    public static class SwitchValueExtension {

        public static T ToEnum<T>(this string value) where T : System.Enum {
            T result = default(T);
            Array array = Enum.GetValues(typeof(T));
            foreach (Object obj in array) {
                if (obj.ToString().Equals(value)) {
                    result = (T)obj;
                    return result;
                }
            }

            return result;

        }

        public static SwitchValue FindSwitchValue<T>(this List<SwitchValue> values, T enumVal) where T : System.Enum {
            SwitchValue result = (from v in values where v.Value.Equals(enumVal.ToString()) select v).FirstOrDefault();
            return result;

        }
    }
}
