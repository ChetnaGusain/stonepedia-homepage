import './About.css';
import aboutStone from '../images/about-stone.avif';

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <h2>Who We Are</h2>
        <p>
          Stonepedia is your trusted source for premium stones. We craft
          top-quality stone products for homes, offices, and businesses. Our stones are not just products; they are a statement of elegance, sustainability, and craftsmanship.
        </p>
      </div>
      <div className="about-image-container">
        <img src={aboutStone} alt="About Stonepedia" />
      </div>
    </section>
  );
}

export default About;
