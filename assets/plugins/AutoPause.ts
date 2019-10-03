import MediaPlayer from '../MediaPlayer'
class AutoPause {
  private threshold: number;
  player: MediaPlayer;

  constructor() {
    this.threshold = 0.25
    this.handlerIntersection = this.handlerIntersection.bind(this)
    this.visibilityHandler = this.visibilityHandler.bind(this)
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
  }
  run(player: MediaPlayer) {
    this.player = player
    const observer = new IntersectionObserver(this.handlerIntersection, {
      threshold: this.threshold
    })
    observer.observe(player.media)

    document.addEventListener('visibilitychange', this.handleVisibilityChange)
  }

  visibilityHandler(isVisible: boolean) {
    if(isVisible) {
      this.player.play()
    } else {
      this.player.pause()
    }
  }


  private handlerIntersection(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];
    const isVisible = entry.intersectionRatio >= this.threshold
    this.visibilityHandler(isVisible)
  }

  private handleVisibilityChange(){
    const isVisible = document.visibilityState === "visible"
    this.visibilityHandler(isVisible)
  }
}

export default AutoPause