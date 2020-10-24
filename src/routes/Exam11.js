import React, { useState } from 'react';


const Exam11 = () => {
   
    const [list, setList] = useState({ data: [ 
                                {id:0, color:"red"} 
                                ,{id:1, color:"blue"} 
                                ,{id:2, color:"green"} 
                            ], selectColor:""
                          }
    );

    

    const handelSelectColor = (selcolor)=>{
        setList({...list, selectColor:selcolor });
    };
    
    
    return (
        <>

            <BoxColorList items={list}  colorChange={handelSelectColor}  />
        </>
    );
};


const BoxColorList = ({items, colorChange})=>{
    console.log(items);
    const list = items.data.map(item=><BoxColor item={item}  selectColor={items.selectColor} colorChange={colorChange}  key={item.id} />);
    return (
        <>
         { list } 
        </>
    );
}




const BoxColor = ({item, selectColor, colorChange})=>{

    console.log(selectColor);
    const [color , setColor] = useState('');

    const style = {
        border:"5px solid black",
        padding:"10px",
        background:  selectColor || color
    };

    const handelSelectColor= ()=>{
        colorChange(item.color);
        setColor(item.color);
        
    };

    return(
        <div style={style}>
            <h1> { item.color } </h1>
            <button onClick={ handelSelectColor  } >fire</button>
        </div>
    );
}


export default Exam11;