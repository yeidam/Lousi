import React from "react";

const Event = () => {
    return (
        <div className="event">
            <h2>EVENT</h2>
            <div className="event_wrap">
                <ul className="d-flex">
                    <li>
                        <p>event 1</p>
                        <p>자세히 보기 화살표</p>
                        <div className="event_img_wrap"></div>
                    </li>
                    <li>
                        <div className="event_img_wrap"></div>
                        <p>event 1</p>
                        <p>자세히 보기 화살표</p>
                    </li>
                    <li>
                        <p>event 1</p>
                        <p>자세히 보기 화살표</p>
                        <div className="event_img_wrap"></div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Event;