import React, { useState, useEffect } from "react"

const CharSelect = ({currentUser, sendToBattle, setCurrentPlayer, sendToAttrAdd}) => {
    let specs;
    const [specShow, setSpecShow] = useState();
    const [formData, setFormData] =useState({
        username: currentUser.username,
        name: "",
        specialty: "",
        image: ""
    });
    useEffect(()=>{
        fetch("http://localhost:3000/specialties")
            .then(r=> r.json())
            .then(d => {
                specs = [...d];
                setSpecShow(specs.map((i)=> <option key={i.name} value={i.name}>{i.name}</option>))
            })
    }, [])

    const changeForm = (e) => {
        switch(e.target.name){
            case "name":
                const temp = {...formData, [e.target.name]: e.target.value};
                setFormData(temp);
                break;
            case "specialty":
                const temp1 = {...formData, [e.target.name]: e.target.value};
                setFormData(temp1);
                break;
            case "image":
                const temp2 = {...formData, [e.target.name]: e.target.value};
                setFormData(temp2);
                break;
            default:
                console.log("oops");
                break;
        }
    }

    const createChar = () => {
        fetch("http://localhost:3000/create_player",{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(r=>r.json())
            .then(d=>{
                setCurrentPlayer(d);
                sendToAttrAdd();
            })
    }

    return (
        <>
            <h1>Char Creation</h1>
            Character Name: <input type="text" name="name"onChange={changeForm} value={formData.name}></input><br></br><br></br>
            Character Picture: <input placeholder="link" type="text" name="image" onChange={changeForm} value={formData.image}></input><br></br><br></br>
            <select name="specialty" onChange={changeForm}>
                <option value="none">Select a Class</option>
                {specShow}
            </select>
            <button onClick={createChar}>Create!</button>
        </>
    )
}

export default CharSelect