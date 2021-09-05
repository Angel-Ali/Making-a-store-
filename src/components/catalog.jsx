import React, { useEffect, useState } from "react";
import Item from "./item";
import "./catalog.css";
import ItemService from "../services/itemService";

const Catalog = () => {
        //state things
let [products, setProducts] = useState([]);


      // logic (functions)
const retrieveCatalog = () => {
  let service = new ItemService();
  let cat = service.getCatalog();
  setProducts(cat);
  console.log(cat);
};


//effects
  useEffect( () => {
    retrieveCatalog();

  }, []); //[]added to ensure logic will be called only once


  //return things
  return (
    <div className="catalog-page">
      <h3>Check out our amazing tastes!!</h3>
      <h6>We have plenty of options for you</h6>

      <div className="item-container">
       
        { products.map((prod) => (
        <Item key={prod._id} data={prod}></Item>  
        
        
        ))}
      </div>
    </div>
  );
};

export default Catalog;
