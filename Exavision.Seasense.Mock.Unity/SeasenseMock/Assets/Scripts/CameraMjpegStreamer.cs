using Exavision.Seasense.Shared.Streaming;

using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using UnityEngine;

public class CameraMjpegStreamer : MonoBehaviour,IImageByteProvider {

    public int desiredFPS = 25;
    public float computedFPS = 0;
    public int imageHeight = 1048;
    public int imageWidth = 1448;
    public int imageQuality = 90;
    public string ip = "127.0.0.1";


    public ushort port = 5000;

    public byte[] GetImageBytes() {
        lock (this.imageBytesLocker) {
            return this.imageBytes;
        }
    }
    private byte[] imageBytes;
    private object imageBytesLocker;
    private Texture2D jpegTexture;
    private RenderTexture renderTexture;
    private MjpegServer server;
    private System.Diagnostics.Stopwatch timer;
    public Camera camera;
    private Rect rect;
    private float secondPerWebFrame = 1 / 25;

    // Start is called before the first frame update
    public virtual void Start() {
        this.renderTexture = new RenderTexture(this.imageWidth, this.imageHeight, 32, RenderTextureFormat.ARGB32);
        if (this.camera == null) {
            Debug.LogWarning("Camera is not set on streamer");
            this.camera = this.GetComponent<Camera>();
        }
        this.camera.targetTexture = this.renderTexture;
        this.imageBytesLocker = new object();
        this.timer = new System.Diagnostics.Stopwatch();
        this.timer.Start();
        this.jpegTexture = new Texture2D(this.imageWidth, this.imageHeight, TextureFormat.ARGB32, false);
        this.rect = new Rect(0, 0, this.imageWidth, this.imageHeight);
        this.server = new MjpegServer(IPAddress.Parse(this.ip), this.port, this);
        this.server.DesiredFPS = 25;
        this.server.Start();
        this.secondPerWebFrame = 1f / (float)this.server.DesiredFPS;
        this.StartCoroutine(UpdateWebFrame());
    }
    private void StartServer() {

    }
    public virtual void Update() {

    }
    private IEnumerator UpdateWebFrame() {
        while (true) {
            this.timer.Restart();
            RenderTexture previousActiveRenderTexture = RenderTexture.active;
            RenderTexture.active = this.renderTexture;
            this.jpegTexture.ReadPixels(this.rect, 0, 0);
            this.jpegTexture.Apply();
            byte[] data = this.jpegTexture.EncodeToJPG(this.imageQuality);
            lock (imageBytesLocker) {
                this.imageBytes = data;
            }
            RenderTexture.active = previousActiveRenderTexture;
            float elapsedSecond = (float)this.timer.Elapsed.TotalSeconds;
            float deltaSecond = this.secondPerWebFrame - elapsedSecond;
            if (deltaSecond < 0) {
                deltaSecond = 0;
                this.computedFPS = 1f / elapsedSecond;
            } else {
                this.computedFPS = 1f / (elapsedSecond + deltaSecond);
            }
            yield return new WaitForSeconds(deltaSecond);
        }
    }
    public virtual void OnApplicationQuit() {
        StopCoroutine(UpdateWebFrame());
    }


    public void StartProvider() {
        
    }

    public void StopProvider() {
       
    }
}

