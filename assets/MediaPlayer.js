function MediaPlayer(config) {
  this.media = config.el;
  this.pluggins = config.pluggins || []

  this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function(){
  this.pluggins.forEach(plugin => {
    plugin.run(this);
  })
}

MediaPlayer.prototype.play = function() {
  this.media.play()
}

MediaPlayer.prototype.pause = function() {
  this.media.pause()
}

MediaPlayer.prototype.mute = function() {
  this.media.muted = true
}

MediaPlayer.prototype.unmute = function() {
  this.media.muted = false
}

MediaPlayer.prototype.toggleMute = function() {
  if(this.media.muted) {
    this.unmute()
  } else {
    this.mute()
  }
}

MediaPlayer.prototype.togglePlay = function() {
  if (this.media.paused) {
    this.play()
  } else {
    this.pause()
  }
}

export default MediaPlayer