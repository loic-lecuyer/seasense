namespace Exavision.Seasense.Spinnaker.Shared.Models {
    using Exavision.Seasense.Spinnaker.Shared.Api;
    using Newtonsoft.Json.Serialization;
    using System;

    /// <summary>
    /// Defines the <see cref="SerializationBinder" />.
    /// </summary>
    public class SerializationBinder : ISerializationBinder
    {
        /// <summary>
        /// The BindToName.
        /// </summary>
        /// <param name="serializedType">The serializedType<see cref="Type"/>.</param>
        /// <param name="assemblyName">The assemblyName<see cref="string"/>.</param>
        /// <param name="typeName">The typeName<see cref="string"/>.</param>
        public void BindToName(Type serializedType, out string assemblyName, out string typeName)
        {
            assemblyName = null;
            if (serializedType.Equals(typeof(SetConfigurationRequest)))
            {
                typeName = "SetConfigurationRequest";
            }
            else if (serializedType.Equals(typeof(SetConfigurationResponse)))
            {
                typeName = "SetConfigurationResponse";
            }
            else if (serializedType.Equals(typeof(Quality)))
            {
                typeName = "SpinnakerQuality";
            }
            else if (serializedType.Equals(typeof(SetValuesRequest)))
            {
                typeName = "SetValuesRequest";
            }
            else if (serializedType.Equals(typeof(SetValuesResponse)))
            {
                typeName = "SetValuesResponse";
            }
            else if (serializedType.Equals(typeof(Configuration)))
            {
                typeName = "SpinnakerConfiguration";
            }
            else if (serializedType.Equals(typeof(Gain)))
            {
                typeName = "SpinnakerGain";
            }
            else if (serializedType.Equals(typeof(Values)))
            {
                typeName = "SpinnakerValues";
            }
            else if (serializedType.Equals(typeof(GetValuesRequest)))
            {
                typeName = "GetValuesRequest";
            }
            else if (serializedType.Equals(typeof(GetValuesResponse)))
            {
                typeName = "GetValuesResponse";
            }
            else
            {
                assemblyName = null;
                typeName = null;
            }
        }

        /// <summary>
        /// The BindToType.
        /// </summary>
        /// <param name="assemblyName">The assemblyName<see cref="string"/>.</param>
        /// <param name="typeName">The typeName<see cref="string"/>.</param>
        /// <returns>The <see cref="Type"/>.</returns>
        public Type BindToType(string assemblyName, string typeName)
        {
            if (typeName.IndexOf("SetConfigurationRequest") != -1)
            {
                return typeof(SetConfigurationRequest);
            }
            else if (typeName.IndexOf("SetConfigurationResponse") != -1)
            {
                return typeof(SetConfigurationResponse);
            }
            else if (typeName.IndexOf("SetValuesRequest") != -1)
            {
                return typeof(SetValuesRequest);
            }
            else if (typeName.IndexOf("SetValuesResponse") != -1)
            {
                return typeof(SetValuesResponse);
            }
            else if (typeName.IndexOf("SpinnakerConfiguration") != -1)
            {
                return typeof(Configuration);
            }
            else if (typeName.IndexOf("SpinnakerGain") != -1)
            {
                return typeof(Gain);
            }

            else if (typeName.IndexOf("SpinnakerQuality") != -1)
            {
                return typeof(Quality);
            }
            else if (typeName.IndexOf("SpinnakerValues") != -1)
            {
                return typeof(Values);
            }
            else if (typeName.IndexOf("GetValuesRequest") != -1)
            {
                return typeof(GetValuesRequest);
            }
            else if (typeName.IndexOf("GetValuesResponse") != -1)
            {
                return typeof(GetValuesResponse);
            }
            else
            {
                return null;
            }
        }
    }
}
