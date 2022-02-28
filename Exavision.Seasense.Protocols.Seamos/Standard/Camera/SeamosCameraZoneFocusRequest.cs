namespace Exavision.Seasense.Protocols.Seamos.Standard.Camera {
    using Exavision.Seasense.Protocols.Seamos.Commands;
    using System.Collections.Generic;

    /// <summary>
    /// Defines the <see cref="SeamosCameraZoneFocusRequest" />.
    /// </summary>
    public class SeamosCameraZoneFocusRequest : SeamosPascalCommand
    {
        /// <summary>
        /// Gets the CommandByte.
        /// </summary>
        public override byte CommandByte2 => 0x34;

        public override byte CommandByte1 => 0x00;

        /// <summary>
        /// Gets or sets the MaterialTarget.
        /// </summary>
        public override MaterialTarget MaterialTarget { get; set; } = MaterialTarget.ThermalCamera;

        /// <summary>
        /// Gets or sets the Width.
        /// </summary>
        public double Width { get; set; }

        /// <summary>
        /// Gets or sets the Height.
        /// </summary>
        public double Height { get; set; }

        /// <summary>
        /// Gets or sets the X.
        /// </summary>
        public double X { get; set; }

        /// <summary>
        /// Gets or sets the Y.
        /// </summary>
        public double Y { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether IsEnabled.
        /// </summary>
        public bool IsEnabled { get; set; }

        /// <summary>
        /// The DeserializeBytes.
        /// </summary>
        /// <param name="data">The data<see cref="byte[]"/>.</param>
        public override void DeserializeBytes(byte[] data)
        {
           

            IsEnabled = data[0] == 0x01;
            if (data.Length > 2)
            {
                List<byte> rectData = new List<byte>(data);
                rectData.RemoveAt(0);
                Rect rect = SeamosCameraUtils.RectFromBytes(rectData.ToArray());
                this.X = rect.X;
                this.Y = rect.Y;
                this.Width = rect.Width;
                this.Height = rect.Height;
            }

            
        }

        /// <summary>
        /// The SerializeBytes.
        /// </summary>
        /// <returns>The <see cref="byte[]"/>.</returns>
        public override byte[] SerializeBytes()
        {
            Rect rect = new Rect() { X = this.X, Y = this.Y, Width = this.Width, Height = this.Height };
            byte[] data = SeamosCameraUtils.BytesFromRect(rect);
            return new byte[] {
                CommandByte2,
                (byte) (IsEnabled ? 0x01 : 0x00),
                data[0],
                data[1],
                data[2],
                data[3],
                data[4],
                data[5],
                data[6],
                data[7] };
        }
    }
}
