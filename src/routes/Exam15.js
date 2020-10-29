import React, { useState, useEffect, memo } from 'react';


const Try= memo( ({items})=>{
    return(
        <>
            <li> {`시도:${items.try} , 결과 :${items.result}`} </li>
        </>
    );
});


const Exam15 = () => {
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const [answer, setAnswer] = useState([]);
    const [datas, setData] = useState({result:'',tries: [] });

    const getNumbers=()=>{
        let ret = [];
        while(ret.length!==4)
        {
            let _val =  Math.ceil(Math.random()*9);
            if(ret.includes(_val)) continue;
            ret.push(_val);    
        }
        return ret;
    }
 
    useEffect(()=>{
        console.log("랜더링.. ")
        setAnswer(getNumbers());
    }, [])


    
     const  handleSubmit=(e)=>{
          e.preventDefault();
         
          let ret_strike = 0;
         let ret_ball = 0;

        if(value ===answer.join('')){
            setData( {result:'홈런', tries:[...datas.tries, { try:value, result:'홈런'}] } );
        }else{
            for(let i = 0; i<value.length; ++i){
                let _val =  Number.parseInt(value[i]);
                console.log(typeof value[i])
                console.log(typeof answer[i])
    
                if(_val ===answer[i] )
                {
                    ret_strike++;
                }else{
                    if(answer.includes(_val)){
                        ret_ball++;
                    }
                }
            }
            let _retsult = `${ret_strike} 스트라이크 ${ret_ball}  입니다.`
            setData( {result:_retsult, tries:[...datas.tries, { try:value, result:_retsult}] } );
        }

        setAnswer(getNumbers());

      }

      const onChange=(e)=>{
        setValue(e.target.value);
      }


    return (
        <div>
            <h1>{result} </h1>
           <h2>{answer  }</h2>
            <form onSubmit={handleSubmit}>
                <input name ="answer" type="number"  maxLength={4} type="number" value={value} onChange={onChange} ></input>
                <button type="submit" >  제출</button>
            </form>
            <div>시도 : { datas.tries.length} </div>
            <ul>
              {
                  datas.tries.map( (p)=>  <Try items={p}></Try>)
              }
            </ul>
        </div>
    );
};

export default Exam15;