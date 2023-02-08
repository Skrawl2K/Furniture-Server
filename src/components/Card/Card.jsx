import mongoose from 'mongoose';
import { useEffect, useState } from 'react';

const Card = (props) => {
    //placeholder in data variable
    const data = null
    return (
        <div className='card'>
            {data.map((item) => (
                <div key={item._id}>
                    <p> {item.topic}</p>
                    <p> {item.text}</p>
                </div>
            ))}
        </div>
    );
};


export default Card;