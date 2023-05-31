import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import { ProductContext } from "../../context/ProductContext/ProductState";

const Home = () => {
  const { products, getProducts, sort } = useContext(ProductContext);

  const [currentPage, setCurrentPage] = useState(1); // The initial page
  const [itemsPerPage, setItemsPerPage] = useState(10); // The number of items per page

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const totalPages = Math.ceil(products.length / itemsPerPage);
  
  const currentItems = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);


  useEffect(() => {
    getProducts();
  }, []);

  const productsTable = currentItems.map((product) => {
    return (
      <tr>
        <td className="col1">{product.title}</td>
        <td className="col2 priceTag">{product.price} €</td>
        <td className="col3">{product.category}</td>
      </tr>
    );
  });

  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="col1">
              Title{" "}
              <button className="button" onClick={() => sort("title", true)}>
                <span class="material-icons">expand_less</span>
              </button>
              <button className="button" onClick={() => sort("title", false)}>
                <span class="material-icons">expand_more</span>
              </button>
            </th>
            <th className="col2">
              Price{" "}
              <button className="button" onClick={() => sort("price", true)}>
                <span class="material-icons">expand_less</span>
              </button>
              <button className="button" onClick={() => sort("price", false)}>
                <span class="material-icons">expand_more</span>
              </button>
            </th>
            <th className="col3">
              Category{" "}
              <button className="button" onClick={() => sort("category", true)}>
                <span class="material-icons">expand_less</span>
              </button>
              <button className="button" onClick={() => sort("category", false)}>
                <span class="material-icons">expand_more</span>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>{productsTable}</tbody>
      </table>
      <div>
        {[...Array(totalPages).keys()].map(page => (
          <button key={page + 1} onClick={() => handlePageChange(page + 1)}>
            {page + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default Home;
