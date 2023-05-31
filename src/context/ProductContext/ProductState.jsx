import React, { createContext, useReducer } from "react";
import ProductReducer from "./ProductReducer";
import axios from "axios";

const API_URL = "https://fakestoreapi.com/";

const initialState = {
  products: [],
};

export const ProductContext = createContext(initialState);

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProducts = async () => {
    const res = await axios.get(API_URL + "products?sort=desc");
    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data,
    });
  };

  const sort = (property, isAsc) => {
    dispatch({
      type: "SORT",
      payload: {
        property: property,
        isAsc: isAsc,
      },
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        getProducts,
        sort,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
