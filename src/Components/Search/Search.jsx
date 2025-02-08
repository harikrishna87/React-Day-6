import { Component } from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import "./Search.css"

class Search extends Component {
    render() {
        return (
            <>
                <div className="search">
                    <div className="search1">
                        <div></div>
                        <div></div>
                    </div>
                    <div className="search2">
                        <h5>Ladies</h5>
                        <h5>Men</h5>
                        <h5>Baby</h5>
                        <h5>Kids</h5>
                        <h5>Home</h5>
                        <h5>Sale</h5>
                    </div>
                    <div className="search3">
                        <input type="text" placeholder="Search"/>
                    </div>
                </div>

                <div className="bottom_search">
                    <h3>Use code: HMFREESHIP to get free shipping today</h3>
                    <h3>Free & flexible 15 days return</h3>
                    <h3>Estimated delivery time: 2-7 days</h3>
                </div>

                <div className="bot_search">
                    <div className="bot_search1">
                        <div></div>
                    </div>
                    <div className="bot_search2">
                        <h3>Exclusive offer: FREE SHIPPING for 24 hours!</h3>
                        <p>Use code: HMFREESHIP</p>
                    </div>
                    <div className="bot_search3">
                        <RiErrorWarningLine />
                    </div>
                </div>
            </>
        )
    }
}

export default Search;