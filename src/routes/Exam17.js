import React, { useRef, useState } from 'react';

import '../index.css'

/*
    반응속도 체크
    react 에서 안보여줄때는 null  이다. 
*/
const Exam17 = () => {
    const [items, setItmes]=useState({
        status:'waiting', 
        message:'클릭해서 시작하세요', 
        result : []
    });
    const timeout = useRef(null);
    const startTime = useRef();
    const endTime = useRef();  // 랜더링 할 값이 아닌  변하는 값을 잠시 기록.. 


    const argTiem = ()=> items.result.length &&  items.result.reduce((a, c)=>a+c, 0) /items.result.length;

    const  setStatus = (status, message,   result)=>{
        setItmes(   (prev)=> ({ status:status,message:message, result : (result ===null)  ? [...prev.result] :   [...prev.result, result ] }));
    };




    const onClickScreen=()=>{
        const {status, message, result} = items;

         timeout.current =   setTimeout(() => {
            setStatus("now", "지금클릭",null );
            startTime.current = new Date();
        }, Math.floor(Math.random()* 1000)+2000 );

        if(status==="waiting"){
            setStatus("ready", "초록색이 되면 클릭하세요",null );
            
        }else if(status === "ready"){
            clearTimeout(timeout.current);
            setStatus("waiting", "너무 성급하시군요 ! 초록색이 된 후에 클릭하세요",null );
        }else if(status === "now"){
            endTime.current =new Date();
            clearTimeout(timeout.current);
            console.log(endTime.current -startTime.current );
            setStatus("waiting", "클릭해서 시작하세요",endTime.current - startTime.current );
        }

    };


    return (
        <>
            <div id="screen" className={items.status} onClick={onClickScreen} >  
                {items.message}
            </div>
            { (items.result.length===0) ? null :   <div>평균시간: {argTiem()  } ms  </div>  }
            
        </>
    );
};

export default Exam17;