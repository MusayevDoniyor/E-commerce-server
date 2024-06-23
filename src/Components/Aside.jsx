import React, { useState } from "react";
import "primeicons/primeicons.css";

const Aside = ({
  handleCategoryChange,
  handleColorChange,
  handlePriceChange,
}) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isColorOpen, setIsColorOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);

  const toggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const toggleColor = () => {
    setIsColorOpen(!isColorOpen);
  };

  const togglePrice = () => {
    setIsPriceOpen(!isPriceOpen);
  };

  const handlePriceFilterChange = (event) => {
    handlePriceChange(event.target.value);
  };

  return (
    <aside
      className="w-6/12 h-max p-5 border rounded shadow-sm"
      style={{ resize: "vertical" }}
    >
      <h3 className="text-xl font-bold mb-4">Filters</h3>
      <div className="mb-4 border-b-4 border-t-4 border-dotted border-[rgba(69, 68, 68, 0.8)] pt-5 pb-5 ">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleCategory}
        >
          <label htmlFor="category">Category</label>
          {isCategoryOpen ? (
            <i className="pi pi-chevron-up"></i>
          ) : (
            <i className="pi pi-chevron-down"></i>
          )}
        </div>
        {isCategoryOpen && (
          <ul className="mt-2">
            <li>
              <input
                type="checkbox"
                id="category-all"
                value=""
                onChange={handleCategoryChange}
              />
              <label htmlFor="category-all" className="pl-5">
                All
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="category-electronics"
                value="Electronics"
                onChange={handleCategoryChange}
              />
              <label htmlFor="category-electronics" className="pl-5">
                Electronics
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="category-home-kitchen"
                value="Home & Kitchen"
                onChange={handleCategoryChange}
              />
              <label htmlFor="category-home-kitchen" className="pl-5">
                Home & Kitchen
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="category-sports-outdoors"
                value="Sports & Outdoors"
                onChange={handleCategoryChange}
              />
              <label htmlFor="category-sports-outdoors" className="pl-5">
                Sports & Outdoors
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="category-accessories"
                value="Accessories"
                onChange={handleCategoryChange}
              />
              <label htmlFor="category-accessories" className="pl-5">
                Accessories
              </label>
            </li>
          </ul>
        )}
      </div>

      <div className="mb-4 border-b-4 border-dotted border-[rgba(69, 68, 68, 0.8)] pb-5">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleColor}
        >
          <label htmlFor="color">Color</label>
          {isColorOpen ? (
            <i className="pi pi-chevron-up"></i>
          ) : (
            <i className="pi pi-chevron-down"></i>
          )}
        </div>
        {isColorOpen && (
          <div className="mt-2 flex flex-wrap gap-2">
            <label
              className="inline-flex items-center justify-center w-8 h-8 rounded-full border-4 cursor-pointer focus:ring focus:ring-black border-black"
              style={{ backgroundColor: "black" }}
            >
              <input
                type="checkbox"
                className="hidden"
                name="color-black"
                value="rgb(0, 0, 0)"
                onChange={handleColorChange}
              />
            </label>
            <label
              className="inline-flex items-center justify-center w-8 h-8 rounded-full border-4 cursor-pointer focus:ring focus:ring-white border-black"
              style={{ backgroundColor: "white" }}
            >
              <input
                type="checkbox"
                className="hidden"
                name="color-white"
                value="rgb(255, 255, 255)"
                onChange={handleColorChange}
              />
            </label>
            <label
              className="inline-flex items-center justify-center w-8 h-8 rounded-full border-4 cursor-pointer focus:ring focus:ring-blue-500 border-blue-500"
              style={{ backgroundColor: "rgb(0, 0, 255)" }}
            >
              <input
                type="checkbox"
                className="hidden"
                name="color-blue"
                value="rgb(0, 0, 255)"
                onChange={handleColorChange}
              />
            </label>
            <label
              className="inline-flex items-center justify-center w-8 h-8 rounded-full border-4 cursor-pointer focus:ring focus:ring-red-500 border-red-500"
              style={{ backgroundColor: "rgb(255, 0, 0)" }}
            >
              <input
                type="checkbox"
                className="hidden"
                name="color-red"
                value="rgb(255, 0, 0)"
                onChange={handleColorChange}
              />
            </label>
            <label
              className="inline-flex items-center justify-center w-8 h-8 rounded-full border-4 cursor-pointer focus:ring focus:ring-green-500 border-green-500"
              style={{ backgroundColor: "rgb(0, 255, 0)" }}
            >
              <input
                type="checkbox"
                className="hidden"
                name="color-green"
                value="rgb(0, 255, 0)"
                onChange={handleColorChange}
              />
            </label>
          </div>
        )}
      </div>

      <div className="mb-4 border-b-4 border-dotted border-[rgba(69, 68, 68, 0.8)] pb-5">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={togglePrice}
        >
          <label htmlFor="price">Price</label>
          {isPriceOpen ? (
            <i className="pi pi-chevron-up"></i>
          ) : (
            <i className="pi pi-chevron-down"></i>
          )}
        </div>
        {isPriceOpen && (
          <ul className="mt-2 ">
            <li>
              <input
                type="radio"
                id="price-all"
                name="price"
                value=""
                onChange={handlePriceFilterChange}
              />
              <label htmlFor="price-all" className="pl-5">
                All
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="price-0-50"
                name="price"
                value="0-50"
                onChange={handlePriceFilterChange}
              />
              <label htmlFor="price-0-50" className="pl-5">
                $0 - $50
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="price-50-100"
                name="price"
                value="50-100"
                onChange={handlePriceFilterChange}
              />
              <label htmlFor="price-50-100" className="pl-5">
                $50 - $100
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="price-100-200"
                name="price"
                value="100-200"
                onChange={handlePriceFilterChange}
              />
              <label htmlFor="price-100-200" className="pl-5">
                $100 - $200
              </label>
            </li>

            <li>
              <input
                type="radio"
                id="price-300-1000"
                name="price"
                value="300-1000"
                onChange={handlePriceFilterChange}
              />
              <label htmlFor="price-300-1000" className="pl-5">
                $300 - $1000
              </label>
            </li>
          </ul>
        )}
      </div>
    </aside>
  );
};

export default Aside;
