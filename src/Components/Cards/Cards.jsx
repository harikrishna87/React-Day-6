import { Component } from "react";
import { products, products1, products2 } from "../../Data/Cards";
import "./Cards.css"

class Cards extends Component {
    render() {
        return (
            <>
            <h1 className="h1">Men BestSellers </h1>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="cards">
                                {products.map((val, ind) => {
                                    return (
                                        <>
                                            <div className="card" key={ind}>
                                                <img src={val.image} alt="" />
                                                <div className="card_body">
                                                    <h2>{val.title}</h2>
                                                    <p>{val.description}</p>
                                                    <div className="card_body1">
                                                        <h3>Price: {val.price}</h3>
                                                        <button>Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="cards">
                                {products1.map((val, ind) => {
                                    return (
                                        <>
                                            <div className="card" key={ind}>
                                                <img src={val.image} alt="" />
                                                <div className="card_body">
                                                    <h2>{val.title}</h2>
                                                    <p>{val.description}</p>
                                                    <div className="card_body1">
                                                        <h3>Price: {val.price}</h3>
                                                        <button>Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="cards">
                                {products2.map((val, ind) => {
                                    return (
                                        <>
                                            <div className="card" key={ind}>
                                                <img src={val.image} alt="" />
                                                <div className="card_body">
                                                    <h2>{val.title}</h2>
                                                    <p>{val.description}</p>
                                                    <div className="card_body1">
                                                        <h3>Price: {val.price}</h3>
                                                        <button>Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </>
        )
    }
}

export default Cards;