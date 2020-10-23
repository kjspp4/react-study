import React, { useState } from 'react';


const TestProps= ({name}) =>{
    console.log(name);
    return <div><h1> {name} </h1></div>
}

TestProps.defaultProps= {
    name : '홍길동'
}


const Exam06 = () => {
    const [name, setName] = useState('기본값');

    return (
        <div>
            props 사용해보기...
           <TestProps name="kjm" />
        </div>
    );
};

export default Exam06;