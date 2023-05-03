import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoHeartOutline } from "react-icons/io5";

const List = (props) => {
    
    let navigate = useNavigate();

    return (
        <div onClick={()=>{navigate('/detail/'+props.i+'')}} className="col-md-4 list_item">
            <div className='list_img_wrap'>
                <img className='list_img' src={process.env.PUBLIC_URL + '/img/pen0'+props.i+'.webp'} />
                <IoHeartOutline className="best_icon"/>
            </div>
            <h4>{props.items.title}</h4>
            <span></span>
            <p>{props.items.color}</p>
            <p>{props.items.price}원</p>
        </div>
    );
};

export default List;