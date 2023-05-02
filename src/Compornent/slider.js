import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 

export default class SimpleSlider extends Component {
    render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: true
    };
    return (
        <div className="mainBanner_wrap">
            <Slider {...settings}>
                <div>
                    <img className='main_banner' src={process.env.PUBLIC_URL + '/img/banner.png'}/>
                </div>
                <div>
                    <img className='main_banner' src={process.env.PUBLIC_URL + '/img/banner2.png'}/>
                </div>
                <div>
                    <img className='main_banner' src={process.env.PUBLIC_URL + '/img/banner3.png'}/>
                </div>
            </Slider>
        </div>
    );
    }
}