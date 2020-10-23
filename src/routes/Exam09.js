import React, { useState } from 'react';
import reactRouterDom from 'react-router-dom';

const Exam09 = () => {
  const [information ,setInformation] =useState([
      {id:0, name:"홍길동", phone:11},
      {id:1, name:"고길동", phone:90},
      {id:2, name:"둘리", phone:33},
      {id:3, name:"또치", phone:44}
  ]);
  const [cnt, setCnt] = useState(4);



  const handleCreate = (user)=>{
      //setInformation(  {name:name, phone:phone});
      //console.log(user);
      setCnt(cnt+1);
      setInformation([...information, {id:cnt , ...user }]);
      //console.log("handel create")
  }


  const handelRemove= (id)=>{
    setInformation([ ...information.filter(p=>p.id !== id)]);
  }


  const handleUpdate=(id, user)=>{
    const list =  information.map(
        info =>{
            if(info.id === id){
                return {
                    id:id,
                    ...user
                };
            }
            return info;
        });

    setInformation(list);

      console.log( JSON.stringify(list));

   
  }




  return (
    <>  
        {/* <h1>{`부모.. name :  ${user.name} , phone : ${user.phone}  ` } </h1> */}
        {/* <h1>  { JSON.stringify(information) }</h1> */}
        <PhoneInfoList data={information} onRemove= {handelRemove} onUpdate= {handleUpdate} ></PhoneInfoList>
        <PhoneForm onCreate={handleCreate}  />
    </>
  )
};  



const PhoneInfoList = ({data, onRemove, onUpdate}) =>{
    const list = data.map(info=>(
        <PhoneInfo info={info} key={info.id} onRemove={onRemove} onUpdate= {onUpdate} ></PhoneInfo>
    ));
    console.log("PhoneInfoList");
    return(
        <>
            {list}
        </>
    );
}


const PhoneInfo = ({info, onRemove,onUpdate}) => {
    const style = {
        border: '1px solid black',
        padding:'8px',
        margin:'8px'
        
    }

    const [edit, setEdit] = useState(false);
    const [user, setUser] = useState(info);

    const handelToggleEdit = ()=>{
        if(edit){
            onUpdate(info.id, user);
            //setUser(info);
        }
        // }else{
        //     setUser(info);
        // }
        setEdit(!edit);
    }

    const handelRemove = ()=>{
        onRemove(info.id);
    }

  


    const handleChangeUser=(e)=>{
        setUser({...user, [e.target.name] :e.target.value });
    }

    console.log(user.name);

    return (
        <div style={style}>
            {
                edit ? (
                    <>
                    <div><b> <input name="name"  value= {user.name} onChange={handleChangeUser} />  </b></div>
                    <div><b> <input name="phone" value= {user.phone} onChange={handleChangeUser}  />  </b></div>
                </>
                ) :(
                    <>
                        <div><b> {info.id}  </b></div>
                        <div><b> {info.name}  </b></div>
                        <div> {info.phone}  </div>
                    </>
                )

            }

            
            <button onClick={handelRemove}> 삭제.. </button>
            <button onClick={handelToggleEdit}> 
            { edit ? '적용' : '수정' } 
            
            </button>

        </div>
    );
};





export const PhoneForm = ({onCreate})=>{
    const [user ,setUser] =useState({name:'', phone:'' });
    
    const changeName = (e) =>{
        setUser({ ...user, name: e.target.value  });
        
    }

    const changeValue = (e) =>{
        setUser({ ...user, [e.target.name]: e.target.value  });
    }


    const handleSubmit = (e)=>{
        e.preventDefault();
        onCreate(user);
    }



    return (
       <form onSubmit={handleSubmit} >
           <h3>{`name :  ${user.name} , phone : ${user.phone}  ` } </h3>
           {/* <input onChange={ (e)=>setName(e.target.value) } value={name} ></input> */}

           <input name="name" placeholder="이름" onChange={ changeValue } value={user.name} ></input>
           <input name="phone" placeholder="전화번호" onChange={ changeValue } value={user.phone} ></input>
           <button type="submit"> 등록</button>
       </form>
    );
}



export default Exam09;