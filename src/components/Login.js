import React, { useState, useEffect } from "react"

const Login = ({setCurrentUser, sendToHome}) =>{
    const [formData, setFormData] = useState({
        name: "",
        password: ""
    })

    const changeForm = e => {
        const temp = {...formData, [e.target.name]: e.target.value };
        setFormData(temp);
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        fetch("http://localhost:3000/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(r=>r.json())
            .then(d=>{
                setCurrentUser(d);
                sendToHome();
            })
    }

    return (
        <>
        <h1>Login</h1>
        <form onSubmit={handleFormSubmit}>
            Username: <input type="text" name="name" value={formData.name} onChange={changeForm} /> <br></br>
            Password: <input type="password" name="password" value={formData.password} onChange={changeForm} /> <br></br>
            <input type="submit" />
        </form>
        </>
    )
}

export default Login