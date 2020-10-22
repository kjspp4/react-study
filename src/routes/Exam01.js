import React, { useState } from 'react';

const Exam01 = () => {
    let text = "usestate  상태값 처리 함수는 비동기로 처리된다.";
    const [count, setCount] = useState(0);


    const onclickHandler = (e)=>{
        
        //setCount(count+1);
        //setCount(count+1);

        setCount(v=>v+1);
        setCount(v=>v+1);
    }

    console.log("call reder !!!!!")
    return (
        <>
        <h1>  {text} </h1>
         <h2> {count}</h2>
         <button  onClick={onclickHandler}> 증가</button>

        </>
      
    );
};

export default Exam01;