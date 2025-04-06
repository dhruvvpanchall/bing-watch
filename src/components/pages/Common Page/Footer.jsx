// import bingewatch from '../../assets/images/bingewatch.png';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';

function Footer(){
    return(
        <>
            {/* Footer */}
            <footer className='footer'>
                <div className="mb-md-5 mb-4">
                <Link to="/">
                    <img src={Logo} alt="" />
                    {/* <img src={bingewatch} alt="" /> */}
                    
                </Link>
                </div>
                <div className="footer_links">
                    <div className="footer_link">
                        <h6>Home</h6>
                        <ul>
                            <li><a href="#!"><p className="heading_text">Categories</p></a></li>
                            <li><a href="#!"><p className="heading_text">Devices</p></a></li>
                            <li><a href="#!"><p className="heading_text">Pricing</p></a></li>
                            <li><a href="#!"><p className="heading_text">FAQ</p></a></li>
                        </ul>
                    </div>
                    <div className="footer_link">
                        <h6>Movies</h6>
                        <ul>
                            <li><a href="#!"><p className="heading_text">Gernes</p></a></li>
                            <li><a href="#!"><p className="heading_text">Trending</p></a></li>
                            <li><a href="#!"><p className="heading_text">New Release</p></a></li>
                            <li><a href="#!"><p className="heading_text">Popular</p></a></li>
                        </ul>
                    </div>
                    <div className="footer_link">
                        <h6>Shows</h6>
                        <ul>
                            <li><a href="#!"><p className="heading_text">Gernes</p></a></li>
                            <li><a href="#!"><p className="heading_text">Trending</p></a></li>
                            <li><a href="#!"><p className="heading_text">New Release</p></a></li>
                            <li><a href="#!"><p className="heading_text">Popular</p></a></li>
                        </ul>
                    </div>
                    <div className="footer_link">
                        <h6>Support</h6>
                        <ul>
                            <li><a href="#!"><p className="heading_text">Contact Us</p></a></li>
                        </ul>
                    </div>
                    <div className="footer_link">
                        <h6>Subscription</h6>
                        <ul>
                            <li><a href="#!"><p className="heading_text">Plans</p></a></li>
                            <li><a href="#!"><p className="heading_text">Features</p></a></li>
                        </ul>
                    </div>
                    <div className="footer_link">
                        <h6>Connect With Us</h6>
                        <div className="social_link">
                            <a href="#!"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#!"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#!"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="d-flex justify-content-between align-items-center flex-md-nowrap flex-wrap">
                        <p className='heading_text'>@2025 BingeWatch, All Rights Reserved</p>
                        <ul className="mt-md-0 mt-4">
                            <li><a href=""><p className="heading_text">Terms of Use</p></a></li>
                            <li><a href=""><p className="heading_text">Privacy Policy</p></a></li>
                            <li><a href=""><p className="heading_text">Cookie Policy</p></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
            {/* Footer */}
        </>
    )
}
export default Footer