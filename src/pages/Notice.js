import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { AiOutlineLock } from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaSistrix } from "react-icons/fa";

const Notice = () => {
    return (
        <>
            <div className='sub_header'></div>
            <div className='notice'>
                <div className='notice_title_wrap d-flex'>
                    <h2>Q&A</h2>
                    <p>
                        궁금한 내용을 문의 주시면 담당자가 신속하고 친절하게 답변해 드리겠습니다. <br />
                        Q&A에 의견을 등록하시기 전에 궁금하신 사항을 조회하시면 더욱 빠르게 많은 정보를 얻으실 수 있습니다.
                    </p>
                </div>
                <p className='notice_many'>자주하는 질문</p>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <div className='notice_inner_title'>
                                <span>1</span>
                                <span>회원가입 안내</span>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className='notice_inner_text'>
                                [회원가입] 메뉴를 통해 이용약관, 개인정보보호정책 동의 및 일정 양식의 가입항목을 기입함으로써 회원에 가입되며, 가입 즉시 서비스를 이용하실 수 있습니다.
                                <br /><br />
                                회원가입 이후에는 주문하실 때 입력해야하는 각종 정보들을 매번 일일이 입력하지 않으셔도 됩니다. 또한, 회원을 위한 이벤트 및 각종 할인행사에 참여하실 수 있습니다. 
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <div className='notice_inner_title'>
                                <span>2</span>
                                <span>주문안내</span>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className='notice_inner_text'>
                                상품주문은 다음과 같은 단계로 이루어집니다.
                                <br /><br />
                                Step 1: 상품검색<br />
                                Step 2: 장바구니에 담기<br />
                                Step 3: 회원ID 로그인 또는 비회원 주문<br />
                                Step 4: 주문서 작성<br />
                                Step 5: 결제방법선택 및 결제<br />
                                Step 6: 주문 성공 화면 (주문번호)
                                <br /><br />
                                비회원 주문의 경우, 주문조회시 주문번호가 필요하오니 6단계에서 주문번호와 승인번호(카드결제시)를 반드시 메모해 두시기 바랍니다. 단, 회원인 경우 자동 저장되므로 따로 관리하실 필요가 없습니다.
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            <div className='notice_inner_title'>
                                <span>3</span>
                                <span>결제안내</span>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className='notice_inner_text'>
                                주문시 결제방법은 [무통장입금], [가상계좌], [계좌이체], [신용카드]로 4가지 입니다. 결제단계에서 원하시는 결제방식을 선택 후 이용해 주시기 바랍니다.
                                <br /><br />
                                무통장 입금시 상품 구매 대금은 PC뱅킹, 인터넷뱅킹, 텔레뱅킹 혹은 가까운 은행에서 직접 입금하시면 됩니다.  
                                <br /><br />
                                무통장 입금계좌번호 우리은행 1002-1234-1234 홍길동
                                <br />
                                주문시 입력한 입금자명과 실제입금자의 성명이 반드시 일치하여야 하며, 7일 이내로 입금하시기 바랍니다. 기간 내에 입금되지 않은 주문은 자동취소 됩니다. 
                                <br />
                                고액결제의 경우 안전을 위해 카드사에서 확인전화를 드릴 수도 있습니다. 확인과정에서 도난 카드의 사용이나 타인 명의의 주문등 정상적인 주문이 아니라고 판단될 경우 임의로 주문을 보류 또는 취소할 수 있습니다. 
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>
                            <div className='notice_inner_title'>
                                <span>4</span>
                                <span>배송안내</span>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className='notice_inner_text'>
                                고객님께서 주문하신 상품은 입금 확인 후 배송해 드립니다. 다만, 상품의 종류나 일시품절, 제작 등에 따라서 배송이 다소 지연될 수 있으며, 배송이 지연될 경우 사전에 연락드리오니 이점 양해 부탁드립니다. 오후 2시까지 입금확인 된 주문건은 당일 발송(주말/공휴일 제외)이 가능하며 그 이후 주문건은 익일 발송됩니다.
                                <br /><br />
                                배송 방법 : 택배 (한진택배, hanex.hanjin.co.kr, 1588-0011)<br />
                                배송 지역 : 전국지역<br />
                                배송 비용 : 15만원 이상 주문시 무료배송이며, 15만원 미만 주문시 기본 배송비 2,500원이 추가됩니다. (도서 산간지역 및 제주도는 기본 배송비 4 ~ 5,000원이 추가됩니다.)<br />
                                배송 기간 : 결제확인 후 영업일 기준 2~3일 정도 소요
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>
                            <div className='notice_inner_title'>
                                <span>5</span>
                                <span>교환/반품안내</span>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className='notice_inner_text'>
                                교환 및 반품이 가능한 경우 
                                <br />- 상품을 공급 받으신 날로부터 7일이내. 단, 포장이 훼손되어 상품가치가 상실된 경우에는 교환/반품이 불가능합니다.
                                <br />- 공급받으신 상품의 내용이 표기 혹은 광고 내용과 다르거나 다르게 이행된 경우에는 공급받은 날로부터 7일이내
                                <br /><br />
                                교환 및 반품이 불가능한 경우
                                <br />- 고객님의 부주의로 상품 혹은 포장이 훼손되어 상품가치가 상실된 경우
                                <br />- 고객님의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우
                                <br />- 별도 반품불가를 명시한 상품
                                <br /><br />
                                ※ 고객님의 단순 변심에 의한 교환, 반품의 경우 상품반송 비용은 고객님께서 부담하셔야 합니다. (색상 교환, 사이즈 교환 등 포함)
                                <br />※ 반품하실 주소: 안양시
                                <br />※ 고객만족센터: 123-456-789 (상담시간: 오전 9시 ~ 오후 4시)
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>
                            <div className='notice_inner_title'>
                                <span>6</span>
                                <span>환불안내</span>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className='notice_inner_text'>
                                환불시 반품여부를 확인한 후 3일(주말/공휴일 제외)이내에 결제 금액을 환불해 드립니다. 
                                <br />신용카드로 결제하신 경우, 신용카드 승인을 취소하여 결제 대금이 청구되지 않게 합니다.
                                <br />(단, 신용카드 결제일자로 인해 대금이 청구 될수 있으며 이러한 경우 익월 신용카드 대금청구시 카드사에서 환급처리 됩니다.)
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <p className='notice_qna'>1:1 질문</p>
                <div className='notice_qna_wrap'>
                    <div className='notice_qna_inner'>
                        <span>2023-05-05</span>
                        <span><AiOutlineLock/>해외배송</span>
                        <span>작성자1</span>
                    </div>
                    <div className='notice_qna_inner'>
                        <span>2023-05-05</span>
                        <span><AiOutlineLock/>문의</span>
                        <span>작성자2</span>
                    </div>
                    <div className='notice_qna_inner'>
                        <span>2023-05-04</span>
                        <span><AiOutlineLock/>반품 문의 드립니다</span>
                        <span>작성자3</span>
                    </div>
                    <div className='notice_qna_inner'>
                        <span>2023-05-01</span>
                        <span><AiOutlineLock/>고장 as 문의드립니다.</span>
                        <span>작성자4</span>
                    </div>
                </div>
                <div className='notice_bottom d-flex'>
                <Button className='notice_btn' variant="outline-dark">글쓰기</Button>
                <div className='notice_search d-flex'>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className='notice_search_btn'>
                            제목
                        </Dropdown.Toggle>

                        <Dropdown.Menu className='notice_search_btn_inner'>
                            <Dropdown.Item href="#/action-1">제목</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">내용</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">제목 + 내용</Dropdown.Item>
                            <Dropdown.Item href="#/action-4">회원아이디</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button className='notice_search_icon' variant="outline-success"><FaSistrix className='search_icon'/></Button>
                    </Form>
                </div>
                
                </div>    
            </div>
        </>
    );
};

export default Notice;