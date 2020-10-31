import React, { useEffect, useState } from 'react';
import background from '../img/img.jpeg'
import '../index.css'

/*
이기면 1점
비기점 0점
지면 -1점
*/

const log = console.log;

const getWinNumbers=()=>{
  const candidate = Array(45).fill().map((v, i)=>i+1);
  const shuffle = [];

  while(shuffle.length < 7){
     let idx =    Math.floor((Math.random() *45));
     if(shuffle.indexOf(candidate[idx]) === -1)
     {
        shuffle.push(candidate[idx]);
     }
  }
  return shuffle.sort();
};

const Exam18 = () => {

    const [winNumbers, setWinNumbers] = useState([]);
    const [bonus, setBonus] = useState(0);
    const [imgCoord, setImgCoord] = useState([]);


  useEffect(()=>{
    let numbers =   getWinNumbers();
    setWinNumbers(numbers.splice(0,5));
    setBonus(numbers.splice(6, 6));
    console.log("sdfsdfs")
    return ()=>{
      console.log("-----------------ebd -----------")
      setWinNumbers([]);
      setBonus(null);
    };
  }, []);

    const style_img={
        backgroundImage: `url(${background})`,
        width:"200px"
    
    }


    return (
        <>

          {console.log("랜더링") }
          <div id="computer"  style={style_img}  >
            <div>
                <button id="rock"   className="btn" onClick={getWinNumbers} > 바위</button>    
                <button id="scissor" className="btn">가위</button>    
                <button id="paper" className="btn">보</button>    
            </div>    
          </div>  
          <div>{winNumbers.map(v=>v+"번" )    , bonus}</div>
          <div>현재 {}점</div>
        </>
    );
};

export default Exam18;