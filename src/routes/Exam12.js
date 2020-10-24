import React, { useState } from 'react';

import { createStore } from 'redux'

const getStore = ()=>createStore(reducer);

//  기존 스테이트 값과 action 인자.. 
const initialState  = {data:[], selectColor:""};    




const reducer= (state = initialState, action)=>{
    console.log("REDUX CALL" ,state);
    switch(action.type){
        case "CHANGE_COLOR":
            return ({...state, selectColor:action.color});
            
    }
    return state;
}

const CHANGE_COLOR = "CHANGE_COLOR";

const colorChange = (sel_color) => ({
	type: CHANGE_COLOR,
    color:sel_color
});


const Exam12 = () => {
   
    //const store = getStore();
   // ..store.get
   // store.subscribe(Exam12());

    const [list, setList] = useState({ data: [ 
                                {id:0, color:"red"} 
                                ,{id:1, color:"blue"} 
                                ,{id:2, color:"green"} 
                            ], selectColor:""
                          }
    );

    
    return (
        <>

            <BoxColorList items={list}  />
        </>
    );
};


const BoxColorList = ({items})=>{
    console.log(items);
    const list = items.data.map(item=><BoxColor item={item}  selectColor={items.selectColor}  key={item.id} />);
    return (
        <>
         { list } 
        </>
    );
}




const BoxColor = ({item, selectColor})=>{
 
    

    console.log(selectColor);
    const [color , setColor] = useState('');

    const style = {
        border:"5px solid black",
        padding:"10px",
        background:  selectColor || color
    };

    const handelSelectColor= ()=>{
        // const store =  getStore(); 
        // store.su
        // store.dispatch(colorChange(item.color));
        
    };

    return(
        <div style={style}>
            <h1> { item.color } </h1>
            <button onClick={ handelSelectColor  } >fire</button>
        </div>
    );
}


export default Exam12;