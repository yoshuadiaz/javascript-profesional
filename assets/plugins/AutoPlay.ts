import MediaPlayer from "../MediaPlayer";

class AutoPlay {
  constructor() { }
  run(player: MediaPlayer) {
    console.log('KOO')
    if (!player.media.muted) {
      player.media.muted = true;
    }
    player.play();
  }
}

export default AutoPlay