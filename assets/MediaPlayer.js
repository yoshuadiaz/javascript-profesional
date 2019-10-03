class MediaPlayer {
  constructor(config) {
    this.media = config.el;
    this.pluggins = config.pluggins || [];
    this._initPlugins();
  }
  _initPlugins() {
    const player = {
      play: () => this.play(),
      pause: () => this.pause(),
      media: this.media,
      get muted() {
        return this.media.muted;
      },
      set muted(value) {
        this.media.muted = value;
      }
    };
    this.pluggins.forEach(plugin => {
      plugin.run(player);
    });
  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  mute() {
    this.media.muted = true;
  }
  unmute() {
    this.media.muted = false;
  }
  toggleMute() {
    if (this.media.muted) {
      this.unmute();
    }
    else {
      this.mute();
    }
  }
  togglePlay() {
    if (this.media.paused) {
      this.play();
    }
    else {
      this.pause();
    }
  }
}

export default MediaPlayer