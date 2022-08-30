import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct.js";

function Checkout() {
    return(
        <div>
           <div className="checkout">
                <div className="checkout_left">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKNUec7B0n5z-Gmk1JhhQSMr2c2cB64G8Vug&usqp=CAU" 
                        alt="" className="checkout_ad" />
                        <div >
                            <h2 className="checkout_title">
                                Your Shopping Basket
                            </h2>
                            <CheckoutProduct />
                            <CheckoutProduct />
                        </div>
                </div>
                
                <div className="checkout_right">
                    <Subtotal />
                </div>
           </div>
        </div>
    );
}

export default Checkout;