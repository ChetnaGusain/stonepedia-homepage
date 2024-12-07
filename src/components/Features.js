import './Features.css';

function Features() {
  const features = [
    { icon: "🏆", title: "High-Quality Stones", desc: "Our stones are crafted with premium materials ensuring lasting durability." },
    { icon: "🔨", title: "Expert Craftsmanship", desc: "We take pride in our skilled artisans and impeccable craftsmanship." },
    { icon: "🚚", title: "Global Shipping", desc: "We deliver stones worldwide with reliable shipping partners." },
    { icon: "🌿", title: "Eco-Friendly Materials", desc: "Sustainably sourced stones for eco-conscious projects." }
  ];

  return (
    <section className="features">
      <h2>Why Choose Us</h2>
      <div className="feature-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <span className="feature-icon">{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
