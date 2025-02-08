import { Component } from "react";
import { CiUser } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import "./Header.css"

class Header extends Component{
    render(){
        return(
            <>
                <header>
                    <div className="header1">
                        <h5>Sustainability</h5>
                        <h5>Customer Service</h5>
                        <h5>News Letter</h5>
                        <h5>...</h5>
                    </div>
                    <div className="header2">
                        <img src="https://brandeps.com/logo-download/H/H-&-M-logo-01.png" alt="H&M" />
                    </div>
                    <div className="header3">
                        <h6><CiUser /> Sign In</h6>
                        <h6><FaRegHeart /> Favourites</h6>
                        <h6><HiOutlineShoppingBag /> Shopping Bag(0)</h6>
                    </div>
                </header>
            </>
        )
    }
}

export default Header;