import React, { useContext } from 'react'
import "./CartItem.css"
import { ShopContext } from '../../Contex/ShopContext'
import remove_icon from "../Assest/Frontend_Assets/cart_cross_icon.png"


function CartItem() {

    const {getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cartitem'>
            <div className='cartitems-from-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Remove</p>
                     
            </div>
            <hr />

            {all_product.map((e) => {
                if (cartItems[e.id]==0) {
                    return (
                        <div key={e.id}>
                            <div className='cartitem-format cartitems-from-main'>
                                <img src={e.image} alt='' className='carticon-product-icon' />

                                <p>{e.name}</p>
                                <p className='new-price'>${e.new_price}</p>

                                <button className='carticon-quantity'>
                                    {cartItems[e.id]}
                                </button>

                                <p>${e.new_price * cartItems[e.id]}</p>

                                <img
                                   className='carditem-removeicon'
                                    src={remove_icon}
                                    onClick={() => removeFromCart(e.id)}
                                    alt='remove'
                                />
                            </div>
                            <hr />
                        </div>
                    )
                }
                return null;
            })}

            <div className='cartitem-down'>
                <div className='cartitem-total'>
                    <h1>cart Totals</h1>
                    <div>
                        <div className='cartitem-total-item'>
                            <p>subtatal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className='cartitems-total-item'>
                            <p>Delivery Fee</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div className='cartitems-total-item'>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className='cartitem-promocode'>
                    <p>If you have a promo code, Enter it here </p>
                    <div className='cartitem-promobox'>
                        <input type='text'placeholder='promo code'/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartItem;
