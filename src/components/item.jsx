import React, { useState } from "react";
import QuantityPicker from "./quantityPicker";
import "./item.css";

const Item = (props) => {
  const [quantity, setQuantity] = useState(1);
  //const [price, serPrice] make more stuff here
  const handleAdd = () => {
    console.log("Adding to cart");
  };

  const handleQuantityChange = (val) => {
    console.log("quantity change", val);
    setQuantity(val);
  };

  const getControls = () => {
    return (
      <div className="item-controls">
        <QuantityPicker onChange={handleQuantityChange}></QuantityPicker>

        <button onClick={handleAdd} className="btn btn-sm btn-dark">
          Add to cart
        </button>
      </div>
    );
  };

  const getTotal = () => {
    let total = props.data.price * quantity;
    return total.toFixed(2);
  };

  return (
    <div className="item">
      <img src={"/images/" + props.data.image} alt=""></img>
      <h5>{props.data.title}</h5>
      {/* puts the titles on */}

      <label>$ {getTotal()}</label>
      <label>$ {props.data.price.toFixed(2)}</label>

      {getControls()}
    </div>
  );
};

export default Item;
