using System;
using System.Diagnostics;
using System.Threading;

namespace Exavision.Seasense.Core.Threading {
    /// <summary>
    /// Defines the <see cref="ThreadUtils" />.
    /// </summary>
    public static class ThreadUtils
    {
        /// <summary>
        /// The Sleep.
        /// </summary>
        /// <param name="check">The check<see cref="Func{Boolean}"/>.</param>
        /// <param name="maxSleepMs">The maxSleepMs<see cref="int"/>.</param>
        public static void Sleep(Func<Boolean> check, int maxSleepMs)
        {
            Stopwatch timer = new Stopwatch();
            timer.Start();
            while (!check() && timer.Elapsed.TotalMilliseconds < maxSleepMs)
            {
                Thread.Sleep(2);
            }
            timer.Stop();
        }
    }
}
