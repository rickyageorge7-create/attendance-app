const MODEL_URL = "https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model/";

async function loadModels() {
  await Promise.all([
    faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
    faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
    faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
  ]);
}

async function startCamera(video) {
  video.srcObject = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
  await video.play();
}

async function getDescriptor(video) {
  const r = await faceapi.detectSingleFace(video).withFaceLandmarks().withFaceDescriptor();
  return r ? Array.from(r.descriptor) : null;
}

const faceDistance = (a, b) => faceapi.euclideanDistance(a, b);
