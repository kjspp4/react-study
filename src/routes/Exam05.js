import React from 'react';

import '../Exam05.css'

const Exam05 = () => {
    const style = {
        backgroundColor:'black',
        padding:'16px',
        color:'white',
        fontSize:'36px'
    };
    return (
        <>
        {/* 주석은 이렇게 남겨야 함..   */}
        
        <div style={style}>
            스타일..
        </div>
        <div className="test">
            스타일2222
        </div>

        </>
    );
};

export default Exam05;