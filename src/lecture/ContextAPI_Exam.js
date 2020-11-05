import React, {createContext, useState, memo, useContext} from 'react';

const UserContext = createContext('unknown');
const ThemeContext = createContext("dark");
const SetUserContext = createContext(()=>{});
/*
const Profile=({username}) =>{
    return(
        <div>
            <Greeting username={username} ></Greeting>
        </div>
    );
}

const Greeting=({username})=>{
        return(  
            <p>  
            {`${username} 님 안녕하세요`}  
            </p>
        );
    
}
*/

const Profile= memo(() =>{
    console.log('PROFILE')
    return(
        <div>
            <Greeting ></Greeting>
        </div>
    );
});




const Greeting=()=>{
    const {username, helloCount} = useContext(UserContext);
    const theme = useContext(ThemeContext);
    const setUser =       useContext(SetUserContext);
    console.log(username)
    const setUserName =  (e)=>{
        setUser( { username: e.target.value, helloCount:helloCount+1 });
    }
        return(  
            // <UserContext.Consumer>
            <>
             <p style={{ color: theme==="dark" ? "gray" : "green" } } >{`${username} 님 안녕하세요`}</p> 
              <input type="text" value={username} onChange={ setUserName}  />

              </>
            // </UserContext.Consumer>
        );
    
}



const ContextAPI_Exam = () => {
    
    const [theme, setTheme] = useState('red');
    const [user , setUser] = useState({username:'mike', helloCount:0 });
    return (
        <div>
            <SetUserContext.Provider value={setUser}>
                <ThemeContext.Provider value={theme}>
                    <UserContext.Provider value={user}>
                        <Profile></Profile>
                    </UserContext.Provider>
                </ThemeContext.Provider>
            </SetUserContext.Provider>
        </div>
    );
};

export default ContextAPI_Exam;