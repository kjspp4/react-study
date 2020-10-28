import React, { useEffect, useState } from 'react';




const Exam14 = () => {
    const [question, setQuestion] = useState([Math.floor(Math.random() *9 +1 ), Math.floor(Math.random() *9 +1 )]);
    const [_input, setInput] = useState(0);
    const [result, setResult] = useState('');
    const init = ()=>{
        setQuestion([Math.floor(Math.random() *9 +1 ), Math.floor(Math.random() *9 +1 )])
    }


    const style = {
        'color': 'blue', 
        'font-weight':'bold'
    };

    const handelOnChange = (e)=>{
        setInput(e.target.value);
    };

    const  handelResult = (e)=>{    
        const _question =    question.reduce((a, c) =>a*c);
        console.log(_question)
        if(_question === Number.parseInt(_input))
        {
            setResult("정답")
            init();
            setInput('');
            
        }else{
            setResult("땡")
        }
    };

    
    return (
        <div>
        <div><label for="question" style={style}>문제</label> {`${question[0]} * ${question[1]} = `}    </div>
        <input type="number" id="question" name ="question" value={_input} onChange={handelOnChange }/>
        <button type="button"  onClick={handelResult } > 입력 </button>
        <div id="result"> {result} </div>
    </div>
    );
};

export default Exam14;