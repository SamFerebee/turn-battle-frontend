import React, { useState, useEffect } from "react"
import ReactTooltip from "react-tooltip";
import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"

const GearSelect = ({sendToHome, currentUser, setCurrentUser, currentPlayer}) => {
    const [gearSelectionDisplay, setGearSelectionDisplay] = useState();
    const handleGearSelect = (e) => {
        switch(e.target.id){
            case "gear_head_div":
                const allHelmets = currentPlayer.gears.filter((g)=> g.body_part === "head")
                setSelectionDisplay(allHelmets);
                break;
            case "gear_chest_div":

                break;
            case "gear_hands_div":

                break;
            case "gear_legs_div":

                break;
            case "gear_feet_div":

                break;
            case "gear_ring1_div":
                
                break;
            case "gear_ring2_div":
                
                break;
            case "gear_ear1_div":

                break;
            case "gear_ear2_div":

                break;
            case "gear_neck_div":

                break;
            default:
                console.log("default")
        }
    }

    const setSelectionDisplay = (allGear) => {
        let temp = allGear.map((gear) =>
            <>
                <span data-tip data-for={gear.name}>
                    <img className="gearSelectionPic" src={gear.image} data-name={gear.name} onClick={handleNewGearSelection}/>
                </span>
                <ReactTooltip id={gear.name} place="right" effect="solid">
                    {gear.name}<br></br>
                    {gear.attk_value > 0 ? <>AP: {gear.attk_value}<br></br></>: null}
                    {gear.def_value > 0 ? <>DP: {gear.def_value}<br></br></>: null}
                    {gear.hp_value > 0 ? <>HP: {gear.hp_value}<br></br></>: null}
                    {gear.armor_penetration > 0 ? <>Pen: {gear.armor_penetration}<br></br></> : null }
                    {gear.head === "none" ? null : <>{gear.set_name} set bonus:<br></br>
                    4 pieces: {gear.set_bonus}<br></br></>}
                </ReactTooltip>
            </>
        )
        const t2 = <Popup open={true} modal>
            {temp}
        </Popup>
        setGearSelectionDisplay(t2);
    }

    const handleNewGearSelection = (e) => {
        fetch("http://localhost:3000/swap_gear",{
            method: "PATCH",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify({username: currentUser.username, charname:currentPlayer.name, newGear: e.target.dataset.name})
        })
            .then(r=> r.json())
            .then(d=>console.log(d))
    }

    return (
        <>
            <h1> gear select</h1>
            <Popup trigger={<button>Pop</button>} modal>
                    <span>Hi</span>
            </Popup>
            <div id="fullGearDiv">
                <div data-tip data-for="gear_head_div" className="gear-div" id="gear_head_div" onClick={handleGearSelect}>
                    <img className="gearSelectArmorWheelPic" id="gear_head_div" onClick={handleGearSelect} src={currentPlayer.armor.head.image}/>
                </div>
                <ReactTooltip id="gear_head_div" place="right" effect="solid">
                    {currentPlayer.armor.head.name}<br></br>
                    {currentPlayer.armor.head.attk_value > 0 ? <>AP: {currentPlayer.armor.head.attk_value}<br></br></>: null}
                    {currentPlayer.armor.head.def_value > 0 ? <>DP: {currentPlayer.armor.head.def_value}<br></br></>: null}
                    {currentPlayer.armor.head.hp_value > 0 ? <>HP: {currentPlayer.armor.head.hp_value}<br></br></>: null}
                    {currentPlayer.armor.head.armor_penetration > 0 ? <>Pen: {currentPlayer.armor.head.armor_penetration}<br></br></> : null }
                    {currentPlayer.armor.head === "none" ? null : <>{currentPlayer.armor.head.set_name} set bonus:<br></br>
                    4 pieces: {currentPlayer.armor.head.set_bonus}<br></br></>}
                </ReactTooltip><br></br>
                <div className="gear-div" id="gear_chest_div"></div>
                <div className="gear-div" id="gear_hands_div"></div>
                <div className="gear-div" id="gear_legs_div"></div>
                <div className="gear-div" id="gear_feet_div"></div>
                <div className="gear-div" id="gear_ring1_div"></div>
                <div className="gear-div" id="gear_ring2_div"></div>
                <div className="gear-div" id="gear_ear1_div"></div>
                <div className="gear-div" id="gear_ear2_div"></div>
                <div className="gear-div" id="gear_neck_div"></div>
                
            </div>
            <h3>selection</h3>
            {gearSelectionDisplay}
            <button onClick={sendToHome}>Button</button>
        
        </>
    )
}

export default GearSelect
