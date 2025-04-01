import { useEffect, useState } from "react";
import Product from "./Product";
import "./pagination.css";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const pageSize = 10;
  const noOfPages = Math.ceil(products / pageSize);
  const getProductData = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=20");
    const json = await res.json();
    setProducts(json.products);
  };

  useEffect(() => {
    getProductData();
  }, []);
  return products.length === 0 ? (
    <h2> No product found</h2>
  ) : (
    <div className="pagination-container">
      <h1>Pagination</h1>
      <div className="pagination">
        {[...Array(10).keys()].map((n) => {
          return (
            <button key={n} className="page-number">
              {n + 1}
            </button>
          );
        })}
      </div>
      <div className="product-container">
        {products.map((item) => (
          <Product key={item.id} title={item.title} img={item.thumbnail} />
        ))}
      </div>
    </div>
  );
};

export default Pagination;
