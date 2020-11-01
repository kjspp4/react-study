import React, { useEffect, useState, memo,useRef, useMemo, useCallback } from 'react';

import '../index.css'

/*
   공보여주기.. 
*/
const Ball = memo(({number})=>{
  let background;

  if(number<=10){
    background = "red";
  }else if(number <=20){
    background = "orange";
  }else if(number <=30){
    background = "yellow";
  }else if(number <=40){
    background = "blue";
  }else{
    background = "green";
  }
  return(
    <div className="ball" style={{background}} > {number} </div>
  );
});

const log = console.log;

const getWinNumbers=()=>{
  const candidate = Array(45).fill().map((v, i)=>i+1);
  const shuffle = [];
  console.log('getWinNumbers')
  while(shuffle.length < 7){
    
     let idx =    Math.floor((Math.random() *45));
     if(shuffle.indexOf(candidate[idx]) === -1)
     {
        shuffle.push(candidate[idx]);
     }
  }
  return shuffle.sort();
};






const useSetTimeout= (callback, delay)=>{
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

 // Set up the interval.
 useEffect(() => {
    function tick() {
        savedCallback.current();
    }

    if (delay !== null) {
      let id = setTimeout(tick, delay);
      return () =>  clearTimeout(id);
    }
  }, [delay]);
}


// 콘솔로그 찍어보기. .
const Exam18 = () => {
     //  값을 계속 기억한다. 
    const lottoNumbers = useMemo(()=>getWinNumbers(), [] );  // 값 기억하기.. 
    const [winNumbers, setWinNumbers] = useState(lottoNumbers);
    const [winBalls, setWinBalls] = useState([]);
    const [bonus, setBonus] = useState(null);
    const [redo, setRedo] = useState(false);
    const timeouts = useRef([]);

   
  useEffect(()=>{
    console.log("useEffect");
    for(let i = 0; i<winNumbers.length-1;  ++i){
     timeouts.current[i] = setTimeout(() => {
        setWinBalls((prev)=>[...prev,winNumbers[i]] );
      }, (i+1) * 1000);
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 7000);
    
    return ()=>{
      console.log("---------componentWillUnMount -----------")
      setWinNumbers([]);
      setWinBalls([]);
      setBonus(null);
      timeouts.current.forEach(v => {
          clearTimeout(v);
      });
    };
  }, [timeouts.current]);

  // useCallback  함수를 기억한다.
  // useMemo 
  // 자식 컴포넌트에 함수 pros 를 전달할때는 useCallback  을 쓴다. 
  //
  const onClickRedo = useCallback(()=>{
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
  }, [winNumbers]);


    return (
        <>
          <div>당첨 숫자</div>
          <div id="결과창">
              { winBalls.map((v)=><Ball  key={v} number={v}/>   )}
          </div>
          <div>보너스</div>
          {bonus && <Ball number={bonus}/> }
          { redo &&<button onClick={onClickRedo}> 한 번 더 !</button> }
        </>
    );
};

export default Exam18;