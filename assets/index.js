import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
const video = document.querySelector("video")
const togglePlay = document.querySelector("#togglePlay")
const toggleMute = document.querySelector("#toggleMute")

const Player = new MediaPlayer({ el: video, pluggins: [new AutoPlay] })

togglePlay.onclick = () => Player.togglePlay()
toggleMute.onclick = () => Player.toggleMute()