import React, { useState, useEffect } from "react"

const AttributeAddPage = ({sendToHome, player, currentUser, setCurrentUser}) => {
    const [playerStats, setPlayerStats] = useState({
        username: currentUser.username,
        charname: player.name,
        health: player.health,
        defense: player.defense,
        attack: player.attack,
    });
    const [attrCounter, setAttrCounter] = useState(10);
    const [attrSpent, setAttrSpent] = useState(0);

    const changeStat = e =>{
        switch(e.target.value){
            case "inchp":
                if(attrCounter > 0){
                    const newhpup = playerStats.health + 5;
                    const temp = {...playerStats, health: newhpup};
                    setPlayerStats(temp);
                    setAttrCounter((s)=>--s);
                    setAttrSpent((s=>++s));
                }
                break;
            case "dechp":
                if(attrSpent > 0){
                    const newhpdown = playerStats.health - 5;
                    const temp1 = {...playerStats, health: newhpdown};
                    setPlayerStats(temp1);
                    setAttrSpent((s)=>--s);
                    setAttrCounter((s)=>++s);
                }
                break;
            case "incap":
                if(attrCounter > 0){
                    const newattk = ++playerStats.attack;
                    const temp2 = {...playerStats, attack: newattk};
                    setPlayerStats(temp2);
                    setAttrCounter((s)=>--s);
                    setAttrSpent((s=>++s));
                }
                break;
            case "decap":
                if(attrSpent > 0){
                    const newattkd = --playerStats.attack;
                    const temp3 = {...playerStats, attack: newattkd};
                    setPlayerStats(temp3);
                    setAttrSpent((s)=>--s);
                    setAttrCounter((s)=>++s);
                }
                break;
            case "incdp":
                if(attrCounter > 0){
                    const newdef = ++playerStats.defense;
                    const temp4 = {...playerStats, defense: newdef};
                    setPlayerStats(temp4);
                    setAttrCounter((s)=>--s);
                    setAttrSpent((s=>++s));
                }
                break;
            case "decdp":
                if(attrSpent > 0){
                    const newdefd = --playerStats.defense;
                    const temp5 = {...playerStats, defense: newdefd};
                    setPlayerStats(temp5);
                    setAttrSpent((s)=>--s);
                    setAttrCounter((s)=>++s);
                }
                break;
            default:
                console.log("oops")
                break;
        }
    }

    const finalize = () => {
        fetch("http://localhost:3000/change_char_stats",{
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(playerStats)
        })
            .then(r=>r.json())
            .then(d=>{
                setCurrentUser(d);
                sendToHome();
            })
    }

    return(
        <>
            <h1>Add Attributes</h1>
            <h3>Attributes left to add: {attrCounter}</h3>
            Health: {playerStats.health}<br></br>
            <button onClick={changeStat} value="inchp">increase</button><button onClick={changeStat} value="dechp">decrease</button><br></br>
            Attack Power: {playerStats.attack}<br></br>
            <button onClick={changeStat} value="incap">increase</button><button onClick={changeStat} value="decap">decrease</button><br></br>
            Defense Power: {playerStats.defense}<br></br>
            <button onClick={changeStat} value="incdp">increase</button><button onClick={changeStat} value="decdp">decrease</button>
            <br></br><br></br>
            <button onClick={finalize}>Commit</button>
        </>
    )
}

export default AttributeAddPage