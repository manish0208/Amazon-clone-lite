import React from "react";
import "./Header.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";





function Header() {
    return(
        <div className="header">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className='header_logo'>
              <StorefrontIcon className='header_logo_image' fontSize='large'/>
              <h2 className='header_logo_title'>aLite</h2>
            </div>
          </Link>
            <div className='header_search'>
              <input type='text' className='header_search_input' />
              <SearchIcon className='header_search_icon'/>
            </div>

            <div className='header_nav'>
              <div className='nav_item'>
                <span className='nav_item_lineOne'>Hello Guest</span>
                <span className='nav_item_lineTwo'>Sign In</span>
              </div>
              <div className='nav_item'>
                <span className='nav_item_lineOne'>Your</span>
                <span className='nav_item_lineTwo'>Shop</span>
              </div>
              <Link to="/checkout" style={{ textDecoration: "none" }}>
                <div className="nav_itemBasket">
                  <ShoppingBasketIcon  />
                  <span className='nav_basketCount'>0</span>
                </div>
              </Link>
              
            </div>
        </div>
    )
}

export default Header;