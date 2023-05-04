import { useState } from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios, { Axios } from 'axios';

import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import './App.css';

// import img_01 from './banner.png';
// import dataA from './data.js';
import data from './data.js';
import List from './Compornent/List.js';
import Slide from './Compornent/Slider.js';
import SliderTwo from './Compornent/SliderTwo.js';
import MainPage from './Compornent/MainPage.js';
import Event from './Compornent/Event.js';
import Detail from './pages/Detail.js';
import About from './pages/About';
import Notice from './pages/Notice.js';
import Product from './pages/Product';


function App() {

  let [items, setItems] = useState(data);
  let navigate = useNavigate();


  return (
    <div className="App">

      <Navbar variant="light">
        <Container>

          <Nav className="me-auto nav_menu">
            <Nav.Link onClick={()=>{navigate('/')}}>HOME</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>ABOUT</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>SHOP</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/notice')}}>BOARD</Nav.Link>
          </Nav>
          <Navbar.Brand onClick={()=>{navigate('/')}}>
            <img className='logo' src={process.env.PUBLIC_URL + '/img/logo.png'}/>
          </Navbar.Brand>
          <div className='nav_wrap'>
            <div className='nav_submenu'>
              <ul className='d-flex'>
                <li>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success"><AiOutlineSearch className='search_icon'/></Button>
                  </Form>
                </li>
                <li><Link to="/"><AiOutlineUser/></Link></li>
                <li><Link to="/"><AiOutlineShopping/></Link></li>
              </ul>
            </div>
            
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
                  <li><Link to="/">Facebook</Link></li>
                  <li><Link to="/">Instagram</Link></li>
                  <li><Link to="/">Linkedin</Link></li>
                  <li><Link to="/">Pinterest</Link></li>
                  <li><Link to="/">Youtube</Link></li>
                </ul>
              </li>
              <li>
                <p>루이스폴센</p>
                <ul className='footer_depth2'>
                  <li><Link to="/">Design to Shape Light</Link></li>
                  <li><Link to="/">루이스폴센 소개</Link></li>
                  <li><Link to="/">문의처</Link></li>
                  <li><Link to="/">디자인 및 조명 철학</Link></li>
                  <li><Link to="/">언론</Link></li>
                  <li><Link to="/">채용</Link></li>
                  <li><Link to="/">Quality Policy</Link></li>
                </ul>
              </li>
              <li>
                <p>퀵 링크</p>
                <ul className='footer_depth2'>
                  <li><Link to="/">Pale Rose Collection</Link></li>
                  <li><Link to="/">판매처 찾기</Link></li>
                  <li><Link to="/">지원 및 FAQ</Link></li>
                  <li><Link to="/">마운팅 지침</Link></li>
                  <li><Link to="/">제품 등록</Link></li>
                  <li><Link to="/">뉴스레터</Link></li>
                  <li><Link to="/">Sustainability report</Link></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='footer_3'>
            <ul>
              <li><Link to="/">개인정보 보호 정책</Link></li>
              <li><Link to="/">쿠키 정책</Link></li>
              <li><Link to="/">문의 양식 - GDPR</Link></li>
              <li><Link to="/">연례 보고서</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
