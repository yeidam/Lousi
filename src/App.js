import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios, { Axios } from 'axios';
import Slider from 'react-slick';
import './App.css';

import styled from 'styled-components';

import img_01 from './banner.png';
// import dataA from './data.js';
import data from './data.js';
import List from './Compornent/List.js';
import Slide from './Compornent/slider.js';
import Detail from './pages/Detail.js';
import About from './pages/About';

let count = 0;

function App() {

  let [items, setItems] = useState(data);
  let navigate = useNavigate();


  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img className='logo' src={process.env.PUBLIC_URL + '/img/logo.png'}/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>펜던트</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>플로어 램프</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>테이블 램프</Nav.Link>
            {/* <Nav.Link onClick={()=>{navigate(-1)}}>이전</Nav.Link>
            <Nav.Link onClick={()=>{navigate(1)}}>다음</Nav.Link> */}
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>

      {/* 서브 페이지 */}
      <Routes>
        <Route path='/' element={
        <>
          <Slide/>
          {/* <div className='main_banner' style={{backgroundImage :'url('+ img_01 +')'}}></div> */}
          <h2 className='main_title'>Best Item</h2>
          <div className="container">
            <div className="row">
              {
                items.map(function(parm, i){
                  return(
                    <List items={items[i]} i = {i}/>
                  )
                })
              }
            </div>
          </div>
          
          {
            count < 1 ? 
            <button className='main_btn' onClick={()=>{
              count = count + 1;
              axios.get('https://5815959d-63e5-4176-a5e0-44ee738870ce.mock.pstmn.io/newlist')
                .then((result)=>{
                  let copyitem = [...items, ...result.data];
                  setItems(copyitem);
                }).catch(()=>{
                  console.log('통신실패')
                })
            }}>MORE</button> : null
          }
          
        </>
        } />
        
        <Route path='/detail' element={<div>상세페이지</div>} />
        <Route path='/about' element={<About />}>
          <Route path='menber' element={<div> 멤버들</div>}/>
          <Route path='location' element={<div> 회사위치</div>}/>
        </Route>
        <Route path='/detail/:id' element={<Detail items={items} />} />
        
      </Routes>
      
      
    </div>
  );
}

export default App;
