import React, { useEffect } from 'react';
import { AiOutlineSwapRight } from "react-icons/ai";

const About = () => {
    
    
    return (
        <>
            <div className='sub_header'></div>
            <div className='about'>
                <div className='about_title'>
                    <h2>INSPIRATION</h2>
                    <p>모든 공간에 어울리는 lousi poulsen 램프</p>
                </div>
                <div className='about_wrap'>
                    <div className='about_img'>
                        <img src={process.env.PUBLIC_URL + '/img/how01.webp'}/>
                    </div>
                    <div className='about_text'>
                        <p>Living Room</p>
                        <p className='about_icon'><AiOutlineSwapRight/></p>
                    </div>
                </div>
                <div className='about_wrap2'>
                    <div className='about_inner about_inner2'>
                        <div className='about_img2' data-aos="fade-up" data-aos-delay="400">
                            <img src={process.env.PUBLIC_URL + '/img/how02.webp'}/>
                        </div>
                        <div className='about_text about_text2' data-aos="fade-right" data-aos-delay="200">
                            <p>The dinnng rome</p>
                            <p className='about_icon'><AiOutlineSwapRight/></p>
                        </div>
                    </div>
                    <div className='about_inner'>
                        <div className='about_img2' data-aos="fade-up" data-aos-delay="300">
                            <img src={process.env.PUBLIC_URL + '/img/how03.webp'}/>
                        </div>
                        <div className='about_text about_text2' data-aos="fade-right" data-aos-delay="200">
                            <p>Outdoor Lighting</p>
                            <p className='about_icon'><AiOutlineSwapRight/></p>
                        </div>
                    </div>
                </div>
                <div className='about_wrap2 about_margin'>
                    <div className='about_inner'>
                        <div className='about_img2' data-aos="fade-up" data-aos-delay="300">
                            <img src={process.env.PUBLIC_URL + '/img/how05.webp'}/>
                        </div>
                        <div className='about_text about_text2' data-aos="fade-right" data-aos-delay="200">
                            <p>The dinnng rome</p>
                            <p className='about_icon'><AiOutlineSwapRight/></p>
                        </div>
                    </div>
                    <div className='about_inner about_inner2' data-aos="fade-up" data-aos-delay="400">
                        <div className='about_img2' data-aos="fade-up" data-aos-delay="300">
                            <img src={process.env.PUBLIC_URL + '/img/how06.webp'}/>
                        </div>
                        <div className='about_text about_text2' data-aos="fade-right" data-aos-delay="200">
                            <p>Outdoor Lighting</p>
                            <p className='about_icon'><AiOutlineSwapRight/></p>
                        </div>
                    </div>
                </div>
                <div className='about_wrap3'>
                    <div className='about_img' data-aos="fade-up" data-aos-delay="400">
                        <img src={process.env.PUBLIC_URL + '/img/how10.webp'}/>
                    </div>
                    <div className='about_text' data-aos="fade-right" data-aos-delay="200">
                        <p>Bring your Outdoor Spaces Life</p>
                        <p className='about_icon'><AiOutlineSwapRight/></p>
                    </div>
                </div>
                <div className='about_wrap2'>
                    <div className='about_inner about_inner2'>
                        <div className='about_img2' data-aos="fade-up" data-aos-delay="200">
                            <img src={process.env.PUBLIC_URL + '/img/how08.webp'}/>
                        </div>
                        <div className='about_text about_text2' data-aos="fade-right" data-aos-delay="200">
                            <p>The hallway</p>
                            <p className='about_icon'><AiOutlineSwapRight/></p>
                        </div>
                    </div>
                    <div className='about_inner'>
                        <div className='about_img2' data-aos="fade-up" data-aos-delay="400">
                            <img src={process.env.PUBLIC_URL + '/img/how09.webp'}/>
                        </div>
                        <div className='about_text about_text2' data-aos="fade-right" data-aos-delay="200">
                            <p>Small space</p>
                            <p className='about_icon'><AiOutlineSwapRight/></p>
                        </div>
                    </div>
                </div>
                <div className='about_wrap4'>
                    <div className='about_img' data-aos="fade-up" data-aos-delay="400">
                        <img src={process.env.PUBLIC_URL + '/img/how04.webp'}/>
                    </div>
                    <div className='about_text' data-aos="fade-right" data-aos-delay="200">
                        <p>Bring your Outdoor Spaces Life</p>
                        <p className='about_icon'><AiOutlineSwapRight/></p>
                    </div>
                </div>
            </div>
            <div className='about_cate d-flex'>
                <div className='about_cate_box'>
                    <img src={process.env.PUBLIC_URL + '/img/lamp01.svg'}/>
                    <p>Pandants</p>
                    <p className='about_cate_icon'><AiOutlineSwapRight/></p>
                </div>
                <div className='about_cate_box'>
                    <img src={process.env.PUBLIC_URL + '/img/lamp02.svg'}/>
                    <p>Floor lamps</p>
                    <p className='about_cate_icon'><AiOutlineSwapRight/></p>
                </div>
                <div className='about_cate_box'>
                    <img src={process.env.PUBLIC_URL + '/img/lamp03.svg'}/>
                    <p>Table lamps</p>
                    <p className='about_cate_icon'><AiOutlineSwapRight/></p>
                </div>
                <div className='about_cate_box'>
                    <img src={process.env.PUBLIC_URL + '/img/lamp04.svg'}/>
                    <p>Wall lamps</p>
                    <p className='about_cate_icon'><AiOutlineSwapRight/></p>
                </div>
                <div className='about_cate_box'>
                    <img src={process.env.PUBLIC_URL + '/img/lamp05.svg'}/>
                    <p>Outdoor lamps</p>
                    <p className='about_cate_icon'><AiOutlineSwapRight/></p>
                </div>

            </div>
        </>
        
    );
};

export default About;