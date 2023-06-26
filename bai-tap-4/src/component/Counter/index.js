import React from 'react';
import style from './style.module.scss'
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0); // => trả về 1 mảng 1 chiều có 2 giá trị

    const onPush = (value) => () => {
        setCount(count + value);
        console.log(count);
    }
    
    return (
        <div className={`${style.Index}`}>
            <button onClick={onPush(1)}>Cộng</button>
            <p>{count}</p>
            <button onClick={onPush(-1)}>Trừ</button>
        </div>
    );
}

export default Counter;
