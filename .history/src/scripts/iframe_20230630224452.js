var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let video
const videoId = 'qC0'

window.onYouTubeIframeAPIReady = function () {
  video = new YT.Player('video', {
    videoId
  })
}