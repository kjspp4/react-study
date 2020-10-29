import React, { useState, useRef, memo } from 'react';

/*
 부모 컴포넌트 에서 자식 컴포넌트로 props  전달 시 에는 
 자식 컴포넌트는 memo  로 감싼다. .
*/

const Pure = memo(({count})=>{
    return(
        <>
            <h1> {count}</h1>
        </>
    )

});

const Exam16 = () => {
    const [count, setCount] = useState(0);
    const countInput = useRef();
 
    const handleOnClick= (e)=>{
        
        setCount((prev)=>prev+1 );
        countInput.current.focus();
    }

    return (
        <div>
            <h1> {count} </h1>
            <input type="text" value={count}  ref={countInput} ></input>
           <button onClick={handleOnClick} >클릭</button>
            <Pure count={count}></Pure>

        </div>
    );
};

export default Exam16;