import React, { useEffect, useState } from 'react';
import "./NewCollection.css";
import Item from '../Item/Item';
import all_product from "../../Component/Assest/Frontend_Assets/all_product"

function NewCollection() {

  const [new_collection, setNew_collection] = useState([]);

<<<<<<< HEAD
  {/*useEffect(() => {
    fetch('http://localhost:4000/newcollectiond') // ✅ Correct URL` 
=======
  useEffect(() => {
    fetch('https://ecommerce-backend-eight-sage-86.vercel.app/newcollection') // ✅ Correct URL` 
>>>>>>> 05834de36845295a39bb8bdcd546a770c014242c

      .then(response => {
        if (!response.ok) throw new Error("Network response was not OK");
        return response.json();
      })
      .then(data => setNew_collection(data))
      .catch(err => console.error("Failed to fetch new collections:", err));
  }, []); */}

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
