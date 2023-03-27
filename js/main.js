const medias = {
  audio: false,
  video: {
    facingMode: {
      ideal: "environment"
    }
  }
};
const video = document.getElementById("video");
const promise = navigator.mediaDevices.getUserMedia(medias);

promise.then(successCallback)
       .catch(errorCallback);

function successCallback(stream) {
    // MediaTrackの取得
  let tracks = stream.getTracks();
  for (let i = 0; i < tracks.length; i++) {
    // 種類
    console.log('kind: '+tracks[i].kind)
    let constraints = tracks[i].getConstraints()

    // 音声トラックの制約
    if (tracks[i].kind == 'audio') {
      console.log('autoGainControl: '+constraints.autoGainControl)
      console.log('channelCount: '+constraints.channelCount)
      console.log('echoCancellation: '+constraints.echoCancellation)
      console.log('latency: '+constraints.latency)
      console.log('noiseSuppression: '+constraints.noiseSuppression)
      console.log('sampleRate: '+constraints.sampleRate)
      console.log('sampleSize: '+constraints.sampleSize)
      console.log('volume: '+constraints.volume)
    }

    // 動画トラックの制約
    if (tracks[i].kind == 'video') {
      console.log('aspectRatio: '+constraints.aspectRatio)
      console.log('facingMode: '+constraints.facingMode)
      console.log('frameRate: '+constraints.frameRate)
      console.log('height: '+constraints.height)
      console.log('width: '+constraints.width)
      console.log('resizeMode: '+constraints.resizeMode)
    }
  }
  video.srcObject = stream;
};

function errorCallback(err) {
  alert(err);
};
