import React from 'react';
import {Route, Switch,Link,NavLink, useParams} from 'react-router-dom'


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
    
      <>

      <h1>REACT ROUTER DOM Example</h1>
      <ul>
        <li><NavLink exact to="/">Home</NavLink> </li>
        <li><NavLink to="/topics">Topics</NavLink> </li>
        <li><NavLink to="/contract">Contract</NavLink> </li>
      </ul>
      <Switch>
        <Route exact  path="/"><Home></Home></Route>
        <Route  path="/topics" ><Topics></Topics></Route>
        <Route path="/contract"><Contract></Contract></Route>
       
        <Route  path="/">Not Fount</Route>
      </Switch>
      </>
  );
}

export default App;
