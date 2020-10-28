import React, { useState } from 'react';

const Exam13 = () => {
    const [question, setQuestion] = useState('제로초');
    const [_input, setInput] = useState('');
    const [result, setResult] = useState('');
    const [count, setCount] = useState(0);

    const [time, setTimer] =useState(10);

    const style = {
        'color': 'blue', 
        'font-weight':'bold'
    };

    const handelOnChange = (e)=>{
        setInput(e.target.value);
    };

    const  handelResult = (e)=>{    
        const _question =    question[question.length-1];
        if(_input.startsWith(_question))
        {
            setCount(count+1)
            setResult("정답")
            setQuestion(_input)
            setInput('');
            
        }else{
            setResult("땡")
        }
    };

    return (
        <div>
            <div><label for="question" style={style}>제시어</label> {question}  <span style={style}> 맞힌갯수 {count} </span>          </div>
            <input type="text" id="question" name ="question" value={_input} onChange={handelOnChange }/>
            <button type="button"  onClick={handelResult } > 입력 </button>
            <div id="result"> {result} </div>
        </div>
    );
};

export default Exam13;