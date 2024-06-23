import React, { useState, useEffect, useReducer } from "react";
import "primeicons/primeicons.css";
import Aside from "./Aside";

const initialState = {
  products: [],
  selectedColor: "",
  selectedCategory: "",
  selectedPrice: [0, 1000],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_COLOR":
      return { ...state, selectedColor: action.payload };
    case "SET_CATEGORY":
      return { ...state, selectedCategory: action.payload };
    case "SET_PRICE":
      return { ...state, selectedPrice: action.payload };
    default:
      return state;
  }
};

function Products() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products, selectedColor, selectedCategory, selectedPrice } = state;

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      dispatch({ type: "SET_PRODUCTS", payload: data });
    }

    fetchProducts();
  }, []);

  const handleColorChange = (event) => {
    dispatch({ type: "SET_COLOR", payload: event.target.value });
  };

  const handleCategoryChange = (event) => {
    dispatch({ type: "SET_CATEGORY", payload: event.target.value });
  };

  const handlePriceChange = (value) => {
    const [minPrice, maxPrice] = value.split("-").map(parseFloat);
    dispatch({ type: "SET_PRICE", payload: [minPrice, maxPrice] });
  };

  return (
    <>
      <div className="flex">
        <Aside
          handleCategoryChange={handleCategoryChange}
          handleColorChange={handleColorChange}
          handlePriceChange={handlePriceChange}
        />
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {products
            .filter((p) =>
              selectedCategory ? p.category === selectedCategory : true
            )
            .filter((p) =>
              selectedColor ? p.color.includes(selectedColor) : true
            )
            .filter((p) => {
              const price = parseFloat(p.price);
              return price >= selectedPrice[0] && price <= selectedPrice[1];
            })
            .map((p) => (
              <li
                key={p.id}
                className="w-3/4 flex flex-col p-5 border rounded shadow-sm m-auto"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={"https://placehold.jp/300x300.png"}
                    alt="Placeholder image"
                    className="object-cover w-full"
                  />
                </div>

                <h3 className="text-xl font-bold font-hammersmith-one mt-4 truncate">
                  {p.name}
                </h3>

                <p className="text-gray-700 text-lg h-28 font-readex-pro my-5 overflow-hidden">
                  {p.description}
                </p>

                <div className="flex mt-6 gap-3">
                  {p.color.map((color, index) => (
                    <label
                      key={index}
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-full border-4 cursor-pointer focus:ring focus:ring-${color} ${
                        color === "white" ? "border-black" : `border-${color}`
                      }`}
                      style={{ backgroundColor: color }}
                    >
                      <input
                        type="checkbox"
                        className="hidden"
                        name={`color-${color}`}
                        value={color}
                        onChange={handleColorChange}
                        checked={selectedColor === color}
                      />
                    </label>
                  ))}
                </div>

                <div className="mt-4 text-lg font-bold">
                  ${parseFloat(p.price).toFixed(2)}
                </div>

                <button
                  className="rounded-lg p-2 sm:p-4 bg-green-500 flex justify-center text-center font-inter gap-2 font-bold text-sm items-center text-white mt-4"
                  type="submit"
                >
                  <i className="pi pi-shopping-cart"></i>
                  Add to Cart
                </button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default Products;
