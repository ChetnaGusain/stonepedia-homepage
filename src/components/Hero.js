import './Hero.css';
import stoneBanner from "../images/stone-banner.jpg"
function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Welcome to Stonepedia</h1>
        <p>Your Trusted Source for Premium Stones</p>
        <a href="#about" className="cta-btn">Learn More</a>
      </div>
      <div className="hero-image">
        <img src={stoneBanner} alt="Stone Banner" />
      </div>
    </section>
  );
}

export default Hero;
