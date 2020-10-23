import React , {useEffect, useState } from 'react';

const Exam08 = () => {
    const [count , setCount] = useState(0);
    useEffect(()=>{
        console.log("----랜더링.. -----")
        return ()=>{
            console.log("---- 언 마운트-----")
        };
    });

    const InPlus =  ()=>setCount(count+1);
    return (
        
        <div>
           <button onClick={ InPlus }> 상태값 변경 </button>
        </div>
    );
};

export default Exam08;