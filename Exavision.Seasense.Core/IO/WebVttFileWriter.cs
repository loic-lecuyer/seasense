using System;
using System.Collections.Generic;
using System.IO;

namespace Exavision.Seasense.Core.IO {
    /// <summary>
    /// Defines the <see cref="WebVttEvent" />.
    /// </summary>
    public class WebVttEvent {
        /// <summary>
        /// Gets or sets the Start.
        /// </summary>
        public TimeSpan Start { get; set; }

        /// <summary>
        /// Gets or sets the End.
        /// </summary>
        public TimeSpan End { get; set; }

        /// <summary>
        /// Gets or sets the Text.
        /// </summary>
        public string Text { get; set; }
    }

    /// <summary>
    /// Defines the <see cref="WebVttFileWriter" />.
    /// </summary>
    public class WebVttFileWriter {
        /// <summary>
        /// Gets or sets the TextEvents.
        /// </summary>
        public List<WebVttEvent> TextEvents { get; set; } = new List<WebVttEvent>();

        /// <summary>
        /// The AddTitleEvent.
        /// </summary>
        /// <param name="start">The start<see cref="TimeSpan"/>.</param>
        /// <param name="end">The end<see cref="TimeSpan"/>.</param>
        /// <param name="text">The text<see cref="string"/>.</param>
        public void AddTitleEvent(TimeSpan start, TimeSpan end, string text) {
            this.TextEvents.Add(new WebVttEvent() { Start = start, End = end, Text = text });
        }

        /// <summary>
        /// Write Subtitle File
        /// </summary>
        /// <param name="fileName">Subtitle filename</param>
        public void Write(string fileName) {
            using (FileStream fs = new FileStream(fileName, FileMode.Create)) {
                using (StreamWriter sw = new StreamWriter(fs)) {
                    sw.WriteLine("WEBVTT");
                    sw.WriteLine();

                    foreach (WebVttEvent evt in TextEvents) {
                        // 0:00:01.00
                        string start = evt.Start.Hours.ToString("00") + ":" + evt.Start.Minutes.ToString("00") + ":" + evt.Start.Seconds.ToString("00") + "." + evt.Start.Milliseconds.ToString("000");
                        string end = evt.End.Hours.ToString("00") + ":" + evt.End.Minutes.ToString("00") + ":" + evt.End.Seconds.ToString("00") + "." + evt.End.Milliseconds.ToString("000");
                        sw.WriteLine(start + " --> " + end);
                        sw.WriteLine(evt.Text);
                        sw.WriteLine();
                    }

                }
            }
        }
    }
}
