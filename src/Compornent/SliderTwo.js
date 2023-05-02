import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IoHeartOutline } from "react-icons/io5";

import { useNavigate } from 'react-router-dom';


import {data,product} from '../data.js';
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
                        <p>{data[i].price}원</p>
                    </div>
                </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
        
        </>
    );
}
