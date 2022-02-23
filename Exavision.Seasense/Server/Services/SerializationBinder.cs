
using Exavision.Seasense.Shared.Settings;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Exavision.Seasense.Server.Services {
    public class SerializationBinder : ISerializationBinder {

        private List<Type> knowTypes = new List<Type>();

        public SerializationBinder() {
            Type[] types = this.GetType().Assembly.GetTypes();
            foreach (Type type in types) {
                if (typeof(SettingBase).IsAssignableFrom(type) && !type.IsAbstract && !type.IsInterface && type.IsClass) {
                    knowTypes.Add(type);
                }
            }

        }

        public void BindToName(Type serializedType, out string assemblyName, out string typeName) {
            assemblyName = null;
            typeName = serializedType.Name;
        }

        public Type BindToType(string assemblyName, string typeName) {
            return (from t in knowTypes where t.Name.Equals(typeName) select t).FirstOrDefault();
        }
    }
}
