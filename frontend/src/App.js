import React, { useState } from "react";
import Axios from 'axios'
import "./App.css";

function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus,setLoginStatus] = useState("");

  const login = () => {
   Axios.post("http://Localhost:3000/api/login", {
      username: username,
      password: password,
  }).then((response) => {
    if (response.data.message) {
      setLoginStatus(response.data.message);
    }
    else{
      setLoginStatus(response.data.message);
    }
    });
  };
    
return (
<div className="App">
<div className="login">
<h1>Login Page</h1> 
<label>UserId</label>
<input type="text" placeholder="..." 
onChange={(e) =>{
  setUsername(e.target.value);
  }} />
<label>Password</label>
<input type="text" placeholder="..." 
onChange={(e) =>{
  setPassword(e.target.value);
  }} />
<button type="submit"> Login
</button>
</div>
<h1>{loginStatus}</h1>
</div>
);
}

export default App;
