import React, { useState, useEffect } from "react"
import {Link, useParams} from "react-router-dom"
import ReactTooltip from "react-tooltip";

const PlayerView = ({user, sendToGearSelect, sendToGearStore, setCurrentPlayerGearStore}) => {
    const params = useParams();
    const id = parseInt(params.id);
    const thePlayer = user.players.find((p) => p.id === id);
    setCurrentPlayerGearStore(thePlayer);

    let gearBuffedStats = {
        health: 0,
        attack: 0,
        defense: 0,
        crit_rate: 0,
        crit_dmg: 0,
        dodge_chance: 0,
        cc_immunity: 0,
        armor_penetration: 0
    }

    for(let i in thePlayer.armor){
        if(thePlayer.armor[i].name){
            gearBuffedStats.health = gearBuffedStats.health + thePlayer.armor[i].hp_value
            gearBuffedStats.attack = gearBuffedStats.attack + thePlayer.armor[i].attk_value
            gearBuffedStats.defense = gearBuffedStats.defense + thePlayer.armor[i].def_value
        }
    }
    const abilityList = thePlayer.abilities.map((a) => 
        <span key={a.name}> 
            <li key={a.name} > 
                <span data-tip data-for={a.name}>{a.name} <img className="abilityIcon" src={a.image} /> </span><br></br> 
            </li> {a.description}<br></br><br></br>
            <ReactTooltip id={a.name} place="right" effect="solid">
                {a.description}<br></br>
                Cooldown: {a.cooldown} turns<br></br>
                <img className="abilityIcon" src={a.image} />
            </ReactTooltip>
        </span>)
        
    const gearDisplay = <div>
        Head: <span data-tip data-for="helmetTip">{thePlayer.armor.head.name}</span> 
        <ReactTooltip id="helmetTip" place="right" effect="solid">
            {thePlayer.armor.head.attk_value > 0 ? <>AP: {thePlayer.armor.head.attk_value}<br></br></>: null}
            {thePlayer.armor.head.def_value > 0 ? <>DP: {thePlayer.armor.head.def_value}<br></br></>: null}
            {thePlayer.armor.head.hp_value > 0 ? <>HP: {thePlayer.armor.head.hp_value}<br></br></>: null}
            {thePlayer.armor.head.armor_penetration > 0 ? <>Pen: {thePlayer.armor.head.armor_penetration}<br></br></> : null }
            {thePlayer.armor.head === "none" ? null : <>{thePlayer.armor.head.set_name} set bonus:<br></br>
            4 pieces: {thePlayer.armor.head.set_bonus}<br></br></>}
        </ReactTooltip><br></br>
        Chest: <span data-tip data-for="chestTip">{thePlayer.armor.chest}</span>
        <ReactTooltip id="chestTip" place="right" effect="solid">
            {thePlayer.armor.chest.attk_value > 0 ? <>AP: {thePlayer.armor.chest.attk_value}<br></br></>: null}
            {thePlayer.armor.chest.def_value > 0 ? <>DP: {thePlayer.armor.chest.def_value}<br></br></>: null}
            {thePlayer.armor.chest.hp_value > 0 ? <>HP: {thePlayer.armor.chest.hp_value}<br></br></>: null}
            {thePlayer.armor.chest.armor_penetration > 0 ? <>Pen: {thePlayer.armor.chest.armor_penetration}<br></br></> : null }
            {thePlayer.armor.chest === "none" ? null : <>{thePlayer.armor.chest.set_name} set bonus:<br></br>
            4 pieces: {thePlayer.armor.chest.set_bonus}<br></br></>}
        </ReactTooltip><br></br>
        Hands: <span data-tip data-for="handsTip">{thePlayer.armor.hands}</span>
        <ReactTooltip id="handsTip" place="right" effect="solid">
            {thePlayer.armor.hands.attk_value > 0 ? <>AP: {thePlayer.armor.hands.attk_value}<br></br></>: null}
            {thePlayer.armor.hands.def_value > 0 ? <>DP: {thePlayer.armor.hands.def_value}<br></br></>: null}
            {thePlayer.armor.hands.hp_value > 0 ? <>HP: {thePlayer.armor.hands.hp_value}<br></br></>: null}
            {thePlayer.armor.hands.armor_penetration > 0 ? <>Pen: {thePlayer.armor.hands.armor_penetration}<br></br></> : null }
            {thePlayer.armor.hands === "none" ? null : <>{thePlayer.armor.hands.set_name} set bonus:<br></br>
            4 pieces: {thePlayer.armor.hands.set_bonus}<br></br></>}
        </ReactTooltip><br></br>
        Legs: <span data-tip data-for="legsTip"> {thePlayer.armor.legs}</span>
        <ReactTooltip id="legsTip" place="right" effect="solid">
            {thePlayer.armor.legs.attk_value > 0 ? <>AP: {thePlayer.armor.legs.attk_value}<br></br></>: null}
            {thePlayer.armor.legs.def_value > 0 ? <>DP: {thePlayer.armor.legs.def_value}<br></br></>: null}
            {thePlayer.armor.legs.hp_value > 0 ? <>HP: {thePlayer.armor.legs.hp_value}<br></br></>: null}
            {thePlayer.armor.legs.armor_penetration > 0 ? <>Pen: {thePlayer.armor.legs.armor_penetration}<br></br></> : null }
            {thePlayer.armor.legs === "none" ? null : <>{thePlayer.armor.legs.set_name} set bonus:<br></br>
            4 pieces: {thePlayer.armor.legs.set_bonus}<br></br></>}
        </ReactTooltip><br></br>
        Feet: <span data-tip data-for="feetTip">{thePlayer.armor.feet}</span>
        <ReactTooltip id="feetTip" place="right" effect="solid">
            {thePlayer.armor.feet.attk_value > 0 ? <>AP: {thePlayer.armor.feet.attk_value}<br></br></>: null}
            {thePlayer.armor.feet.def_value > 0 ? <>DP: {thePlayer.armor.feet.def_value}<br></br></>: null}
            {thePlayer.armor.feet.hp_value > 0 ? <>HP: {thePlayer.armor.feet.hp_value}<br></br></>: null}
            {thePlayer.armor.feet.armor_penetration > 0 ? <>Pen: {thePlayer.armor.feet.armor_penetration}<br></br></> : null }
            {thePlayer.armor.feet === "none" ? null : <>{thePlayer.armor.feet.set_name} set bonus:<br></br>
            4 pieces: {thePlayer.armor.feet.set_bonus}<br></br></>}
        </ReactTooltip><br></br>
        Necklace: <span data-tip data-for="neckTip">{thePlayer.armor.neck}</span>
        <ReactTooltip id="neckTip" place="right" effect="solid">
            {thePlayer.armor.neck.attk_value > 0 ? <>AP: {thePlayer.armor.neck.attk_value}<br></br></>: null}
            {thePlayer.armor.neck.def_value > 0 ? <>DP: {thePlayer.armor.neck.def_value}<br></br></>: null}
            {thePlayer.armor.neck.hp_value > 0 ? <>HP: {thePlayer.armor.neck.hp_value}<br></br></>: null}
            {thePlayer.armor.neck.armor_penetration > 0 ? <>Pen: {thePlayer.armor.neck.armor_penetration}<br></br></> : null }
            {thePlayer.armor.neck === "none" ? null : <>{thePlayer.armor.neck.set_name} set bonus:<br></br>
            4 pieces: {thePlayer.armor.neck.set_bonus}<br></br></>}
        </ReactTooltip><br></br>
        Ring: <span data-tip data-for="ringTip">{thePlayer.armor.ring1}</span>
        <ReactTooltip id="ringTip" place="right" effect="solid">
            {thePlayer.armor.ring1.attk_value > 0 ? <>AP: {thePlayer.armor.ring1.attk_value}<br></br></>: null}
            {thePlayer.armor.ring1.def_value > 0 ? <>DP: {thePlayer.armor.ring1.def_value}<br></br></>: null}
            {thePlayer.armor.ring1.hp_value > 0 ? <>HP: {thePlayer.armor.ring1.hp_value}<br></br></>: null}
            {thePlayer.armor.ring1.armor_penetration > 0 ? <>Pen: {thePlayer.armor.ring1.armor_penetration}<br></br></> : null }
            {thePlayer.armor.ring1 === "none" ? null : <>{thePlayer.armor.ring1.set_name} set bonus:<br></br>
            4 pieces: {thePlayer.armor.ring1.set_bonus}<br></br></>}
        </ReactTooltip><br></br>
        Ring: <span data-tip data-for="ring2Tip">{thePlayer.armor.ring2}</span>
        <ReactTooltip id="ring2Tip" place="right" effect="solid">
            {thePlayer.armor.ring2.attk_value > 0 ? <>AP: {thePlayer.armor.ring2.attk_value}<br></br></>: null}
            {thePlayer.armor.ring2.def_value > 0 ? <>DP: {thePlayer.armor.ring2.def_value}<br></br></>: null}
            {thePlayer.armor.ring2.hp_value > 0 ? <>HP: {thePlayer.armor.ring2.hp_value}<br></br></>: null}
            {thePlayer.armor.ring2.armor_penetration > 0 ? <>Pen: {thePlayer.armor.ring2.armor_penetration}<br></br></> : null }
            {thePlayer.armor.ring2 === "none" ? null : <>{thePlayer.armor.ring2.set_name} set bonus:<br></br>
            4 pieces: {thePlayer.armor.ring2.set_bonus}<br></br></>}
        </ReactTooltip><br></br>
        Earring: <span data-tip data-for="earTip">{thePlayer.armor.ear1}</span>
        <ReactTooltip id="earTip" place="right" effect="solid">
            {thePlayer.armor.ear1.attk_value > 0 ? <>AP: {thePlayer.armor.ear1.attk_value}<br></br></>: null}
            {thePlayer.armor.ear1.def_value > 0 ? <>DP: {thePlayer.armor.ear1.def_value}<br></br></>: null}
            {thePlayer.armor.ear1.hp_value > 0 ? <>HP: {thePlayer.armor.ear1.hp_value}<br></br></>: null}
            {thePlayer.armor.ear1.armor_penetration > 0 ? <>Pen: {thePlayer.armor.ear1.armor_penetration}<br></br></> : null }
            {thePlayer.armor.ear1 === "none" ? null : <>{thePlayer.armor.ear1.set_name} set bonus:<br></br>
            4 pieces: {thePlayer.armor.ear1.set_bonus}<br></br></>}
        </ReactTooltip><br></br>
        Earring: <span data-tip data-for="ear2">{thePlayer.armor.ear2}</span>
        <ReactTooltip id="ear2" place="right" effect="solid">
            {thePlayer.armor.ear2.attk_value > 0 ? <>AP: {thePlayer.armor.ear2.attk_value}<br></br></>: null}
            {thePlayer.armor.ear2.def_value > 0 ? <>DP: {thePlayer.armor.ear2.def_value}<br></br></>: null}
            {thePlayer.armor.ear2.hp_value > 0 ? <>HP: {thePlayer.armor.ear2.hp_value}<br></br></>: null}
            {thePlayer.armor.ear2.armor_penetration > 0 ? <>Pen: {thePlayer.armor.ear2.armor_penetration}<br></br></> : null }
            {thePlayer.armor.ear2 === "none" ? null : <>{thePlayer.armor.ear2.set_name} set bonus:<br></br>
            4 pieces: {thePlayer.armor.ear2.set_bonus}<br></br></>}
        </ReactTooltip><br></br>
    </div>
    const statDisplay = <div>
            <span data-tip data-for="hpTip">Health: {thePlayer.armored_health} </span>
            <ReactTooltip id="hpTip" place="right" effect="solid">
                Base: {thePlayer.health}<br></br>
                From Gear: {gearBuffedStats.health}
            </ReactTooltip>
            <br></br>
            <span data-tip data-for="attkTip">Attack: {thePlayer.armored_attack} </span>
            <ReactTooltip id="attkTip" place="right" effect="solid">
                Base: {thePlayer.attack}<br></br>
                From Gear: {gearBuffedStats.attack}
            </ReactTooltip>
            <br></br>
            <span data-tip data-for="defTip">Defense: {thePlayer.armored_defense} </span>
            <ReactTooltip id="defTip" place="right" effect="solid">
                Base: {thePlayer.defense}<br></br>
                From Gear: {gearBuffedStats.defense}
            </ReactTooltip><br></br>
            <span data-tip data-for="critTip">Critical Hit Rate: {thePlayer.armored_crit_rate}%</span>
            <ReactTooltip id="critTip" place="right" effect="solid">
                Base: {thePlayer.crit_rate}%<br></br>
                From Gear: {gearBuffedStats.crit_rate}%
            </ReactTooltip><br></br>
            <span data-tip data-for="critDmg">Critical Damage: {thePlayer.armored_crit_dmg}%</span>
            <ReactTooltip id="critDmg" place="right" effect="solid">
                Base: {thePlayer.crit_dmg}%<br></br>
                From Gear: {gearBuffedStats.crit_dmg}%
            </ReactTooltip><br></br>
            <span data-tip data-for="penTip">Armor Penetration: {thePlayer.armored_armor_penetration}%</span>
            <ReactTooltip id="penTip" place="right" effect="solid">
                Base: {thePlayer.armor_penetration}%<br></br>
                From Gear: {gearBuffedStats.armor_penetration}%
            </ReactTooltip><br></br>
            <span data-tip data-for="dodgeTip">Dodge Chance: {thePlayer.armored_dodge_chance}%</span>
            <ReactTooltip id="dodgeTip" place="right" effect="solid">
                Base: {thePlayer.dodge_chance}%<br></br>
                From Gear: {gearBuffedStats.dodge_chance}%
            </ReactTooltip><br></br>
            <span data-tip data-for="ccTip">CC Resist: {thePlayer.armored_cc_immunity}%</span>
            <ReactTooltip id="ccTip" place="right" effect="solid">
                Base: {thePlayer.cc_immunity}%<br></br>
                From Gear: {gearBuffedStats.cc_immunity}%
            </ReactTooltip><br></br>
    </div>

    const toGearStore = () =>{
        sendToGearStore();
    }

    return(
        <>
            <h1>{thePlayer.name}</h1><img src={thePlayer.image} />
            <h3>Stats</h3>
            {statDisplay}
            <h3>Abilities</h3>
            {abilityList}
            <h3>Gear</h3>
            {gearDisplay}
            <br></br><button onClick={sendToGearSelect}>Gear Select</button><br></br>
            <br></br><button onClick={toGearStore}>Gear Store</button>
        </>
    )
}

export default PlayerView