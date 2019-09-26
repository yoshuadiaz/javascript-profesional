import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'
const video = document.querySelector("video")
const togglePlay = document.querySelector("#togglePlay")
const toggleMute = document.querySelector("#toggleMute")

const Player = new MediaPlayer({ el: video, pluggins: [new AutoPlay, new AutoPause] })

togglePlay.onclick = () => Player.togglePlay()
toggleMute.onclick = () => Player.toggleMute()