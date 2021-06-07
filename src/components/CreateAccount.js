import React, { useState, useEffect } from "react"

const CreateAccount = () =>{
    const [formData, setFormData] = useState({
        name: "",
        password: "",
        confirmation: ""
    })

    const changeForm = e => {
        const temp = {...formData, [e.target.name]: e.target.value };
        setFormData(temp);
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        fetch("http://localhost:3000/create_account",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(r=>r.json())
            .then(d=>console.log(d))
    }

    return (
        <>
        <h1>Create Account</h1>
        <form onSubmit={handleFormSubmit}>
            Username: <input type="text" name="name" value={formData.name} onChange={changeForm} /> <br></br>
            Password: <input type="password" name="password" value={formData.password} onChange={changeForm} /> <br></br>
            Confirmation: <input type="password" name="confirmation" value={formData.confirmation} onChange={changeForm} /> <br></br>
            <input type="submit" />
        </form>
        </>
    )
}

export default CreateAccount