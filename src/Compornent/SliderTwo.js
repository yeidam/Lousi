import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IoHeartOutline } from "react-icons/io5";

import { useNavigate } from 'react-router-dom';


import data from '../data.js';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
    let navigate = useNavigate();

    return (
        <>
        <div className="best_wrap">
            <h2>BEST ITEM</h2>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                    type: "progressbar"
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper container"
            >
                {data.map(function(parm, i){

                    return(
                        <SwiperSlide>
                    <div className="bestitem">
                        <div onClick={()=>{navigate('/detail/'+data[i].id)}} className="bestimg_wrap">
                            <img className="bestimg" src={process.env.PUBLIC_URL + '/img/img_0'+data[i].id+'.jpg'}/>
                            <IoHeartOutline className="best_icon"/>
                        </div>
                        <p>{data[i].title}</p>
                        <p>{data[i].color}</p>
                    </div>
                </SwiperSlide>
                    )
                })}
                {/* <SwiperSlide>
                    <div className="bestitem">
                        <div className="bestimg_wrap">
                            <img className="bestimg" src={process.env.PUBLIC_URL + '/img/img_00.jpg'}/>
                            <IoHeartOutline className="best_icon"/>
                        </div>
                        <p>PH5</p>
                        <p>모노크롬 화이트</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bestitem">
                    <div className="bestimg_wrap">
                            <img className="bestimg" src={process.env.PUBLIC_URL + '/img/img_01.jpg'}/>
                            <IoHeartOutline className="best_icon"/>
                        </div>
                        <p>PH5</p>
                        <p>모노크롬 화이트</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bestitem">
                    <div className="bestimg_wrap">
                            <img className="bestimg" src={process.env.PUBLIC_URL + '/img/img_02.jpg'}/>
                            <IoHeartOutline className="best_icon"/>
                        </div>
                        <p>PH5</p>
                        <p>모노크롬 화이트</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bestitem">
                    <div className="bestimg_wrap">
                            <img className="bestimg" src={process.env.PUBLIC_URL + '/img/img_03.jpg'}/>
                            <IoHeartOutline className="best_icon"/>
                        </div>
                        <p>PH5</p>
                        <p>모노크롬 화이트</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
        </div>
        
        </>
    );
}
