import React from "react";

const Event = () => {
    return (
        <div className="event">
            <h2>EVENT</h2>
            <div className="event_wrap">
                <ul className="d-flex">
                    <li>
                        <p className="event_title">신제품 출시 이벤트</p>
                        <p className="event_arrow">
                            자세히보기 
                            <img src={process.env.PUBLIC_URL + '/img/arrow.png'} />
                        </p>
                        <div className="event_img_wrap">
                            <img className='item-img' src={process.env.PUBLIC_URL + '/img/event_2.png'} />
                        </div>
                    </li>
                    <li>
                        <div className="event_img_wrap">
                            <img className='item-img' src={process.env.PUBLIC_URL + '/img/event_1.png'} />
                        </div>
                        <p className="event_title">루이스폴센 TOP 3</p>
                        <p className="event_arrow">
                            자세히보기 
                            <img src={process.env.PUBLIC_URL + '/img/arrow.png'} />
                        </p>
                    </li>
                    <li>
                        <p className="event_title">가정의달 프로모션</p>
                        <p className="event_arrow">
                            자세히보기 
                            <img src={process.env.PUBLIC_URL + '/img/arrow.png'} />
                        </p>
                        <div className="event_img_wrap">
                            <img className='item-img' src={process.env.PUBLIC_URL + '/img/event_3.png'} />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Event;