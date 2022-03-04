using System;
using System.Collections.Generic;

namespace Exavision.Seasense.Shared.Models {
    public class SwitchValue {
        public string Value { get; set; }
        public string DisplayName { get; set; }

        public static List<SwitchValue> FromEnum<T>() where T : System.Enum {
            List<SwitchValue> values = new List<SwitchValue>();
            Array array = Enum.GetValues(typeof(T));
            foreach (Object o in array) {              
                values.Add(new SwitchValue() {
                    Value=o.ToString(),
                    DisplayName=o.ToString()

                });
                
            }
            return values;
        }
    }
}
