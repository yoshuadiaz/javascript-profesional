import MediaPlayer from "./MediaPlayer"
import AutoPlay from "./plugins/AutoPlay"
import AutoPause from "./plugins/AutoPause"
import Ads from "./plugins/Ads"
const video = document.querySelector("video")
const togglePlay: HTMLElement = document.querySelector("#togglePlay")
const toggleMute: HTMLElement = document.querySelector("#toggleMute")

const Player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()]
})

togglePlay.onclick = () => Player.togglePlay()
toggleMute.onclick = () => Player.toggleMute()

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch(error => {
    console.log(error.message)
  })
}
