import React from "react";
import "./Product.css";
import StarIcon from '@mui/icons-material/Star';

function Product() {
    return(
        <div className="product">
            <div className="product_info">
                <p>Betula Women's Tote Bag | Ladies Purse Handbag</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>45</strong>
                </p>
                <div className="product_rating">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </div>

            </div>
            
            <img src="https://m.media-amazon.com/images/I/717BChXEX7S._AC_UL480_FMwebp_QL65_.jpg" alt="product-image"/>

            <button>Add to Basket</button>
        </div>
    );
}

export default Product;