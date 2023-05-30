import axios from "axios";
import React from "react";
import { useState } from "react";
const Login = () => {
    function loginFunction() {
        console.log("Inside the lofin function");
        console.log(password);
        console.log(username);
        // axios
        // .post("http://192.168.137.1:8080/adminLogin",{
        //     username: username,
        //     password: password
        // })
        // .then((res)=>{
        //     console.log(res)
        // })
        const data = {
            username: username,
            password: password,
        };
        // fetch("http://localhost:8080/adminLogin", {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //     })
        //     .catch(error => {
        //         console.log("error", error);
        //     });

        fetch('http://localhost:8080/adminLogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
                // Handle successful response here
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle error here
            });
    }
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div>
            <h3>Login</h3>
            <div>
                <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} /><br />
                <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} /><br />
                <input type="submit" placeholder="Login" onClick={loginFunction} />
            </div>
        </div>
    );
};
export default Login;