import { useState } from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios, { Axios } from 'axios';
import { FaSistrix } from "react-icons/fa";
import './App.css';


// import img_01 from './banner.png';
// import dataA from './data.js';
import {data,product} from './data.js';
import List from './Compornent/List.js';
import Slide from './Compornent/Slider.js';
import SliderTwo from './Compornent/SliderTwo.js';
import MainPage from './Compornent/MainPage.js';
import Event from './Compornent/Event.js';
import Detail from './pages/Detail.js';
import About from './pages/About';
import Notice from './pages/Notice.js';
import Product from './pages/Product';

let count = 0;

function App() {

  let [items, setItems] = useState(data);
  let navigate = useNavigate();


  return (
    <div className="App">

      <Navbar variant="light">
        <Container>
          <Navbar.Brand onClick={()=>{navigate('/')}}>
            <img className='logo' src={process.env.PUBLIC_URL + '/img/logo.png'}/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/detail')}}>펜던트</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>회사소개</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/notice')}}>공지사항</Nav.Link>
            {/* <Nav.Link onClick={()=>{navigate(-1)}}>이전</Nav.Link>
            <Nav.Link onClick={()=>{navigate(1)}}>다음</Nav.Link> */}
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <div className='nav_wrap'>
            <div className='nav_submenu'>
              <ul className='d-flex'>
                <li><a href="#">LOGIN</a></li>
                <li><a href="#">JOIN</a></li>
                <li><a href="#">CART</a></li>
                <li><a href="#">MY PAGE</a></li>
              </ul>
            </div>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success"><FaSistrix className='search_icon'/></Button>
            </Form>
          </div>
          
        </Container>
      </Navbar>

      {/* 서브 페이지 */}
      <Routes>
        <Route path='/' element={
        <>
          <Slide/>
          <MainPage/>
          <SliderTwo/>
          <Event/>
          
        </>
        } />
        
        <Route path='/detail' element={<Product/>} />
        <Route path='/about' element={<About />}>
          <Route path='menber' element={<div> 멤버들</div>}/>
          <Route path='location' element={<div> 회사위치</div>}/>
        </Route>
        <Route path='/notice' element={<Notice/>} />
        <Route path='/detail/:id' element={<Detail items={items} />} />
        
      </Routes>
      
      <footer>
        <div className='footer_wrap'>
          <div className='footer_1'>
            <h2>DESIGN TO SHAPE LIGHT</h2>
            <p>루이스폴센은 단순한 램프의 디자인을 넘어서 빛의 형태를 다듬어 실내외 어디든지 사람들에게 편안한 분위기를 제공하기 위해 노력해 왔습니다. 빛의 형태가 만들어 낸 부드럽고 친근한 공간 안에서 우리의 제품은 조화롭게 어울립니다.</p>
          </div>
          <div className='footer_2'>
            <ul>
              <li>
                <p>조명에 대한 영감이 필요하신가요? 뉴스레터를 신청하세요.</p>
                <Button variant="outline-warning" className='footer_btn'>신청하기</Button>{' '}
              </li>
              <li>
                <p>팔로우하기</p>
                <ul className='footer_depth2'>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                  <li>
                    <a href="#">Linkedin</a>
                  </li>
                  <li>
                    <a href="#">Pinterest</a>
                  </li>
                  <li>
                    <a href="#">Youtube</a>
                  </li>
                </ul>
              </li>
              <li>
                <p>루이스폴센</p>
                <ul className='footer_depth2'>
                  <li>
                    <a href="#">Design to Shape Light</a>
                  </li>
                  <li>
                    <a href="#">루이스폴센 소개</a>
                  </li>
                  <li>
                    <a href="#">문의처</a>
                  </li>
                  <li>
                    <a href="#">디자인 및 조명 철학</a>
                  </li>
                  <li>
                    <a href="#">언론</a>
                  </li>
                  <li>
                    <a href="#">채용</a>
                  </li>
                  <li>
                    <a href="#">Quality Policy</a>
                  </li>
                </ul>
              </li>
              <li>
                <p>퀵 링크</p>
                <ul className='footer_depth2'>
                  <li>
                    <a href="#">Pale Rose Collection</a>
                  </li>
                  <li>
                    <a href="#">판매처 찾기</a>
                  </li>
                  <li>
                    <a href="#">지원 및 FAQ</a>
                  </li>
                  <li>
                    <a href="#">마운팅 지침</a>
                  </li>
                  <li>
                    <a href="#">제품 등록</a>
                  </li>
                  <li>
                    <a href="#">뉴스레터</a>
                  </li>
                  <li>
                    <a href="#">Sustainability report</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='footer_3'>
            <ul>
              <li>
                <a href="#">개인정보 보호 정책</a>
              </li>
              <li>
                <a href="#">쿠키 정책</a>
              </li>
              <li>
                <a href="#">문의 양식 - GDPR</a>
              </li>
              <li>
                <a href="#">연례 보고서</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
