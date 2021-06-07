import React, { useState, useEffect } from "react"

const BattlePage = ({player}) => {
    console.log(player)
    // useEffect(() =>{
    //     fetch("http://localhost:3000/test")
    //         .then(r=> r.json())
    //         .then(d=>console.log(d))

    //     fetch("http://localhost:3000/battle")
    //         .then(r=> r.json())
    //         .then(d=>console.log(d))
    // })

    const abilityList = player.specialty.abilities.map((i)=><p>Skill: {i.name} <img className="abilityIcon" src={i.image}/> Description: {i.description}</p>)

    return (
        <>
        <h3>battle of {player.name} vs</h3>
        <img src={player.image}/>
        <h3>Abilities</h3>
        {abilityList}
        </>
    )
}

export default BattlePage