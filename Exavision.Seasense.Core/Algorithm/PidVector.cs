using System;
using System.Numerics;

namespace Exavision.Seasense.Core.Algorithm {
    public class PidVector {
        private readonly Pid pidX;

        private readonly Pid pidY;
        public PidVector(double Kp, double Ki, double Kd, double N, double OutputUpperLimit = 1, double OutputLowerLimit = -1) {
            this.Kp = Kp;
            this.Ki = Ki;
            this.Kd = Kd;
            this.N = N;
            this.OutputUpperLimit = OutputUpperLimit;
            this.OutputLowerLimit = OutputLowerLimit;
            this.pidX = new Pid(Kp, Ki, Kd, N, OutputUpperLimit, OutputLowerLimit);
            this.pidY = new Pid(Kp, Ki, Kd, N, OutputUpperLimit, OutputLowerLimit);

        }
        public Vector2 AddValue(Vector2 setPoint, Vector2 processValue, TimeSpan ts) {
            Vector2 result = new Vector2();
            result.X = (float)this.pidX.AddValue(setPoint.X, processValue.X, ts);
            result.Y = (float)this.pidY.AddValue(setPoint.Y, processValue.Y, ts);
            return result;

        }
        public double Kp { get; }
        public double Ki { get; }
        public double Kd { get; }
        public double N { get; }
        public double OutputUpperLimit { get; }
        public double OutputLowerLimit { get; }
    }
}
