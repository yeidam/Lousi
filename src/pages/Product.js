import React from 'react';
import { useState } from 'react';
import axios, { Axios } from 'axios';
import {data,product} from '../data.js';
import List from '../Compornent/List.js';
import { useNavigate } from 'react-router-dom';

const Product = () => {
    let count = 0;
    let [items, setItems] = useState(product);
    return (
        <>
            <div className='product_title'>
                <h2>PENDANT</h2>
            </div>
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
            <button onClick={()=>{
                count = count + 1;
                axios.get('https://5815959d-63e5-4176-a5e0-44ee738870ce.mock.pstmn.io/newlist')
                .then((result)=>{
                    let copyitem = [...items, ...result.product];
                    setItems(copyitem);
                }).catch(()=>{
                    console.log('통신실패')
                })
            }}>MORE</button> : null
            }
        </>

    );
};

export default Product;