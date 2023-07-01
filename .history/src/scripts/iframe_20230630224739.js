var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let video
let ambientLight
let animationHasEnded
const videoId = 'qC0vDKVPCrw'

function createAmbientLight () {

}

window.onYouTubeIframeAPIReady = function () {
  video = new YT.Player('video', {
    videoId,
    events: {
      onStateChange: videoStateChange
    }
  })
}

function videoStateChange(event) {}