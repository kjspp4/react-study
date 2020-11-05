import React from 'react';
import {createStore, applyMiddleware} from 'redux'


const middleware1 = store=>next=>action=>{
    console.log('middleware1 start');
    const result = next(action);
    console.log('middleware1 end')
    return result;
}

const middleware2 = store=>next=>action=>{
    console.log('middle2 start');
    const result = next(action);
    console.log('middle2 end');
    return result;
}


const delayAction = store =>next =>action=>{
    const delay = action.meta?.delay;
    console.log(delay);
    if(!delay){
        return next(action);
    }
    const timeoutId = setTimeout(()=>next(action), delay);

    return ()=>clearTimeout(timeoutId);

}


//  미들웨어 로그. 
const printLog = store =>next=> action=>{
    console.log(`prev state= ${JSON.stringify(store.getState()) }` );
    const  result = next(action);
    console.log(`next state= ${JSON.stringify(store.getState()) }` );
    return result;
}


const myReducer = (state= {name:'mike'}, action)=>{
    console.log('myReducer');
    if(action.type === "someAction")
        return {name:'kkkk'};

    return state;
}

const saveToLocalStorage = store =>next=>action=>{
    if(action.meta?.localStorageKey){
        localStorage.setItem(action.meta?.localStorageKey, JSON.stringify(action));
    }
    return next(action);
}

const store = createStore(myReducer, applyMiddleware(saveToLocalStorage, printLog));
// const cancle =  store.dispatch({type:'someAction', meta:{localStorageKey:'mykey',    delay:3000}});
// cancle();

store.dispatch({type:'someAction', meta:{localStorageKey:'mykey',    delay:3000}});


const REMOVE_ALL = "REMOVE_ALL";
const REMOVE = "REMOVE";
const INITIAL_STATE = {todos:[]};
const reducer = (state = INITIAL_STATE , action)=>{
    switch(action.type){
        case REMOVE_ALL:
            return{
                ...state, 
                todos:[]
            };
        case REMOVE:
            return{
                ...state, 
                todos: state.todos.filter(todo=> todo.id!== action.id),
            };
        default:
            return state;
    }
}




const MiddleWareExam = () => {
    return (
        <div>
            미들웨어 사용법
        </div>
    );
};

export default MiddleWareExam;  