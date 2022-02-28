namespace Exavision.Seasense.Core.System {
    using global::System;
    using global::System.Diagnostics;
    using global::System.Net.NetworkInformation;
    using Serilog;

    /// <summary>
    /// Defines the <see cref="SystemInfo" />.
    /// </summary>
    public class SystemInfo
    {
        /// <summary>
        /// Defines the start.
        /// </summary>
        private readonly TimeSpan start;

        /// <summary>
        /// Defines the oldCPUTime.
        /// </summary>
        private TimeSpan oldCPUTime = new TimeSpan(0);

        /// <summary>
        /// Defines the lastMonitorTime.
        /// </summary>
        private DateTime lastMonitorTime = DateTime.UtcNow;

        /// <summary>
        /// Initializes a new instance of the <see cref="SystemInfo"/> class.
        /// </summary>
        public SystemInfo()
        {
            start = Process.GetCurrentProcess().TotalProcessorTime;
        }

        /// <summary>
        /// Gets or sets the CpuPrecentUsage.
        /// </summary>
        public Double CpuPrecentUsage { get; set; }

        /// <summary>
        /// Gets or sets the MemoryBytesUsage.
        /// </summary>
        public Double MemoryBytesUsage { get; set; }

        /// <summary>
        /// Gets or sets the NetworkBytesPerSecondUsage.
        /// </summary>
        public Double NetworkBytesPerSecondUsage { get; set; } = -1;

        /// <summary>
        /// Gets or sets the LastBytesSend.
        /// </summary>
        public double LastBytesSend { get; set; }

        /// <summary>
        /// Gets or sets the LastBytesReceive.
        /// </summary>
        public double LastBytesReceive { get; set; }

        /// <summary>
        /// Defines the lastComputeDate.
        /// </summary>
        private Nullable<DateTime> lastComputeDate = null;

        /// <summary>
        /// Defines the adapters.
        /// </summary>
        private NetworkInterface[] adapters;

        /// <summary>
        /// The Compute.
        /// </summary>
        public void Compute()
        {

            try
            {
                // Compute only 2 seconds
                if (lastComputeDate.HasValue)
                {
                    var deltaTime = (DateTime.Now - lastComputeDate.Value);
                    if (deltaTime.TotalSeconds < 2)
                    { return; }

                }


                this.MemoryBytesUsage = Process.GetCurrentProcess().WorkingSet64 / 1024D;
                TimeSpan newCPUTime = Process.GetCurrentProcess().TotalProcessorTime - start;
                this.CpuPrecentUsage = (newCPUTime - oldCPUTime).TotalSeconds / (Environment.ProcessorCount * DateTime.UtcNow.Subtract(lastMonitorTime).TotalSeconds);
                lastMonitorTime = DateTime.UtcNow;
                oldCPUTime = newCPUTime;

                double previousBytesSend = this.LastBytesSend;
                double previousBytesReceive = this.LastBytesReceive;
                this.LastBytesSend = 0;
                this.LastBytesReceive = 0;

                if (this.adapters == null)
                {
                    this.adapters = NetworkInterface.GetAllNetworkInterfaces();
                }
                foreach (NetworkInterface adapter in adapters)
                {
                    IPv4InterfaceStatistics stats = adapter.GetIPv4Statistics();
                    this.LastBytesSend += stats.BytesSent;
                    this.LastBytesReceive += stats.BytesReceived;

                }
                if (lastComputeDate.HasValue)
                {
                    TimeSpan delta = DateTime.Now - lastComputeDate.Value;
                    double deltaSend = this.LastBytesSend - previousBytesSend;
                    double deltaReceive = this.LastBytesReceive - previousBytesReceive;
                    this.NetworkBytesPerSecondUsage = ((deltaSend + deltaReceive) / delta.TotalSeconds) / 1024;
                    if (this.NetworkBytesPerSecondUsage < 0) this.NetworkBytesPerSecondUsage = 0;

                }
                lastComputeDate = DateTime.Now;
            }
            catch (Exception ex)
            {
                string log = "SystemInfo : Error when compute info " + ex.Message;
                Log.Warning(log);
            }
        }
    }
}
