import React, { useContext } from 'react'
import "./CSS/ShopCategory.css"
import { ShopContext } from '../Contex/ShopContext'
import dropdown_icon from "../Component/Assest/Frontend_Assets/dropdown_icon.png"
import Item from "../Component/Item/Item"
import Add_image from "../Component/Assest/Frontend_Assets/add.jpg"

function ShopCategory(props) {
  const {all_product}=useContext(ShopContext);
  return (
    <div className='shop-catagory'>
         <img style={{height:"430px"}}className='shopcategory-banner' src={Add_image} alt="banner"/> {/*src={props.banner}*/} 
        <div className='shopcategory-indexsort'>
          <p>
            <span>Showing 1-12</span> out of products
          </p>
          <div className='shopcategory-sort'>
            Sort by <img src={dropdown_icon} alt=""/>
          </div>
        </div>
        <div className='shopcategory-product'>
          {all_product.map((item,i)=>{
            if (props.category===Item.category)

              {
                 return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
              }
              else
              {
                return null;
              }
          })}
        </div>
        <div className='shopcategory-loadmore'>
             Explore More
        </div>
    </div>
  )
}

export default ShopCategory