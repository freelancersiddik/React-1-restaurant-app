import FoodItem from "./FoodItem";
import Api from "./FoodApi";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// collect all api cetagory

const updateList = [
  ...new Set(
    Api.map((curElem) => {
      return curElem.cetagory;
    })
  ),
  "All",
];

const Resturant = () => {
  const [items, setItems] = useState(Api);
  const [menuItem, setMenuItem] = useState(updateList);

  const filterItem = (cetagory) => {
    if (cetagory === "All") {
      return setItems(items);
    }
    const update = Api.filter((curElem) => {
      return curElem.cetagory === cetagory;
    });
    setItems(update);
  };

  return (
    <div className="container-fluid p-4">
      <Navbar filterItem={filterItem} menuItem={menuItem} />
      <div className="row mx-auto g-4">
        <FoodItem items={items} />
      </div>
      <Footer/>
    </div>
  );
};

export default Resturant;
