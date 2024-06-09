import { Link } from "react-router-dom";
import ProductCard from "../components/productCard";

const Home = () => {
  const addToCartHandler = () => {};

  return (
    <div className="home">
      <section>
        {/* You can add any content here */}
      </section>

      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>

      <main>
        <ProductCard
          productId="abjhuybiu"    name="Macbook"
          price={80000}
          stock={10} 
          handler={addToCartHandler} 
          photo="https://stadt-bremerhaven.de/wp-content/uploads/2022/12/macbook.jpg"
        />
      </main>
    </div>
  );
};

export default Home;
