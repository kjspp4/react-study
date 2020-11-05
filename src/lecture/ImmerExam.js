import React from 'react';
import produce from 'immer'

const person = {name:'mike', age:22};
const newPerson = produce(person, draft=>{
    draft.age = 32;
});

const prevState = {
    user:{
        name:'mike', 
        friends:[
            {name:'jane', age:23}, 
            {name:'jake', age:24}, 
        ]
    }, 
    products:[]
};

const nextState = produce(prevState, draft=>{
    draft.user.friends[0].age = 32;
});

console.log('prevState === nextState', prevState===nextState );

console.log('prevState.user.friends[0] === nextState.user.friends[0]',
prevState.user.friends[0] ===nextState.user.friends[0] );

console.log('prevState.user.friends[1] === nextState.user.friends[1]',
prevState.user.friends[1] ===nextState.user.friends[1] );


console.log('prevState.products === nextState.products',
prevState.products ===nextState.products );



// const reducer = (state , action)=>{
//     return produce(state, draft=>{
//         switch(action.type){
//             case ADD:
//                 draft.todos.push(action.todo);
//                 break;
//             case REMOVE_ALL:
//                 draft.todos =[];
//                 break;
//             default:
//                 break;

//         }
//     });
// }


const ImmerExam = () => {
    return (
        <div>
           { JSON.stringify(newPerson) }
        </div>
    );
};

export default ImmerExam;