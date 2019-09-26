class AutoPause {
  constructor() {
    this.threshold = 0.25
    this.handlerIntersection = this.handlerIntersection.bind(this)
    this.visibilityHandler = this.visibilityHandler.bind(this)
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
  }
  run(player) {
    this.player = player
    const observer = new IntersectionObserver(this.handlerIntersection, {
      threshold: this.threshold
    })
    observer.observe(player.media)

    document.addEventListener('visibilitychange', this.handleVisibilityChange)
  }

  visibilityHandler(isVisible) {
    if(isVisible) {
      this.player.play()
    } else {
      this.player.pause()
    }
  }


  handlerIntersection(entries) {
    const entry = entries[0];
    const isVisible = entry.intersectionRatio >= this.threshold
    this.visibilityHandler(isVisible)
  }

  handleVisibilityChange(){
    const isVisible = document.visibilityState === "visible"
    this.visibilityHandler(isVisible)
  }
}

export default AutoPause