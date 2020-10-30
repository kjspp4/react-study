import React, { useRef, useState, useEffect } from 'react';


const useInterval = (callback, delay) =>{
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
  

      if (delay !== null) {
        let id = setInterval(savedCallback.current, delay);
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

    useInterval()

    useEffect(() => {
        let id = setInterval(() => {
            let _color = (color === 'red') ? 'blue' : 'red';
            console.log(_color);
            setColor(_color);
        }, 1000);
        return () => clearInterval(id);
      }, [color]);


  
 
    // const FlashText=()=> {
         
    //      let _color = (color === 'red') ? 'blue' : 'red';
    //      console.log(_color);
    //      setColor(_color);
        
    // }
 
    // const StopTextColor=()=> {
    //   clearInterval(nIntervId.current);
    // }


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

const Exam19 = () => {
   

    return (
        <div>
            <MyBox/>
            <Counter></Counter>
        </div>
    );
};

export default Exam19;