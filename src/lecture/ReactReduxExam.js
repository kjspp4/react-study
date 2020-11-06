import React, { useEffect, useReducer } from'react'
import {
    addTimeline,
    removeTimeline, 
    editTimeline, 
    increaseNextPage
} from './timeline/state'

import {addFriend,removeFriend,editFriend } from './friend/state'
import store from './common/store'

store.dispatch(addTimeline({id:1, desc:'코딩은 즐거워'}));
store.dispatch(addTimeline({id:2, desc:'리덕스 좋아'}));
store.dispatch(increaseNextPage());

store.dispatch(editTimeline({id:2, desc:'리덕스 너무 좋아'}));
store.dispatch(removeTimeline({id:1, desc:'코딩은 즐거워'}));


store.dispatch(addFriend({id:1, name:'아이유'}));
store.dispatch(addFriend({id:2, name:'손나은'}));
store.dispatch(editFriend({id:2, name:'수지'}));
store.dispatch(removeFriend({id:1, name:'아이유'}));


const FriendMain = ()=>{
    return(
        <div></div>
    )
}


const TimelineList= ({timelines})=>{
    return(
        <ul>
            {timelines.map(timeline=>(  
                <li key = {timeline.id}> { timeline.desc} </li>
            ))}
        </ul>
    )
}

const TimelineMain = ()=>{
    const [, forceUpdate] = useReducer(v=>v+1, 0);

    useEffect(()=>{
        const unsubscribe = store.subscribe(()=>forceUpdate());
        return ()=>unsubscribe();
    }, []);

    const onAdd = ()=>{
        const timeline = getNext
    }

    return(
        <div></div>
    )
}

const ReactReduxExam = () => {
    return (
            <div>
               <FriendMain/>
               <TimelineMain/>
            </div>
        
    );
};

export default ReactReduxExam;