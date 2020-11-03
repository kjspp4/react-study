import React ,{useEffect, useState} from 'react';
import store from '../store'


const AddNumberRoot = ()=>{
    return(
        <div>
            <h1> Add Number Root</h1>
            <AddNumberWrapper ></AddNumberWrapper>
        </div>
    );
}


// --- containers 폴더에서 해야 함. 
const AddNumberWrapper = ()=>{
    return(
    <AddNumber onClick= { (size)=>{
        store.dispatch({type:'INCREMENT', size:size})
    } } ></AddNumber>
    );
}

const AddNumber = ({onClick}) => {

    const [size, setSize]= useState(1);

    const onclick = ()=>{
        onClick(size);
    }

    const onInputChange=(e)=>{

        setSize(Number(e.target.value));
       
    }

    
    return (
        <div>
            <h1> Add Number</h1>
            <input type="button" value="+" onClick={onclick} ></input>
            <input type="text" value={size} onChange={onInputChange} ></input>
        </div>
    );
};




const DisplayNumberRoot = ()=>{
    return(
        <div>
            <h1> DisplayNumberRoot Root</h1>
            <DisplayNumberWapper ></DisplayNumberWapper>
        </div>
    );
}


const DisplayNumberWapper = ()=>{
    const [number, setNumber]  = useState(0);
    useEffect(()=>{
        store.subscribe(()=>{
             setNumber(store.getState().number);
       });
    }, [])

    return (
        <DisplayNumber number={number}></DisplayNumber>
    );
}


const DisplayNumber = ({number}) => {
   
    return (
        <div>
            <h1> DisplayNumber</h1>
            <input type="text" value ={number} readOnly></input>
        </div>
    );
};

const Exam21 = () => {
    return (
        <div>
        <h1> Root</h1>
       <AddNumberRoot  ></AddNumberRoot>
       <DisplayNumberRoot ></DisplayNumberRoot>
    </div>
    );
};

export default Exam21;