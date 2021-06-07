import React, { useState, useEffect } from "react"

const GearStore = ({currentPlayer, currentUser, setCurrentUser}) => {
    const [allArmor, setAllArmor] = useState();
    
    const handleBuyItem = (e) => {
        
        if(currentPlayer.money - e.target.dataset.price > 0){
            fetch("http://localhost:3000/buy_gear",{
                method: "PATCH",
                headers:{
                    "Content-type": "application/json"
                },
                body: JSON.stringify({user: currentUser.username, player: currentPlayer.name, gear: e.target.value})
            })
                .then(r=>r.json())
                .then(d=>setCurrentUser(d))
        }
    }


    useEffect(()=> {
        fetch("http://localhost:3000/gear_store")
        .then(r=>r.json())
        .then(d=>{
            setAllArmor(d.map((armor) => <div className="gearStoreItem">
                    <span id="armorInnerSpan">
                        {armor.name}<br></br> 
                        <img className="gearStoreIcon" src={armor.image} /> <br></br> 
                        Price: ${armor.price}<br></br>
                        AP: {armor.attk_value}<br></br> DP: {armor.def_value}<br></br> HP: {armor.hp_value}<br></br>
                        {armor.crit_rate > 0 ? <>Crit Rate: {armor.crit_rate}%</> : null}
                        {armor.crit_dmg > 0 ? <>Crit Damage: {armor.crit_dmg}%</> : null}
                        {armor.dodge_chance > 0 ? <>Dodge Chance: {armor.dodge_chance}%</> : null}
                        {armor.cc_immunity > 0 ? <>CC Resist: {armor.cc_immunity}%</> : null}
                        {armor.armor_penetration > 0 ? <>Armor Penetration: {armor.armor_penetration}%</> : null}<br></br>
                        {currentPlayer.gears.find((a) => a.name === armor.name) ? <>OWNED</> : <button className="gearBuyButton" onClick={handleBuyItem} value={armor.name} data-price={armor.price}>Buy</button>}
                    </span>
                    <br></br>
                </div>))
        })
    }, [])

    return (
        <>
            {currentPlayer.name}
            <h3>Balance: ${currentPlayer.money}</h3>
            {allArmor}

        </>
    )
}

export default GearStore