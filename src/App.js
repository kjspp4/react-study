import React from 'react';
import {BrowserRouter as Routes , Route, Switch,Link,NavLink, useParams} from 'react-router-dom'

import Exam01 from './routes/Exam01'
import Exam02 from './routes/Exam02'
import Exam03 from './routes/Exam03'
import Exam04 from './routes/Exam04'
import Exam05 from './routes/Exam05'
import Exam06 from './routes/Exam06'
import Exam07 from './routes/Exam07'
import Exam08 from './routes/Exam08'
import Exam09 ,{PhoneForm} from './routes/Exam09'

import Exam10  from './routes/Exam10'
import Exam11  from './routes/Exam11'
import Exam12  from './routes/Exam12'
import Exam13  from './routes/Exam13'
import Exam14  from './routes/Exam14'
import Exam15  from './routes/Exam15'
import Exam16  from './routes/Exam16'
import Exam17  from './routes/Exam17'
import Exam18  from './routes/Exam18'
import Exam19  from './routes/Exam19'
import Exam20  from './routes/Exam20'
import Exam21  from './routes/Exam21'
import Exam22  from './routes/Exam22'
import  ContextAPI_Exam  from './lecture/ContextAPI_Exam'
import  RefExam  from './lecture/RefExam'
import  useReduceExam  from './lecture/useReduceExam'
import Redux_introduce from './lecture/Redux_introduce'
import  MiddleWareExam  from './lecture/MiddleWareExam'

import ImmerExam from './lecture/ImmerExam'
const Home = ()=>{
  return(
    <>
      <h2> Home </h2>
      Home...
    </>
  )
}

let contents = [
  {id:1, title:'HTML', desc:'HTML IS...'},
  {id:2, title:'JS', desc:'JS IS...'},
  {id:3, title:'REACT', desc:'REACT IS...'},
  
] 


const Topic = ()=>{
  let {topic_id} = useParams();

  let seletTopic = {id:99, title:'Sorry', desc:'Not Found'}
  
  const findIndex =   contents.findIndex(p=>p.id===parseInt(topic_id));

  if(findIndex >-1){
    seletTopic = contents[findIndex];
  }
  
  return (
    <>
      <h3>  {seletTopic.title}   </h3>
      <h2>  {seletTopic.desc}  </h2>
    </>
  );
}

const Topics = ()=>{
  const list = contents.map( ({id, title})=>
                          <li><NavLink exact to={'/topics/'+id}  > {title}</NavLink> </li>
                      );

  console.dir(list);

  return(
    <>
      <h2> Topics </h2>
      <ul>
        {list}
      </ul>
      <Route exact  path="/topics/:topic_id">
        <Topic></Topic>
      </Route>
      {/* <Switch>
        <Route exact  path="/topics/1">HTML ...</Route>
        <Route  path="/topics/2" >JS ....</Route>
        <Route path="/topics/3">REACT ....</Route>
       
        <Route  path="/">Not Fount</Route>
      </Switch> */}

    </>
  )
}


const Contract = ()=>{
  return(
    <>
      <h2> Contract </h2>
      Contract...
    </>
  )
}


