import React from "react";
import "./CheckoutProduct.css";
import StarIcon from '@mui/icons-material/Star';


function CheckoutProduct() {
    return(
       
        <div className="checkoutProduct">
            <img src="https://m.media-amazon.com/images/I/717BChXEX7S._AC_UL480_FMwebp_QL65_.jpg" 
                alt="" className="checkoutProduct_image" />

            <div className="checkoutProduct_info"> 
                <p className="checkoutProduct_title">
                    Betula Women's Tote Bag | Ladies Purse Handbag
                </p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>20</strong>
                </p>
                <div className="checkoutProduct_rating">
                    <p><StarIcon /></p>
                    <p><StarIcon /></p>
                </div>
                <button>Remove from Basket</button>
            </div>
        </div>
       
    );
}


export default CheckoutProduct;