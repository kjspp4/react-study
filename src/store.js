import {createStore}  from 'redux'


const reduce = (state, action)=>{
   
    if(state === undefined){
        return {number:0};
    }

    if(action.type==="INCREMENT"){
        console.log(state.number)
        return {...state, number: state.number+ action.size };
    }

    return state;
}

export default   createStore(reduce,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

