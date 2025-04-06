import React, { useEffect } from 'react';
import Swiper from 'swiper';
import "swiper/swiper-bundle.css";
import Slider from './Slider'; 


// Images
import bg from '../assets/images/AbstractDesign.png'
import slide1 from '../assets/images/slide1.png'
import slide2 from '../assets/images/slide2.png'
import slide3 from '../assets/images/slide3.png'
import slide4 from '../assets/images/slide4.png'
import slide5 from '../assets/images/slide5.png'
import Streaming1 from '../assets/images/mobile.png'
import Streaming2 from '../assets/images/tablate.png'
import Streaming3 from '../assets/images/tv.png'
import Streaming4 from '../assets/images/laptop.png'
import Streaming5 from '../assets/images/gaming.png'
import Streaming6 from '../assets/images/vr.png'
import small_img2 from '../assets/images/watch.png';
import small_img3 from '../assets/images/Season.png';
import small_img1 from '../assets/images/duration.png';
import slide12 from '../assets/images/slide11.png';
import slide31 from '../assets/images/slide31.png';
import slide40 from '../assets/images/slide40.png';
const DarkMatter = 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736337442/DarkMatter_yko62j.mp4'
const GrayMan = 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736339331/T1899_ceh76s.mp4'
const Sooraj = 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736339328/Sooraj_fmcawv.mp4'

