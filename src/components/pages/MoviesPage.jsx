import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Slider from './Slider'; 
import { Link } from 'react-router-dom';


const imageMap = {
    'IronMan': 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736339324/Iron_Man_-_Trailer_HD_lnm7iu.mp4',
    'GrayMan': 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736339331/T1899_ceh76s.mp4',
    'slideCarousleVideo2': 'https://res.cloudinary.com/dbhqc7m0s/video/upload/v1736339338/Trailer2_jpzncw.mp4'
};



const MoviesPage = () => {

    const [carouselSlides, setCarouselSlides] = useState([]);
    const [slideStates, setSlideStates] = useState([]);
    const [sliders, setSliders] = useState([]);
    const [moviesSliders, setMoviesSliders] = useState([]);

    useEffect(() => {
        axios.get('https://server-r7k9.onrender.com/api/slider')
            .then(response => {
                const data = response.data;
                console.log('Fetched data:', data);
    
                // Check if data has the expected structure
                if (!data || !Array.isArray(data.movies) || !Array.isArray(data.shows)) {
                    console.error('Expected movies and shows arrays but got:', data);
                    setMoviesSliders([]);
                    setSliders([]);
                    return;
                }
    
                // Use data.movies and data.shows directly
                const movies = data.movies;
                const shows = data.shows;
    
                // Set state with the mapped data
                setMoviesSliders(movies.map(item => ({
                    title: item.title,
                    sliderName: item.sliderName,
                    slideNum: item.slideNum,
                    slides: item.slides,
                })));
    
                setSliders(shows.map(item => ({
                    title: item.title,
                    sliderName: item.sliderName,
                    slideNum: item.slideNum,
                    slides: item.slides,
                })));
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setMoviesSliders([]);
                setSliders([]);
            });
    }, []);
    
    
    useEffect(() => {
        console.log("Movies Sliders", moviesSliders);  // Check if moviesSliders is populated
        console.log("Shows Sliders", sliders);  // Check if sliders (shows) is populated
    }, [moviesSliders, sliders]);  // Run this whenever state updates
    
    
    useEffect(() => {
        axios.get('https://server-r7k9.onrender.com/api/carousel')
            .then(response => {
                const data = response.data.myData; 
                
                const slidesWithImages = data.map(slide => ({
                    ...slide,
                    image: imageMap[slide.image]
                }));

                setCarouselSlides(slidesWithImages);
                setSlideStates(slidesWithImages.map(() => ({
                    plusIcon: 'fa-plus', 
                    thumbsUpColor: ''
                })));
            })
            .catch(error => {
                console.error('There was an error fetching the carousel data!', error);
            });
    }, []);

    const handlePlusClick = (index) => {
        setSlideStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index].plusIcon = newStates[index].plusIcon === 'fa-plus' ? 'fa-check' : 'fa-plus';
            return newStates;
        });
    };

    const handleThumbsClick = (index) => {
        setSlideStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index].thumbsUpColor = newStates[index].thumbsUpColor === '#E50000' ? '' : '#E50000';
            return newStates;
        });
    };

    return (
        <>
            {/* MoviePage Slider */} 
            <section className="movipag_slide_sec">
                <div className="container">
                    <div className="moviepag_car">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1000000000">
                        <div className="carousel-inner">
                            {carouselSlides.map((slide, index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <Link to={`/movie-show/${encodeURIComponent(slide.title)}`}>
                                        <video className="d-block w-100" alt={`Slide ${index + 1}`} autoPlay muted playsInline loop>
                                            <source src={slide.image} type='video/mp4' />
                                        </video>
                                    </Link>
                                    <div className="carousel-caption">
                                        <h2 className="heading_title">{slide.title}</h2>
                                        <p className="heading_text d-none d-lg-block">{slide.description}</p>
                                        <div className="slider_btns">
                                            <Link to={`/movie-show/${encodeURIComponent(slide.title)}`}>
                                                <a href="#!" className="play">
                                                    <i className="fa-solid fa-play"></i>Play Now
                                                </a>
                                            </Link>

                                            <div className="slider_sub_btn">
                                                <a href="javascript:void(0)" onClick={() => handlePlusClick(index)}>
                                                    <i className={`fa-solid ${slideStates[index]?.plusIcon}`}></i>
                                                </a>
                                                <a href="javascript:void(0)" onClick={() => handleThumbsClick(index)}>
                                                    <i
                                                        className="fa-solid fa-thumbs-up"
                                                        style={{ color: slideStates[index]?.thumbsUpColor }}
                                                        id="thumb"
                                                    ></i>
                                                </a>
                                                <a href="#!">
                                                    <i className="fa-solid fa-volume-high"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    </div>
                </div>
            </section>
            {/* MoviePage Slider */}

            {/* Movies-Show Section */}
            <section className="movie_sec">
                <div className="container">
                    <div className="">
                        {/* Movies Section */}
                        <div className="movie_box" data-aos="fade-up" data-aos-duration="1500">
                            <div className="title_btn">
                                <a href="#!" className="play">Movies</a>
                            </div>
                            <div>
                                {moviesSliders.length === 0 ? (
                                    <p>No Movies Available</p>
                                ) : (
                                    moviesSliders.map((slider, index) => (
                                        <Slider
                                            key={index}
                                            title={slider.title}
                                            sliderName={slider.sliderName}
                                            slideNum={slider.slideNum}
                                            slides={slider.slides}
                                        />
                                    ))
                                )}
                            </div>
                        </div>

                        {/* Shows Section */}
                        <div className="movie_box" id='shows' data-aos="fade-up" data-aos-duration="1500">
                            <div className="title_btn">
                                <a href="#!" className="play">Shows</a>
                            </div>
                            <div>
                                {sliders.length === 0 ? (
                                    <p>No Shows Available</p>
                                ) : (
                                    sliders.map((slider, index) => (
                                        <Slider
                                            key={index}
                                            title={slider.title}
                                            sliderName={slider.sliderName}
                                            slideNum={slider.slideNum}
                                            slides={slider.slides}
                                        />
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Movies-Show Section */}
            
            {/* Free Trail */}
            <section className='free_trail_sec'>
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
    );
};

export default MoviesPage;
