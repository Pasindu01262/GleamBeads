import React, { useEffect, useState } from 'react';
import "./NewCollection.css";
import Item from '../Item/Item';
import all_product from "../../Component/Assest/Frontend_Assets/all_product"

function NewCollection() {

  const [new_collection, setNew_collection] = useState([]);

  return (
    <div className='new-collection'>
      <h1>NEW COLLECTIONS</h1>
      <hr/>
      <div className='collection'>
        {all_product.map((item, i) => (
          <Item 
            key={i} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price} 
          />
        ))}
      </div>
    </div>
  );
}

export default NewCollection;
