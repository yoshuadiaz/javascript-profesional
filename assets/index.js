import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.ts'
const video = document.querySelector("video")
const togglePlay = document.querySelector("#togglePlay")
const toggleMute = document.querySelector("#toggleMute")

const Player = new MediaPlayer({ el: video, pluggins: [new AutoPlay, new AutoPause] })

togglePlay.onclick = () => Player.togglePlay()
toggleMute.onclick = () => Player.toggleMute()

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message)
  })
}