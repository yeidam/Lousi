import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';


const Detail = (props) => {

    let [alerttext, setAlerttext] = useState(true);

    let [num, setNum] = useState(0);

    let {id} = useParams();

    useEffect(()=>{
        setTimeout(function(){
            setAlerttext(false);
        },3000)
    },[]);


    useEffect(()=>{
        if(isNaN(num) == true){
            alert('수량을 입력하세요');
        }
    },[num])
    return (
        <div className="container detail">
                {
                    alerttext == true ? <div className='alert alert-warning'>신규 가입시 10% 할인 쿠폰 증정</div> :null
                }
            
                <div className="row detail_wrap">
                    <div className="col-md-6">
                        <img className='detail_img' src={process.env.PUBLIC_URL + '/img/pen0'+props.items[id].id+'.webp'}/>
                    </div>
                    <div className="col-md-6">
                    <h2 className="pt-5">{props.items[id].title}</h2>
                    <p>{props.items[id].color}</p>
                    <p>{props.items[id].price}원</p>
                    <p><strong>배송비</strong>무료</p>
                    <p className='detail_num'>수량<input type="text" placeholder="개수" onChange={(e)=>{setNum(e.target.value)}}/></p>
                    <Dropdown>
                        <Dropdown.Toggle className='detail_btn' variant="success" id="dropdown-basic">
                            케이블 유형
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item className='detail_btn_inner' href="#/action-1">화이트 텍스타일</Dropdown.Item>
                            <Dropdown.Item className='detail_btn_inner' href="#/action-2">블랙 텍스타일</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <div className='detail_buy_btn'>
                        <Button className='buy_1' variant="outline-primary">구매하기</Button>{' '}
                        <Button className='buy_2' variant="outline-primary">장바구니에 담기</Button>{' '}
                    </div>
                </div>
                <div className='detail_detail'>
                    <Tabs
                        defaultActiveKey="home"
                        id="uncontrolled-tab-example"
                        className="mb-3 detail_tab_wrap"
                        >
                        <Tab className='detail_tab' eventKey="home" title="상세설명">
                            <img className='detail_detail_img' src={process.env.PUBLIC_URL + '/img/detail0'+props.items[id].id+'.png'}/>
                        </Tab>
                        <Tab className='detail_tab' eventKey="profile" title="후기">
                            <div className='detail_review'>
                                <div className='detail_text_wrap'>
                                    <p>작성된 후기가 없습니다.</p>
                                </div>
                                <Button variant="outline-primary">후기 쓰기</Button>{' '}
                            </div>
                        </Tab>
                        <Tab className='detail_tab' eventKey="contact" title="Q&A">
                            <div className='detail_review'>
                                <div className='detail_text_wrap'>
                                    <p>작성된 질문이 없습니다.</p>
                                </div>
                                <Button variant="outline-primary">질문 쓰기</Button>{' '}
                            </div>
                        </Tab>
                    </Tabs>
                        
                </div>
            </div>
        </div>
    );
};

export default Detail;