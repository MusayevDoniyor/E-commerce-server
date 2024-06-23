// FilterContext.jsx

import React, { createContext, useReducer, useContext } from "react";

const FilterContext = createContext();

const filterReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_CATEGORY":
      return { ...state, isCategoryOpen: !state.isCategoryOpen };
    case "TOGGLE_COLOR":
      return { ...state, isColorOpen: !state.isColorOpen };
    case "TOGGLE_PRICE":
      return { ...state, isPriceOpen: !state.isPriceOpen };
    case "SET_COLOR":
      return { ...state, selectedColor: action.payload };
    case "SET_CATEGORY":
      return { ...state, selectedCategory: action.payload };
    case "SET_PRICE":
      return { ...state, selectedPrice: action.payload };
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const FilterProvider = ({ children }) => {
  const initialState = {
    isCategoryOpen: false,
    isColorOpen: false,
    isPriceOpen: false,
    selectedColor: "",
    selectedCategory: "",
    selectedPrice: [0, 100],
    products: [],
  };

  const [state, dispatch] = useReducer(filterReducer, initialState);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
