import { Button } from "./Button"
import "./HeroSection.css"
import "../App.css"
const HeroSection = () => {
  return (
    <div className="heroContainer">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>Adventure Awaits</h1>
      <p>What are you waiting for?</p>
      <div className="heroBtns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btnn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btnn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
