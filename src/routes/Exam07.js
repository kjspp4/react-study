import React, { useState } from 'react';

const Exam07 = () => {
    const [count, setCount]= useState(0);

    return (
        <div>
            <h1>  증가수 {count} </h1>
            <button onClick={ ()=>setCount(count+1) }>증가 </button>
            <button onClick={ ()=>setCount(count-1) }>감소 </button>
        </div>
    );
};

export default Exam07