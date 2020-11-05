import React from 'react';
import {createStore} from 'redux'
import {Provider , useSelector, useDispatch} from 'react-redux'


/*

*/

const INITIAL_STATE={
    user:{name:'mike'}, 
    product :{name:'iphone'}
};


const reduce = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case "setUserName":
            return{
                ...state, 
                user:{...state.user, name:action.name }, 
            };
        default:
            return state;
    }
}
const store = createStore(reduce);

const User = ()=>{
    const user = useSelector(state=>state.user);
    const dispatch = useDispatch();

    return(
        <>
        <div> 
            <p>{`${user.name} 님 안녕하세요 `} </p> 
            <button onClick={()=>dispatch({type:'setUserName', name:'john'   })}>수정 </button>
        </div>
        </>
    );
}

const Product = ()=>{
    const product = useSelector(state=>state.product);
 
    return(
        <>
        <p>{`${product.name} 제품 `} </p> 
        </>
    );
}




const Redux_introduce = () => {
    return (
        <div>
           <Provider store={store}>
               <User/>
                <Product/>
           </Provider>
        </div>
    );
};

export default Redux_introduce;