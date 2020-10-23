import React from 'react';

const Exam04 = () => {
    const Title  = `리액트 기본 문법  변수를 사용할때는 retrun  함수 안에서  { 변수 이름} 쓴다. 
    const value = 2;
    return (
        <div>
         {Title}
        {

            1+4===3 ? '맞다':'틀리다'
        }

        {
            1+12==2 && <div> <h1> 나타나라.. </h1> </div>
        }

        {
            (() => {
                if(value===1) return <div>1이다 </div>
                if(value===2) return <div>2이다 </div>
                if(value===3) return <div>3이다 </div>
                return <div> 없다. </div>
              } )()
        }


                </div>
    );
    `;
    const value = 2;
    return (
        <div>
         {Title}
        {

            1+4===3 ? '맞다':'틀리다'
        }

        {
            1+12==2 && <div> <h1> 나타나라.. </h1> </div>
        }

        {
            (() => {
                if(value===1) return <div>1이다 </div>
                if(value===2) return <div>2이다 </div>
                if(value===3) return <div>3이다 </div>
                return <div> 없다. </div>
              } )()
        }


                </div>
    );
};

export default Exam04;