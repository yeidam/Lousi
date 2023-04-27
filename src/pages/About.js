import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h4>회사 정보다</h4>
            <Link to='/about/menber'>멤버</Link>
            <Link to='/about/location'>회사위치</Link>
            <Outlet></Outlet>
        </div>
    );
};

export default About;