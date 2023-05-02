import React from 'react';
import { useNavigate } from 'react-router-dom';
const List = (props) => {
    
    let navigate = useNavigate();

    return (
        <div onClick={()=>{navigate('/detail/'+props.i+'')}} className="col-md-4 list_item">
            <img className='item-img' src={process.env.PUBLIC_URL + '/img/pen0'+props.i+'.webp'} />
            <h4>{props.items.title}</h4>
            <p>{props.items.color}</p>
            <p>{props.items.price}원</p>
        </div>
    );
};

export default List;