import './Testimonials.css';

function Testimonials() {
  const reviews = [
    {
      name: "Ananya Sharma",
      feedback: "Stonepedia exceeded my expectations with their premium quality stones. The craftsmanship is top-notch!",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Rahul Mehta",
      feedback: "Their customer service was outstanding! They helped me choose the perfect stone for my project.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Sophia Singh",
      feedback: "Excellent products with timely delivery. I will definitely recommend Stonepedia to others!",
      rating: "⭐⭐⭐⭐⭐"
    }
  ];

  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-grid">
        {reviews.map((review, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-feedback">“{review.feedback}”</p>
            <p className="testimonial-name">— {review.name}</p>
            <p className="testimonial-rating">{review.rating}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
