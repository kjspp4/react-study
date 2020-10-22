import React, { useState } from 'react';

const Exam02 = () => {
    let text = "useusestate  상태값 처리 함수는 객체 처리.. .";
    const [state, setState] = useState({name:'', age:0});


    console.log("call reder !!!!!")
    return (
        <>
        <p> {`name is ${state.name}`   } </p>
        <p> {`age is ${state.age}`   } </p>

        <input type="text" value={state.name} onChange={ e=>setState({...state, name:e.target.value}) }
        ></input>

        Age
        <input type="number" value={state.age} onChange={ e=>setState({...state, age:e.target.value}) }
        ></input>


        </>
      
    );
};

export default Exam02;