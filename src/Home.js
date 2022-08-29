import React from "react";
import "./Home.css";
import Product from "./Product.js";


const Home = () => {
    return(
        <div className="home">
            <div className="home_container">
                <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" className="home_image" />

                <div className="home_row">
                    <Product 
                        id="123321"
                        title="Betula Women's Tote Bag | Ladies Purse Handbag" 
                        price={15.56}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/717BChXEX7S._AC_UL480_FMwebp_QL65_.jpg"
                    />
                    <Product 
                         id="123500"
                         title="Apple iPhone 13 (128GB) - Blue" 
                         price={799}
                         rating={5}
                         image="https://m.media-amazon.com/images/I/71xb2xkN5qL._SX679_.jpg"
                    />
                </div>

                <div className="home_row">
                    <Product 
                         id="123400"
                         title="Neo Iv Analog Black Dial Men's Watch-NL1805NM01/NP1805NM01" 
                         price={299}
                         rating={5}
                         image="https://m.media-amazon.com/images/I/71xQq6cAhGL._AC_UL480_FMwebp_QL65_.jpg"
                    />
                    <Product 
                         id="123789"
                         title="ASUS TUF Gaming F15 (2022), 15.6-inch (39.62 cms) FHD 300Hz, Intel Core i7-12700H 12th Gen, RTX 3060 6GB Graphics, Gaming Laptop (16GB/1TB SSD/Windows 11/Office 2021/Gray/2.2 Kg)" 
                         price={499}
                         rating={4}
                         image="https://m.media-amazon.com/images/I/71NxKpg1NIL._SX679_.jpg"
                    />
                    <Product 
                         id="123000"
                         title="Refulgix LED Wine Bottle Cork Lights Copper Wire String Lights, 2M Battery Powered Fairy Lights Bottle " 
                         price={89}
                         rating={5}
                         image="https://m.media-amazon.com/images/I/71zxmbEruGL._SX522_.jpg"
                    />
                </div>

                <div className="home_row">
                    <Product 
                         id="123456"
                         title="Puma Men's Dazzler Sneaker" 
                         price={99}
                         rating={4}
                         image="https://m.media-amazon.com/images/I/713UmakQhoL._AC_UL480_FMwebp_QL65_.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;