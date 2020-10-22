import React from 'react';
import {BrowserRouter as Routes , Route, Switch,Link,NavLink, useParams} from 'react-router-dom'

import Exam01 from './routes/Exam01'
import Exam02 from './routes/Exam02'
import Exam03 from './routes/Exam03'

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
          {/* <li><NavLink exact to="/exam01" >useState 연습</NavLink> </li>
          <li><NavLink exact to="/contract">Contract</NavLink> </li> */}
        </ul>
        <Switch>
          <Route exact  path="/" component={Exam01}></Route>
          <Route exact  path="/exam02" component={Exam02}></Route>
          <Route exact  path="/exam03" component={Exam03}></Route>
          {/* <Route exact path="/exam01"  component={Exam01}  > </Route>
          <Route exact path="/contract" component={Contract} ></Route> */}
        
          <Route  path="/">Not Fount</Route>
        </Switch>
      </Routes>

  );
}

export default App;
