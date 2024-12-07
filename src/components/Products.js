import './Products.css';

function Products() {
  const categories = [
    { name: "Marble", img: "/images/marble.avif" },
    { name: "Granite", img: "/images/granite.avif" },
    { name: "Sandstone", img: "/images/sandstone.avif" }
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
