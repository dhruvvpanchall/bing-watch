import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import "swiper/swiper-bundle.css";
import { Link } from 'react-router-dom';

const Slider = ({ slideNum, sliderName, title, slides }) => {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (!swiperRef.current) {
            const swiperContainer = document.querySelector(`.${sliderName}`);
            if (!swiperContainer) return;
    
            swiperRef.current = new Swiper(swiperContainer, {
                slidesPerView: slideNum,
                spaceBetween: 30,
                loop: true,
                navigation: {
                    prevEl: `.${sliderName} .swiper-button-prev`,
                    nextEl: `.${sliderName} .swiper-button-next`,
                },
                pagination: {
                    el: `.${sliderName} .custom-swiper-pagination`,
                    clickable: true,
                },
                breakpoints: {
                    280: {
                        slidesPerView: 1.1,
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
                        slidesPerView: slideNum,
                    },
                },
                on: {
                    slideChange: () => {
                        updatePaginationDots();
                    }
                },
                style: {
                    zIndex: -999999999999999999999999999999999 
                }
            });
        }
    

        document.querySelector(`.${sliderName} .swiper-button-next`).addEventListener('click', () => {
            swiperRef.current.slideNext();
        });

        document.querySelector(`.${sliderName}.swiper-button-prev`).addEventListener('click', () => {
            swiperRef.current.slidePrev();
        });

        return () => {
            if (swiperRef.current) {
                swiperRef.current.destroy();
                swiperRef.current = null;
            }
        };
    }, [sliderName]);

    const updatePaginationDots = () => {
        const bullets = document.querySelectorAll(`.${sliderName} .custom-swiper-pagination-bullet`);
        bullets.forEach((bullet, index) => {
            if (swiperRef.current && index === swiperRef.current.realIndex) {
                bullet.classList.add('active');
            } else {
                bullet.classList.remove('active');
            }
        });
    };

    useEffect(() => {
        const bullets = document.querySelectorAll(`.${sliderName} .custom-swiper-pagination-bullet`);

        bullets.forEach((bullet, index) => {
            bullet.addEventListener('click', () => {
                if (swiperRef.current) {
                    swiperRef.current.slideTo(index);
                }
            });
        });

        return () => {
            bullets.forEach((bullet, index) => {
                bullet.removeEventListener('click', () => {
                    if (swiperRef.current) {
                        swiperRef.current.slideTo(index);
                    }
                });
            });
        };
    }, [sliderName]);

    const renderSliderContent = () => {
        switch (sliderName) {
            case 'swiper-container1' :
                return (
                    <div className="swiper-wrapper">
                        {slides.map((slide, slideIndex) => (
                            <div key={slideIndex} className="swiper-slide">
                                <Link to={`/movie-show/${encodeURIComponent(slide.title)}`}>
                                    <div className="slide_box">
                                        <div className="slide_img">
                                            <img src={require(`../assets/images/${slide.image}.png`)} alt={slide.title} width="100%" />
                                        </div>

                                        <div className="slide_txt">
                                            <a href={slide.link}>
                                                <h5>{slide.title}</h5>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                );
            case 'swiper-container2' :
                return (
                    <div className="swiper-wrapper">
                    {slides.map((slide, slideIndex) => (
                        <div key={slideIndex} className="swiper-slide">
                            <Link to={`/movie-show/${encodeURIComponent(slide.title)}`}>
                                <div className="slide_box">
                                    <div className="slide_img">
                                        <img src={require(`../assets/images/${slide.image}.png`)} alt={slide.title} width="100%" />

                                    </div>
                                    <div className="slide_txt">
                                    <a href={slide.link} className='top'>
                                                <span>{slide.top10}</span>
                                            </a>
                                        <a href={slide.link}>
                                            <h5>{slide.title}</h5>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                );
            case 'swiper-container3' :
                return (
                    <div className="swiper-wrapper">
                        {slides.map((slide, slideIndex) => (
                            <div key={slideIndex} className="swiper-slide">
                                <Link to={`/movie-show/${encodeURIComponent(slide.Movie_Name)}`}>
                                    <div className="slide_box">
                                        <div className="slide_img">
                                            <img src={require(`../assets/images/${slide.image}.png`)} alt={slide.title} width="100%" />
                                        </div>

                                        <div className="slide_txt">
                                            <a href={slide.link}>
                                                <h4><img src={slide.small_img1} alt="" />{slide.duration}</h4>
                                                <h4><img src={slide.small_img2} alt="" />{slide.views}</h4>
                                            </a>
                                        </div>
                                    </div>
                                
                                <div className="hover_video">
                                    <video  className="d-block w-100"  autoPlay  muted playsInline loop>
                                        <source src={slide.video} type='video/mp4'/>
                                    </video>
                                    <div className="Data">
                                        <h5>{slide.Movie_Name}</h5>
                                        <div className="slide_txt">
                                        <a href={slide.link}>
                                                <h4><img src={slide.small_img1} alt="" />{slide.duration}</h4>
                                                <h4><img src={slide.small_img2} alt="" />{slide.views}</h4>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                );
            case 'swiper-container4' :
                return (
                    <div className="swiper-wrapper">
                        {slides.map((slide, slideIndex) => (
                            <div key={slideIndex} className="swiper-slide">
                                <Link to={`/movie-show/${encodeURIComponent(slide.Movie_Name)}`}>
                                    <div className="slide_box">
                                        <div className="slide_img">
                                            <img src={require(`../assets/images/${slide.image}.png`)} alt={slide.title} width="100%" />

                                        </div>
                                        <div className="slide_txt">
                                            <a href={slide.link} className='date'>
                                            <h4 >{slide.date}</h4>
                                            </a>
                                        </div>
                                    </div>
                                
                                <div className="hover_video">
                                        <video  className="d-block w-100"  autoPlay  muted playsInline loop>
                                            <source src={slide.video} type='video/mp4'/>
                                        </video>
                                        <div className="Data">
                                            <h5>{slide.Movie_Name}</h5>
                                            <div className="slide_txt">
                                                <a href={slide.link} className='date'>
                                                    <h4 >{slide.date}</h4>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                );
            case 'swiper-container5' :
                return (
                    <div className="swiper-wrapper">
                        {slides.map((slide, slideIndex) => (
                            <div key={slideIndex} className="swiper-slide">
                                 <Link to={`/movie-show/${encodeURIComponent(slide.Movie_Name)}`}>
                                    <div className="slide_box">
                                        <div className="slide_img">
                                            <img src={require(`../assets/images/${slide.image}.png`)} alt={slide.title} width="100%" />
                                        </div>

                                        <div className="slide_txt">
                                            <a href={slide.link}>
                                            <h4><img src={slide.small_img1} alt="" />{slide.duration}</h4>
                                            <h4><img src={slide.rate} alt="" />{slide.views}</h4>
                                            </a>
                                        </div>
                                    </div>
                                
                                <div className="hover_video">
                                    <video  className="d-block w-100"  autoPlay  muted playsInline loop>
                                        <source src={slide.video} type='video/mp4'/>
                                    </video>
                                    <div className="Data">
                                        <h5>{slide.Movie_Name}</h5>
                                        <div className="slide_txt">
                                            <a href={slide.link}>
                                            <h4><img src={slide.small_img1} alt="" />{slide.duration}</h4>
                                            <h4><img src={slide.rate} alt="" />{slide.views}</h4>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                );
            case 'swiper-container7' :
                return (
                    <div className="swiper-wrapper">
                    {slides.map((slide, slideIndex) => (
                        <div key={slideIndex} className="swiper-slide">
                             <Link to={`/movie-show/${encodeURIComponent(slide.title)}`}>
                                <div className="slide_box">
                                    <div className="slide_img">
                                        <img src={require(`../assets/images/${slide.image}.png`)} alt={slide.title} width="100%" />

                                    </div>
                                    <div className="slide_txt">
                                    <a href={slide.link} className='top'>
                                                <span>{slide.top10}</span>
                                            </a>
                                        <a href={slide.link}>
                                            <h5>{slide.title}</h5>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                );
            case 'swiper-container8' :
                return (
                    <div className="swiper-wrapper">
                        {slides.map((slide, slideIndex) => (
                            <div key={slideIndex} className="swiper-slide">
                                 <Link to={`/movie-show/${encodeURIComponent(slide.Movie_Name)}`}>
                                    <div className="slide_box">
                                        <div className="slide_img">
                                            <img src={require(`../assets/images/${slide.image}.png`)} alt={slide.title} width="100%" />
                                        </div>

                                        <div className="slide_txt">
                                            <a href={slide.link}>
                                            <h4><img src={slide.small_img1} alt="" />{slide.duration}</h4>
                                            <h4><img src={slide.small_img2} alt="" />{slide.views}</h4>
                                            </a>
                                        </div>
                                    </div>
                               
                                <div className="hover_video">
                                    <video  className="d-block w-100"  autoPlay  muted playsInline loop>
                                        <source src={slide.video} type='video/mp4'/>
                                    </video>
                                    <div className="Data">
                                        <h5>{slide.Movie_Name}</h5>
                                        <div className="slide_txt">
                                            <a href={slide.link}>
                                                <h4><img src={slide.small_img1} alt="" />{slide.duration}</h4>
                                                <h4><img src={slide.small_img2} alt="" />{slide.views}</h4>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                );
            case 'swiper-container9' :
                return (
                    <div className="swiper-wrapper">
                    {slides.map((slide, slideIndex) => (
                        <div key={slideIndex} className="swiper-slide">
                            <Link to={`/movie-show/${encodeURIComponent(slide.Movie_Name)}`}>
                                <div className="slide_box">
                                    <div className="slide_img">
                                        <img src={require(`../assets/images/${slide.image}.png`)} alt={slide.title} width="100%" />

                                    </div>
                                    <div className="slide_txt">
                                        <a href={slide.link}>
                                        <h4><img src={slide.small_img1} alt="" />{slide.duration}</h4>
                                        <h4><img src={slide.small_img2} alt="" />{slide.views}</h4>
                                        </a>
                                    </div>
                                </div>
                        
                            <div className="hover_video">
                                <video  className="d-block w-100"  autoPlay  muted playsInline loop>
                                    <source src={slide.video} type='video/mp4'/>
                                </video>
                                <div className="Data">
                                    <h5>{slide.Movie_Name}</h5>
                                    <div className="slide_txt">
                                        <a href={slide.link}>
                                            <h4><img src={slide.small_img1} alt="" />{slide.duration}</h4>
                                            <h4><img src={slide.small_img2} alt="" />{slide.views}</h4>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                    ))}
                    </div>
                );
            case 'swiper-container10' :
                return (
                    <div className="swiper-wrapper">
                        {slides.map((slide, slideIndex) => (
                            <div key={slideIndex} className="swiper-slide">
                                 <Link to={`/movie-show/${encodeURIComponent(slide.Movie_Name)}`}>
                                    <div className="slide_box">
                                        <div className="slide_img">
                                            <img src={require(`../assets/images/${slide.image}.png`)} alt={slide.title} width="100%" />
                                        </div>

                                        <div className="slide_txt">
                                            <a href={slide.link}>
                                            <h4><img src={slide.small_img1} alt="" />{slide.duration}</h4>
                                            <h4><img src={slide.rate} alt="" />{slide.views}</h4>
                                            </a>
                                        </div>
                                    </div>
                                
                                <div className="hover_video">
                                    <video  className="d-block w-100"  autoPlay  muted playsInline loop>
                                        <source src={slide.video} type='video/mp4'/>
                                    </video>
                                    <div className="Data">
                                        <h5>{slide.Movie_Name}</h5>
                                        <div className="slide_txt">
                                            <a href={slide.link}>
                                            <h4><img src={slide.small_img1} alt="" />{slide.duration}</h4>
                                            <h4><img src={slide.rate} alt="" />{slide.views}</h4>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                );
            case 'swiper-container11' :
                return (
                    <div className="swiper-wrapper">
                        {slides.map((slide, slideIndex) => (
                            <div key={slideIndex} className="swiper-slide">
                                    <Link to={`/movie-show/${encodeURIComponent(slide.Movie_Name)}`}>
                                    <div className="slide_box">
                                        <div className="slide_img">
                                            {/* <img src={require(`../assets/images/${slide.image}.png`)} alt={slide.title} width="100%" /> */}
                                        </div>

                                        <div className="slide_txt">
                                            <a href={slide.link}>
                                            <h4><img src={slide.small_img1} alt="" />{slide.duration}</h4>
                                            <h4><img src={slide.rate} alt="" />{slide.views}</h4>
                                            </a>
                                        </div>
                                    </div>
                                
                                <div className="hover_video">
                                    <video  className="d-block w-100"  autoPlay  muted playsInline loop>
                                        <source src={slide.video} type='video/mp4'/>
                                    </video>
                                    <div className="Data">
                                        <h5>{slide.Movie_Name}</h5>
                                        <div className="slide_txt">
                                            <a href={slide.link}>
                                            <h4><img src={slide.small_img1} alt="" />{slide.duration}</h4>
                                            <h4><img src={slide.rate} alt="" />{slide.views}</h4>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                );
            default:
                return (
                    <div className="swiper-wrapper">
                        {slides.map((slide, slideIndex) => (
                            <div key={slideIndex} className="swiper-slide">
                                 <Link to={`/movie-show/${encodeURIComponent(slide.title)}`}>
                                    <div className="slide_box">
                                        <div className="slide_img">
                                            <img src={require(`../assets/images/${slide.image}.png`)} alt={slide.title} width="100%" />
                                        </div>

                                        <div className="slide_txt">
                                            <a href={slide.link}>
                                                <h5>{slide.title}</h5>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                );
        }
    };

    const paginationDots = slides.slice(0, 4).map((slide, index) => (
        <span key={index} className={`${sliderName} custom-swiper-pagination-bullet`}></span>
    ));
    

    return (
        <div className="home_slider_txt mt-5">
            <div className="slider_txt">
                <h2>{title}</h2>
            </div>
            <div className={sliderName}>
                {renderSliderContent()}
                <div className="slider_page">
                    <div className="inner_slider_page">
                        <div className={`${sliderName} custom-swiper-pagination swiper-pagination`}>
                            {paginationDots}
                        </div>
                        <div className={`${sliderName} swiper-button-prev`}></div>
                        <div className={`${sliderName} swiper-button-next`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
