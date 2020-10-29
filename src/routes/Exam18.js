import React, { useState } from 'react';

import '../index.css'
const Exam18 = () => {

    const [result, setResult] = useState('');
    const [score, setScore] = useState(0);
    const [imgCoord, setImgCoord] = useState([]);


    return (
        <div>
            가위바위보
        </div>
    );
};

export default Exam18;