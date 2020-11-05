import React, { useEffect, useRef } from 'react';

const RefExam = () => {
    const inputRef = useRef();

    useEffect(()=>{
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <input type="text" ref={inputRef}></input>
            
            <button onClick={ ()=>{  inputRef.current.focus(); } }> 저장 </button>
        </div>
    );
};

export default RefExam;