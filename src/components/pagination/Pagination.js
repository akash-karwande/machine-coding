import { useEffect, useState } from "react";
import Product from "./Product";
import "./pagination.css";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 5;
  const noOfPages = Math.ceil(products.length / pageSize);
  const start = currentPage * pageSize;
  const end = start + pageSize
  const getProductData = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const json = await res.json();
    setProducts(json.products);
  };

  useEffect(() => {
    getProductData();
  }, []);

  const gotoPrevpage = () => {
    if(currentPage == 0) {
      return
    }
    setCurrentPage((prev) => prev - 1 );
  }

  const gotoNextpage = () => {
    if(noOfPages == currentPage + 1) {
      return;
    }
    setCurrentPage((prev) => prev + 1 );
  }
  return products.length === 0 ? (
    <h2> No product found</h2>
  ) : (
    <div className="pagination-container">
      <h1>Pagination</h1>
      <div className="pagination">
      <button onClick={() => gotoPrevpage()} className="page-number">⬅️</button>
          {[...Array(noOfPages).keys()].map((n) => {
            return (
              <button onClick={()=> setCurrentPage(n)} key={n} className={`page-number ${currentPage == n? 'active':''}`}>
               {n + 1}
              </button>
            );
          })}
          <button onClick={() => gotoNextpage()} className="page-number">➡️</button>
        </div>
      <div className="product-container">
        {products.slice(start, end).map((item) => (
          <Product key={item.id} title={item.title} img={item.thumbnail} />
        ))}
      </div>
    </div>
  );
};

export default Pagination;
