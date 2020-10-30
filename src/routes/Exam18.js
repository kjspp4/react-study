import React, { useState } from 'react';
import background from '../img/img.jpeg'
import '../index.css'

/*
이기면 1점
비기점 0점
지면 -1점
*/

const Exam18 = () => {

    const [result, setResult] = useState('');
    const [score, setScore] = useState(0);
    const [imgCoord, setImgCoord] = useState([]);

    const style_img={
        backgroundImage: `url(${background})`,
        width:"200px"
    
    }


    return (
        <>

        
          <div id="computer"  style={style_img}  >
            <div>
                <button id="rock"   className="btn"> 바위</button>    
                <button id="scissor" className="btn">가위</button>    
                <button id="paper" className="btn">보</button>    
            </div>    
          </div>  
          <div>{result}</div>
          <div>현재 {score}점</div>
        </>
    );
};

export default Exam18;