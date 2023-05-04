import React from 'react';
import { useState } from 'react';
import data from '../data.js';
import List from '../Compornent/List.js';

const Product = () => {

    let [items, setItems] = useState(data);
    return (
        <>
            <div className='sub_header'></div>
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
        </>

    );
};

export default Product;