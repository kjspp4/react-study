


import React, { useEffect, useState } from 'react';
const Exam03 = () => {
    let text = "useEffect  사용법";
    const [count, setCount] = useState(0);

    useEffect(()=>{
            document.title =`업데이트 ${count}`;
                console.log("use effect");
        }
    );

    console.log("call reder !!!!!")
    return (
        <>
            <button onClick={ ()=>setCount(count+1) }> 증가..  </button>

        </>
      
    );
};

export default Exam03;