function App() {
  return (
      <Routes>
        <h1>REACT 공부</h1>
        <ul>
          <li><NavLink exact to="/">리액트 훅1장(useState)</NavLink> </li>
          <li><NavLink exact to="/exam02">리액트 useState 객체</NavLink> </li>
          <li><NavLink exact to="/exam03">리액트 useEffect </NavLink> </li>
          <li><NavLink exact to="/exam04">JSX 기본문법 1 </NavLink> </li>
          <li><NavLink exact to="/exam05">JSX 스타일 작성법 </NavLink> </li>
          <li><NavLink exact to="/exam06"> Porps  사용해보기.. </NavLink> </li>
          <li><NavLink exact to="/exam07"> count  만들기.. </NavLink> </li>
          <li><NavLink exact to="/exam08"> life cycle componentDidMount, componentDidUpdate, componentWillUnmount 생성주기 </NavLink> </li>
          <li><NavLink exact to="/exam09"> 전화번호 만들기 </NavLink> </li>
          <li><NavLink exact to="/exam10"> 전화번호 만들기 순수 리덕스 상태관리버젼 1 </NavLink> </li>
          <li><NavLink exact to="/exam11"> 박스 색깔 바꾸기 연습 </NavLink> </li>
          <li><NavLink exact to="/exam12"> 박스 색깔 바꾸기 연습 순수 리덕스 버젼</NavLink> </li>
          <li><NavLink exact to="/exam13"> 끝말잊기.. </NavLink> </li>
          <li><NavLink exact to="/exam14"> 구구단연습 </NavLink> </li>
          <li><NavLink exact to="/exam15"> 숫자야구 </NavLink> </li>
          <li><NavLink exact to="/exam16"> 리액트 성능 랜더링 UseRef </NavLink> </li>
          <li><NavLink exact to="/exam17"> 리액트 반응속도 체크 </NavLink> </li>
          <li><NavLink exact to="/exam18"> 로또</NavLink> </li>
          <li><NavLink exact to="/exam19"> Setinterval 예제(가위바위보, 카운트) </NavLink> </li>
          <li><NavLink exact to="/exam20">  리덕스 (X) 구현예제 </NavLink> </li>
          <li><NavLink exact to="/exam21">  리덕스 (0) 구현예제 </NavLink> </li>
          <li><NavLink exact to="/exam22">  리액트 리덕스 가 필요한 이유 </NavLink> </li>
          <li><NavLink exact to="/ContextAPI_Exam">  컨텍스트 API  사용법</NavLink> </li>
          <li><NavLink exact to="/RefExam">  Ref 사용법</NavLink> </li>
          <li><NavLink exact to="/useReduceExam">  useReduceExam 사용법</NavLink> </li>
          <li><NavLink exact to="/Redux_introduce">  useReduceExam 사용법</NavLink> </li>
          <li><NavLink exact to="/MiddleWareExam">  미들웨어 사용법</NavLink> </li>
          <li><NavLink exact to="/ImmerExam">  Immer  사용법</NavLink> </li>

          

          {/* <li><NavLink exact to="/exam01" >useState 연습</NavLink> </li>
          <li><NavLink exact to="/contract">Contract</NavLink> </li> */}
        </ul>
        <Switch>
          <Route exact  path="/" component={Exam01}></Route>
          <Route exact  path="/exam02" component={Exam02}></Route>
          <Route exact  path="/exam03" component={Exam03}></Route>
          <Route exact  path="/exam04" component={Exam04}></Route>
          <Route exact  path="/exam05" component={Exam05}></Route>
          <Route exact  path="/exam06" component={Exam06}></Route>
          <Route exact  path="/exam07" component={Exam07}></Route>
          <Route exact  path="/exam08" component={Exam08}></Route>
          <Route exact  path="/exam09" component={Exam09}></Route>
          <Route exact  path="/phoneForm" component={PhoneForm}></Route>
          <Route exact  path="/exam10" component={Exam10}></Route>
          <Route exact  path="/exam11" component={Exam11}></Route>
          <Route exact  path="/exam12" component={Exam12}></Route>
          <Route exact  path="/exam13" component={Exam13}></Route>
          <Route exact  path="/exam14" component={Exam14}></Route>
          <Route exact  path="/exam15" component={Exam15}></Route>
          <Route exact  path="/exam16" component={Exam16}></Route>
          <Route exact  path="/exam17" component={Exam17}></Route>
          <Route exact  path="/exam18" component={Exam18}></Route>
          <Route exact  path="/exam19" component={Exam19}></Route>
          <Route exact  path="/exam20" component={Exam20}></Route>
          <Route exact  path="/exam21" component={Exam21}></Route>
          <Route exact  path="/exam22" component={Exam22}></Route>
          <Route exact  path="/ContextAPI_Exam" component={ContextAPI_Exam}></Route>
          <Route exact  path="/RefExam" component={RefExam}></Route>
          <Route exact  path="/useReduceExam" component={useReduceExam}></Route>

          <Route exact  path="/Redux_introduce" component={Redux_introduce}></Route>

          <Route exact  path="/MiddleWareExam" component={MiddleWareExam}></Route>

          <Route exact  path="/ImmerExam" component={ImmerExam}></Route>
          
          
          {/* <Route exact path="/exam01"  component={Exam01}  > </Route>
          <Route exact path="/contract" component={Contract} ></Route> */}
        
          <Route  path="/">Not Fount</Route>
        </Switch>
      </Routes>

  );
}

export default App;
