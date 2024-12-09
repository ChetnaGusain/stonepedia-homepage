import './Products.css';
import marble from '../images/marble.avif';
import granite from '../images/granite.avif';
import sandstone from '../images/sandstone.avif';

function Products() {
  const categories = [
    { name: "Marble", img: marble },
    { name: "Granite", img: granite },
    { name: "Sandstone", img: sandstone }
  ];

  return (
    <section className="products">
      <h2>Our Stone Collection</h2>
      <div className="product-grid">
        {categories.map((item) => (
          <div key={item.name} className="product-card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
