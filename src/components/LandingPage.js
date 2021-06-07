import React, { useState, useEffect } from "react"

const LandingPage = ({sendToSelect, sendToLogin, sendToCreateAcct}) => {
    useEffect(() =>{
        fetch("http://localhost:3000/test")
            .then(r=> r.json())
            .then(d=>console.log(d))

        fetch("http://localhost:3000/battle")
            .then(r=> r.json())
            .then(d=>console.log(d))
    })
    return (
        <>
            <button onClick={sendToLogin}>Login</button>
            <button onClick={sendToCreateAcct}>Create</button>
        </>
    )
}

export default LandingPage