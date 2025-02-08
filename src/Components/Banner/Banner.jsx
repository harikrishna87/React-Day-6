import { Component } from "react";
import "./Banner.css"

class Banner extends Component {
    render() {
        return (
            <>
                <div className="images">

                    <div className="first_image">
                        <img src="https://posterfilms.com/wp-content/uploads/2023/06/hm.png" alt="Banner_Img" />
                        <button>Buy Now</button>
                    </div>

                    <div className="second_image">
                        <img src="https://i.huffpost.com/gen/1275886/thumbs/o-HM-ONLINE-SHOPPING-570.jpg?1" alt="Banner_Img" />
                    </div>

                    <div className="third_image">
                        <img src="https://cdn.singpromos.com/wp-content/uploads/2011/09/Shirt-Blazer-150x150.jpg" alt="Banner_Img" />
                    </div>

                </div>
            </>
        )
    }
}

export default Banner;