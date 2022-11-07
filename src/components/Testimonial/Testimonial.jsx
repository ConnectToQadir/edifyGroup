import './Testimonial.css'
import Slider from "react-slick";
import { useState, useEffect } from 'react';
import axios from 'axios'

const Testimonial = () => {

    const [rev, setRev] = useState([])

    useEffect(() => {
        const getAllReviews = async () => {
            const allReviews = await axios.get("https://edifygroup.herokuapp.com/api/rev/")
            setRev(allReviews.data);
        }
        getAllReviews();
    }, [rev])


    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 930,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 610,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className='Testimonial'>
            <div className="container-fluid TestimonialsInner" >
                <p data-aos="fade-down" data-aos-duration="1200" className='flp'>Success Stories</p>
                <h1 data-aos="fade-down" className='slbh'>Happy Students, Happy Edify!</h1>
                {
                    rev.length === 0 ? <p className='slbp'>No-one Student Review Added Yet!</p> :
                        <div className="allSayings">
                            <Slider {...settings}>
                                {rev.map((v, i) => {
                                    return (
                                        <div key={i} data-aos="flip-up" className="eachSaying">
                                            <div className="eachSayingInner">
                                                <div className="stars">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                                <p className='slwp studentReview'>{v.rev}</p>
                                                <div className="clientDesc">
                                                    <div className="imgDiv">
                                                        <img src={v.photo} alt="" />
                                                    </div>
                                                    <div className="nameAndWho">
                                                        <p className='flp' style={{ marginBottom: "0px" }}>{v.name.toUpperCase()}</p>
                                                        <p className='slwp'>{v.country}</p>
                                                        <p className='slwp'>{v.uni}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>
                }
            </div>
        </div>
    )
}

export default Testimonial