import React, { useRef, useState, useEffect } from 'react';
import background from '../img/back.jpg'
import '../index.css'

const useInterval = (callback, delay) =>{
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
         }
 
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);

}


const Counter= ()=> {
    let [count, setCount] = useState(0);
  
    useInterval(() => setCount(count + 1), 1000);

    // useEffect(() => {
    //   let id = setInterval(() => {
    //     setCount(count + 1);
    //   }, 1000);
    //   return () => clearInterval(id);
    // }, [count]);
  
    return <h1>{count}</h1>;
  }


const MyBox = ()=>{
    //let nIntervId = useRef();
 
    const [color, setColor] = useState('red');

    useInterval(()=>{
        let _color = (color === 'red') ? 'blue' : 'red';
        console.log(_color);
        setColor(_color);
    }, 1000);

    const my_box = {
        "color":color
    }

    return (
        <>
            {/* <button onClick= {ChangeColor}> 컬러 변경</button>
            <button onClick= {StopTextColor}> 컬러 변경 중지</button> */}
            <div style={my_box}>
                <p>hello world</p>
            </div>
        </>
    );
}


const MyImage = ()=>{
    const rspImgCoord ={
        바위:0 , 
        가위: -142, 
        보: -284
    };
    
    const scores = {
        가위:1, 
        바위: 0,
        보 : -1
    };

    const [result, setResult] = useState('');
    const [score, setScore] = useState(0);
    const [imgCoord, setImgCoord] = useState(0); // 0, -142, -284

    const [isRunning, setRunning] = useState(true);

    const rndImgCoord = [0,-142, -284];
    const style_img={
        background: `url(${background}) ${imgCoord}px 0px`
    };

    useInterval(()=>{
        const idx =   Math.floor(Math.random() *3);

        if(rspImgCoord.바위 === imgCoord){
            setImgCoord(rspImgCoord.가위 );
        }else if(rspImgCoord.가위 === imgCoord){
            setImgCoord(rspImgCoord.보);
        }else{
            setImgCoord(rspImgCoord.바위);
        }
    },  isRunning ? 100 : null);    

    // --- 컴퓨터 선택.. 
    const computerChoice = ()=>Object.entries(rspImgCoord).find(v=>v[1] === imgCoord)[0];
        
    const onClickBtn = (choice)=>()=>{
        setRunning(false);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice()];
        const diff = myScore - cpuScore;
        
        if(diff === 0){
            setResult('비겼습니다.');
        }else if([-1, 2].includes(diff)){
            setResult('이겼습니다.');
            setScore((v)=>v+1);
        }else{
            setResult('졌습니다..');
            setScore((v)=>v-1);
        }

        setTimeout(()=>{
            setRunning(true);
        }, 2000)
        
    };


    return(
        <>
            <div id="computer"  style={style_img}  >
            <div>
                <button id="rock"   className="btn" onClick={ onClickBtn('바위') }> 바위</button>    
                <button id="scissor" className="btn" onClick={ onClickBtn('가위') }>가위</button>    
                <button id="paper" className="btn" onClick={ onClickBtn('보') }>보</button>    
            </div>    
          </div>  
          <div>{result}</div>
          <div>현재 {score}점</div>
        </>
    )
}


const Exam19 = () => {
   

    return (
        <div>

           <MyImage/>
        </div>
    );
};

export default Exam19;