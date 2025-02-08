import { Component } from "react";
import "./Footer.css"

class Footer extends Component {
    render() {
        return (
            <>
                <footer className="footer">
                    <div className="footer-container">
                        <div className="footer-column">
                            <h3>About Us</h3>
                            <p>We provide high-quality services and products to our customers with excellence and commitment.</p>
                        </div>
                        <div className="footer-column">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Menu</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3>Contact Info</h3>
                            <p>Email: support@example.com</p>
                            <p>Phone: +123 456 7890</p>
                            <p>Location: City, Country</p>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        &copy; 2024 H&M | All Rights Reserved
                    </div>
                </footer>
            </>
        )
    }
}

export default Footer;