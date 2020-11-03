import React, { useState } from 'react';
import '../index.css' 

const AddNumberRoot = ({number,onChangeNumber})=>{
    return(
        <div>
            <h1> Add Number Root</h1>
            <AddNumber number={number}  onChangeNumber={onChangeNumber}></AddNumber>
        </div>
    );
}




const AddNumber = ({number,onChangeNumber}) => {

    const [text, setText]= useState(number);

    const onInputChange=(e)=>{

        setText(e.target.value);
        onChangeNumber(e.target.value);
    }

    const onClick = ()=>{
        setText(Number.parseInt(text)+1);
        onChangeNumber(Number.parseInt(text)+1);
    }

    return (
        <div>
            <h1> Add Number</h1>
            <input type="button" value="+" onClick={onClick} ></input>
            <input type="text" value={text} onChange={onInputChange} ></input>
        </div>
    );
};




const DisplayNumberRoot = ({number})=>{
    return(
        <div>
            <h1> DisplayNumberRoot Root</h1>
            <DisplayNumber number={number}></DisplayNumber>
        </div>
    );
}




const DisplayNumber = ({number}) => {
    return (
        <div>
            <h1> DisplayNumber</h1>
            <input type="text" value={number} readOnly></input>
        </div>
    );
};




const Exam20 = () => {
    const [number, setNumber]= useState(2);

    const onClick=(val)=>{
        setNumber(val);
    }

    return (
        <div>
            <h1> Root</h1>
           <AddNumberRoot number={number} onChangeNumber={onClick} ></AddNumberRoot>
           <DisplayNumberRoot number={number}></DisplayNumberRoot>
        </div>
    );
};

export default Exam20;