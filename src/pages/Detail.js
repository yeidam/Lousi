import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


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
        <div className="container">
                {
                    alerttext == true ? <div className='alert alert-warning'>이벤트 이벤트 이벤트</div> :null
                }
            
            
                <div className="row">
                    <div className="col-md-6">
                        <img className='detail_img' src={process.env.PUBLIC_URL + '/img/img_0'+props.items[id].id+'.jpg'}/>
                    </div>
                    <div className="col-md-6">
                    <h4 className="pt-5">{props.items[id].title}</h4>
                    <p>{props.items[id].color}</p>
                    <p>{props.items[id].price}원</p>
                    <p>수량<input type="text" onChange={(e)=>{setNum(e.target.value)}}/></p>
                    <button className="btn btn-danger">buy</button> 
                </div>
            </div>
        </div>
    );
};

export default Detail;