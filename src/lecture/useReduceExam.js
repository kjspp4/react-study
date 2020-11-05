import React, {createContext, useContext, useReducer} from 'react';


const AppContext =      createContext({});
const DispatchContext = createContext(()=>{});

const INCREMENT = "INCREMENT";

const DECREASE = "DECREASE" ;
const initialValue = {count:0};

const reduce = (state, action)=>{
    if(action.type == INCREMENT)
        return {count:state.count++};
    
    if(action.type == DECREASE)
        return {count:state.count--};

    return state;
}


const Count = () =>{
    const dispatch =  useContext(DispatchContext);
    const state =  useContext(AppContext);

    const Increment= ()=>{
        dispatch({type:INCREMENT, count:state.count});
    } 

    const Decrease= ()=>{
        dispatch({type:DECREASE, count:state.count});
    } 

    

     

    return (
        <>
            <p> {state.count} </p>

            <button onClick={Increment} > 증가  </button>
            <button onClick={Decrease} > 감소  </button>
        </>
    )
}


const useReduceExam = () => {

    const [state, dispatch]   =  useReducer(reduce,initialValue );

    return (
        <div>
            <AppContext.Provider value={state}>
                <DispatchContext.Provider value={dispatch}>
                <Count></Count>
                </DispatchContext.Provider>
            </AppContext.Provider>
        </div>
    );
};

export default useReduceExam;