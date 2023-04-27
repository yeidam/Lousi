import React from 'react';
import { useNavigate } from 'react-router-dom';

const List = (props) => {


    
    let navigate = useNavigate();

    return (
        <div onClick={()=>{navigate('/detail/'+props.i+'')}} className="col-md-6 main_product">
            <img className='item-img' src={process.env.PUBLIC_URL + '/img/img_0'+props.i+'.jpg'} />
            <h4>{props.items.title}</h4>
            <p>{props.items.color}</p>
        </div>
    );
};

export default List;