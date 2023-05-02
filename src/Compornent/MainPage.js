import React from "react";
import { Button } from 'react-bootstrap';

const MainPage = () => {
    return (
        <>
            <div className="main_page_wrap">
                <div className="main_1">
                    <div className="main_text_wrap">
                        <h2>(RE)DISCOVER ICONS</h2>
                        <span>
                            시대를 초월한 디자인을 겸비한 최고의 퀄리티. Poul Henningsen의 PH5, Arne Jacobsen의 AJ Oxford, Øivind Slaatto의 Patera와 Verner Panton의 Panthella 테이블 등 세계적으로 유명한 디자이너들의 아이코닉한 디자인을 다시 발견해 보세요.
                        </span>
                        <Button className="main_btn" variant="outline-primary">알아보기</Button>{' '}
                    </div>
                </div>
                <div className="main_1_img">
                    <img  src={process.env.PUBLIC_URL + '/img/main_1.webp'}/>
                </div>
                <div className="main_1 main_2">
                    <div className="main_text_wrap">
                        <h2>AJ Oxford</h2>
                        <span>
                            시대를 초월한 디자인을 겸비한 최고의 퀄리티. Poul Henningsen의 PH5, Arne Jacobsen의 AJ Oxford, Øivind Slaatto의 Patera와 Verner Panton의 Panthella 테이블 등 세계적으로 유명한 디자이너들의 아이코닉한 디자인을 다시 발견해 보세요.
                        </span>
                        <Button className="main_btn" variant="outline-primary">알아보기</Button>{' '}
                    </div>
                </div>
                <div className="main_2_img">
                    <img  src={process.env.PUBLIC_URL + '/img/main_2.webp'}/>
                </div>
            </div>
            <div className="main_cate">
                <div className="cate_wrap d-flex">
                    <ul>
                        <li>
                            <div className="cate_img">
                                <img  src={process.env.PUBLIC_URL + '/img/category_1.jpg'}/>
                                <div className="cate_hover">
                                    <Button className="cate_btn" variant="outline-primary">MORE</Button>{' '}
                                </div>
                            </div>
                            <p>PENDANT LAMP</p>
                        </li>
                        <li>
                            <div className="cate_img">
                                <img  src={process.env.PUBLIC_URL + '/img/category_2.jpg'}/>
                                <div className="cate_hover">
                                    <Button className="cate_btn" variant="outline-primary">MORE</Button>{' '}
                                </div>
                            </div>
                            <p>TABLE LAMP</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <div className="cate_img">
                                <img  src={process.env.PUBLIC_URL + '/img/category_3.webp'}/>
                                <div className="cate_hover">
                                    <Button className="cate_btn" variant="outline-primary">MORE</Button>{' '}
                                </div>
                            </div>
                            <p>FLOOR LAMP</p>
                        </li>
                        <li>
                            <div className="cate_img">
                                <img  src={process.env.PUBLIC_URL + '/img/category_4.webp'}/>
                                <div className="cate_hover">
                                    <Button className="cate_btn" variant="outline-primary">MORE</Button>{' '}
                                </div>
                            </div>
                            <p>WALL LAMP</p>
                        </li>
                    </ul>

                </div>
            </div>
        </>
    );
}

export default MainPage;