const sliders = [
    {
        id: 11,
        title: 'Available For Free...!!!',
        sliderName: 'swiper-container11',
        slideNum: '5',
        slides: [
            { duration: '2h 10min', video:Sooraj, Movie_Name:"Sooraj Pe Mangal Bhari", views : '3K', small_img1: small_img1, small_img2: small_img2, image: slide12, link: '#!' },
            { duration: '8h 30min', views : '1 Season', video:DarkMatter, Movie_Name:"Dark Matter", small_img1: small_img1, small_img2: small_img3, image: slide40, link: '#!' },
            { duration: '7h 20min', views : '1 Season', video:GrayMan, Movie_Name:"1899", small_img1: small_img1, small_img2: small_img3, image: slide31, link: '#!' },        ],
    },
];
function Home(){
    const moviesSliders = sliders.filter(slider => slider.sliderName === 'swiper-container11');

    useEffect(() => {  
        const swiper = new Swiper('.swiper-container', {
            slidesPerView: 5,
            spaceBetween: 30,
            loop: true,
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
            },
            pagination: {
                el: '.custom-swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                280:{
                    slidesPerView: 1.2,
                    spaceBetween: 20,
                },
                520: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 25,
                },
                1200: {
                    slidesPerView: 5,
                  },
              },
        });

        document.querySelector('.swiper-button-next').addEventListener('click', () => {
            swiper.slideNext();
        });

        document.querySelector('.swiper-button-prev').addEventListener('click', () => {
            swiper.slidePrev();
        });

        swiper.on('slideChange', () => {
            updatePaginationDots(swiper);
        });

        return () => {
            swiper.destroy();
        };

    }, []);

    const updatePaginationDots = (swiper) => {
            const bullets = document.querySelectorAll('.custom-swiper-pagination-bullet');
            bullets.forEach((bullet, index) => {
                if (index === swiper.realIndex) {
                    bullet.classList.add('active');
                } else {
                    bullet.classList.remove('active');
                }
            });
        };

    useEffect(() => {
        const bullets = document.querySelectorAll('.custom-swiper-pagination-bullet');
        
        bullets.forEach((bullet, index) => {
            bullet.addEventListener('click', () => {
                const swiper = document.querySelector('.swiper-container').swiper;
                swiper.slideTo(index); 
                console.log('Done')
            });
        });

        return () => {
            bullets.forEach((bullet, index) => {
                bullet.removeEventListener('click', () => {
                    const swiper = document.querySelector('.swiper-container').swiper;
                    swiper.slideTo(index);
                });
            });
        };
    }, []);

    const paginationDots = [1, 2, 3, 4].map(index => (
        <span key={index} className="custom-swiper-pagination-bullet"></span>
    ));

    
    return(
    <>
        {/* Home Banner */}
        <section className="home_banner">
            <div className="container">
                <div className="text-center" data-aos="fade-up" data-aos-duration="1500">
                    <img src={bg} alt=""/>
                </div>
            </div>
        </section>
        {/* Home Banner */}

        {/* Banner TEXT */}
        <section>
            <div className="container">
                <div className="banner_txt text-center" data-aos="fade-up" data-aos-duration="1500">
                    <h1>The Best Streaming Experience</h1>
                    <p>BingeWatch is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With BingeWatch, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
                    <a href="/Subscriptions" className="start_watch"><i className="fa-solid fa-play"></i> &nbsp; Start Watching Now</a>
                </div>
            </div>
        </section>
        {/* Banner TEXT */}

        {/* Swiper Slider */}
        <section className="swiper_sec" data-aos="fade-in" data-aos-duration="1500">
            <div className="container">
               <div className="home_slider_txt">
                    <div className="slider_txt">
                        <h2>Explore our wide variety of categories</h2>
                        <p>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
                    </div>
                    <div className="home_slider swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <a href="/Subscriptions">
                                    <div className="slide_box">
                                        <div className="slide_img">
                                            <img src={slide1} alt="" />
                                        </div>
                                        <div className="slide_txt">
                                            <a href="/Subscriptions">
                                                <h5>Action</h5>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </a>   
                            </div>
                            <div className="swiper-slide">
                            <a href="/Subscriptions">
                                    <div className="slide_box">
                                    <div className="slide_img">
                                        <img src={slide2} alt="" />
                                    </div>
                                    <div className="slide_txt">
                                        <a href="/Subscriptions">
                                            <h5>Adventure</h5>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                
                                </a>       
                            </div>
                            <div className="swiper-slide">
                                <a href="/Subscriptions">
                                    <div className="slide_box">
                                    <div className="slide_img">
                                        <img src={slide3} alt="" />
                                    </div>
                                    <div className="slide_txt">
                                        <a href="/Subscriptions">
                                            <h5>Comedy</h5>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                
                                </a>        
                            </div>
                            <div className="swiper-slide">
                            <a href="/Subscriptions">
                                <div className="slide_box">
                                    <div className="slide_img">
                                        <img src={slide4} alt="" />
                                    </div>
                                    <div className="slide_txt">
                                    <a href="/Subscriptions">
                                        <h5>Drama</h5>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                    </div>
                                </div>
                            </a>         
                            </div>
                            <div className="swiper-slide">
                            <a href="/Subscriptions">
                                <div className="slide_box">
                                    <div className="slide_img">
                                        <img src={slide5} alt="" />
                                    </div>
                                    <div className="slide_txt">
                                        <a href="/Subscriptions">
                                            <h5>Horror</h5>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </a>        
                            </div>
                            <div className="swiper-slide">
                                <a href="/Subscriptions">
                                    <div className="slide_box">
                                        <div className="slide_img">
                                            <img src={slide1} alt="" />
                                        </div>
                                        <div className="slide_txt">
                                            <a href="/Subscriptions">
                                                <h5>Action</h5>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </a>   
                            </div>
                            <div className="swiper-slide">
                            <a href="/Subscriptions">
                                    <div className="slide_box">
                                    <div className="slide_img">
                                        <img src={slide2} alt="" />
                                    </div>
                                    <div className="slide_txt">
                                        <a href="/Subscriptions">
                                            <h5>Adventure</h5>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                
                                </a>       
                            </div>
                            <div className="swiper-slide">
                                <a href="/Subscriptions">
                                    <div className="slide_box">
                                    <div className="slide_img">
                                        <img src={slide3} alt="" />
                                    </div>
                                    <div className="slide_txt">
                                        <a href="/Subscriptions">
                                            <h5>Comedy</h5>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                
                                </a>        
                            </div>
                            <div className="swiper-slide">
                            <a href="/Subscriptions">
                                <div className="slide_box">
                                    <div className="slide_img">
                                        <img src={slide4} alt="" />
                                    </div>
                                    <div className="slide_txt">
                                    <a href="/Subscriptions">
                                        <h5>Drama</h5>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                    </div>
                                </div>
                            </a>         
                            </div>
                            <div className="swiper-slide">
                            <a href="/Subscriptions">
                                <div className="slide_box">
                                    <div className="slide_img">
                                        <img src={slide5} alt="" />
                                    </div>
                                    <div className="slide_txt">
                                        <a href="/Subscriptions">
                                            <h5>Horror</h5>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </a>        
                            </div>
                        </div>
                        <div className="slider_page">
                        <div className="inner_slider_page">
                            <div className="custom-swiper-pagination swiper-pagination">
                                {paginationDots}
                            </div>
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div>
                        </div>
                    </div>
               </div>
            </div>
        </section>
        {/* Swiper Slider */}

        {/* Free */}
        <section className="movie_sec p-0 pb-5">
            <div className="container">
                <div className=''>
                    <div className= "movie_box"  data-aos="fade-up" data-aos-duration="1500">
                        <div className="title_btn">
                            <a href="#!" className="play">Free Movies/Shows</a>
                        </div>
                        <div>
                            {moviesSliders.map((slider, index) => (
                                <Slider key={index} title={slider.title} sliderName={slider.sliderName} slideNum={slider.slideNum} slides={slider.slides} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Movies-Show Section */}

        {/* We Provide Streaming */}
        <section className='we_provide_Sec'>
            <div className="container">
                <div className="common_top">
                    <h2 className="heading_title">We Provide you streaming experience across various devices.</h2>
                    <p className="heading_text">With BingeWatch, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</p>
                </div>
                <div className="provide_boxes">
                    <div className="provide_box" data-aos="fade-right" data-aos-duration="1500">
                        <div className="provide_title_img">
                            <img src={Streaming1} alt="" />
                            <h3>Smartphones</h3>
                        </div>
                        <div className="provide_des">
                            <p className="heading_text">BingeWatch is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                        </div>
                    </div>
                    <div className="provide_box" data-aos="fade-down" data-aos-duration="1500">
                        <div className="provide_title_img">
                            <img src={Streaming2} alt="" />
                            <h3>Tablet</h3>
                        </div>
                        <div className="provide_des">
                            <p className="heading_text">BingeWatch is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                        </div>
                    </div>
                    <div className="provide_box" data-aos="fade-left" data-aos-duration="1500">
                        <div className="provide_title_img">
                            <img src={Streaming3} alt="" />
                            <h3>Smart TV</h3>
                        </div>
                        <div className="provide_des">
                            <p className="heading_text">BingeWatch is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                        </div>
                    </div>
                    <div className="provide_box" data-aos="fade-right" data-aos-duration="1500">
                        <div className="provide_title_img">
                            <img src={Streaming4} alt="" />
                            <h3>Laptops</h3>
                        </div>
                        <div className="provide_des">
                            <p className="heading_text">BingeWatch is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                        </div>
                    </div>
                    <div className="provide_box" data-aos="fade-up" data-aos-duration="1500">
                        <div className="provide_title_img">
                            <img src={Streaming5} alt="" />
                            <h3>Gaming Consoles</h3>
                        </div>
                        <div className="provide_des">
                            <p className="heading_text">BingeWatch is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                        </div>
                    </div>
                    <div className="provide_box" data-aos="fade-left" data-aos-duration="1500">
                        <div className="provide_title_img">
                            <img src={Streaming6} alt="" />
                            <h3>VR Headsets </h3>
                        </div>
                        <div className="provide_des">
                            <p className="heading_text">BingeWatch is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* We Provide Streaming */}

        {/* Frequently Asked Questions */}
        <section className='faq_sec'>
            <div className="container">
                <div className="common_top">
                    <div className="faq_title">
                        <h2 className="heading_title">Frequently Asked Questions</h2>
                        <p className="heading_text">Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about BingeWatch.</p>
                    </div>
                    <div className="">
                        <a href="/support">Ask a Question</a>
                    </div>
                </div>
                <div className="faq_qna">
                    <div className="faq_home accordion" id="accordionExample">
                        <div className="row">
                            <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1500">
                                <div className="row">
                                    <div className="col-12">
                                    <div className="accordion-item">
                                    <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                   <span>01</span> What is BingeWatch?
                                    </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="heading_text">BingeWatch is a streaming service that allows you to watch movies and shows on demand.</p>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="accordion-item">
                                        <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                       <span>02</span> How much does BingeWatch cost?
                                        </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p className="heading_text">BingeWatch is a streaming service that allows you to watch movies and shows on demand.</p>
                                        </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                               <span>03</span> What content is available on BingeWatch?
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p className="heading_text">BingeWatch is a streaming service that allows you to watch movies and shows on demand.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                    <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                               <span>04</span> How can I watch BingeWatch?
                                                </button>
                                            </h2>
                                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p className="heading_text">BingeWatch is a streaming service that allows you to watch movies and shows on demand.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1500">
                                <div className="row">
                                    <div className="col-12">
                                    <div className="accordion-item">
                                    <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                   <span>05</span>How do I sign up for BingeWatch?
                                    </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="heading_text">BingeWatch is a streaming service that allows you to watch movies and shows on demand.</p>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="accordion-item">
                                        <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                       <span>06</span> What is the BingeWatch free trial?
                                        </button>
                                        </h2>
                                        <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p className="heading_text">BingeWatch is a streaming service that allows you to watch movies and shows on demand.</p>
                                        </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                               <span>07</span> How do I contact BingeWatch customer support?
                                                </button>
                                            </h2>
                                            <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p className="heading_text">BingeWatch is a streaming service that allows you to watch movies and shows on demand.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                    <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                               <span>08</span> What are the BingeWatch payment methods?
                                                </button>
                                            </h2>
                                            <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p className="heading_text">BingeWatch is a streaming service that allows you to watch movies and shows on demand.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Frequently Asked Questions */}

        {/* Choose Plan */}
        <section>
            <div className="container">
            <div className="common_top">
                    <div className="faq_title" data-aos="fade-up" data-aos-duration="1500">
                        <h2 className="heading_title">Choose the plan that's right for you</h2>
                        <p className="heading_text">Join BingeWatch and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop<br></br>entertainment!</p>
                    </div>
                    <div className="plan_option">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Monthly</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Yearly</button>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                    <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                                <div className="plan_boxes">
                                    <div className="plan_box" data-aos="fade-right" data-aos-duration="1500">
                                        <h5>Basic Plan</h5>
                                        <p className="heading_text">Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.</p>
                                        <h1>Rs.149.00<span>/month</span></h1>
                                        <div className="plan_btn">
                                            <a href="https://buy.stripe.com/test_7sIcNr9Zf31kdC84gp" className='free_trail'>Start Free Trial</a>
                                            <a href="https://buy.stripe.com/test_14kfZDefv9pIcy45ks" className='choose_plan'>Choose Plan</a>
                                        </div>
                                    </div>
                                    <div className="plan_box" data-aos="fade-up" data-aos-duration="1500">
                                        <h5>Standard Plan</h5>
                                        <p className="heading_text">Access to a wider selection of movies and shows, including most new releases and exclusive content</p>
                                        <h1>Rs.499.00<span>/month</span></h1>
                                        <div className="plan_btn">
                                            <a href="https://buy.stripe.com/test_7sIcNr9Zf31kdC84gp" className='free_trail'>Start Free Trial</a>
                                            <a href="https://buy.stripe.com/test_4gwbJn0oFgSa41y3cj" className='choose_plan'>Choose Plan</a>
                                        </div>
                                    </div>
                                    <div className="plan_box" data-aos="fade-left" data-aos-duration="1500">
                                        <h5>Premium Plan</h5>
                                        <p className="heading_text">Access to a widest selection of movies and shows, including all new releases and Offline Viewing</p>
                                        <h1>Rs.799.00<span>/month</span></h1>
                                        <div className="plan_btn">
                                            <a href="https://buy.stripe.com/test_7sIcNr9Zf31kdC84gp" className='free_trail'>Start Free Trial</a>
                                            <a href="https://buy.stripe.com/test_bIY00F9ZfdFYeGcaEK" className='choose_plan'>Choose Plan</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                            <div className="plan_boxes">
                                    <div className="plan_box">
                                        <h5>Basic Plan</h5>
                                        <p className="heading_text">Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.</p>
                                        <h1>Rs.1499.00<span>/Year</span></h1>
                                        <div className="plan_btn">
                                            <a href="https://buy.stripe.com/test_7sIcNr9Zf31kdC84gp" className='free_trail'>Start Free Trial</a>
                                            <a href="https://buy.stripe.com/test_6oEeVz4EV59sapWaEJ" className='choose_plan'>Choose Plan</a>
                                        </div>
                                    </div>
                                    <div className="plan_box">
                                        <h5>Standard Plan</h5>
                                        <p className="heading_text">Access to a wider selection of movies and shows, including most new releases and exclusive content</p>
                                        <h1>Rs.1999.00<span>/Year</span></h1>
                                        <div className="plan_btn">
                                            <a href="https://buy.stripe.com/test_7sIcNr9Zf31kdC84gp" className='free_trail'>Start Free Trial</a>
                                            <a href="https://buy.stripe.com/test_5kA8xb3AR7hAcy45ko" className='choose_plan'>Choose Plan</a>
                                        </div>
                                    </div>
                                    <div className="plan_box">
                                        <h5>Premium Plan</h5>
                                        <p className="heading_text">Access to a widest selection of movies and shows, including all new releases and Offline Viewing</p>
                                        <h1>Rs.2499.00<span>/Year</span></h1>
                                        <div className="plan_btn">
                                            <a href="https://buy.stripe.com/test_7sIcNr9Zf31kdC84gp" className='free_trail'>Start Free Trial</a>
                                            <a href="https://buy.stripe.com/test_fZeeVz1sJ1Xg55C7sv" className='choose_plan'>Choose Plan</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
        </section>
        {/* Choose Plan */}

        {/* Free Trail */}
        <section className='free_trail_sec' data-aos="fade-left-in" data-aos-duration="1500">
            <div className="container">
                <div className="free_trail">
                    <div className="common_top">
                        <div className="faq_title">
                            <h2 className="heading_title">Start your free trial today!</h2>
                            <p className="heading_text">This is a clear and concise call to action that encourages users to sign up for a free trial of BingeWatch.</p>
                        </div>
                        <div className="">
                            <a href="/Subscriptions">Start a Free Trail</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Free Trail */}


    </>
    )
}

export default Home