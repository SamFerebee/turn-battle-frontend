import React, { useState, useEffect } from "react"
import ReactTooltip from "react-tooltip";

const GearSelect = ({currentUser, setCurrentUser, currentPlayer}) => {
    const [gearSelectionDisplay, setGearSelectionDisplay] = useState();
    console.log(currentPlayer)
    const handleGearSelect = (e) => {
        console.log(e.target.id)
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
                    {gear.name}
                    <img src={gear.image}/>
                </span>
                <ReactTooltip id={gear.name} place="right" effect="solid">
                    {gear.attk_value > 0 ? <>AP: {gear.attk_value}<br></br></>: null}
                    {gear.def_value > 0 ? <>DP: {gear.def_value}<br></br></>: null}
                    {gear.hp_value > 0 ? <>HP: {gear.hp_value}<br></br></>: null}
                    {gear.armor_penetration > 0 ? <>Pen: {gear.armor_penetration}<br></br></> : null }
                    {gear.head === "none" ? null : <>{gear.set_name} set bonus:<br></br>
                    4 pieces: {gear.set_bonus}<br></br></>}
                </ReactTooltip><br></br>
            </>
        )
        setGearSelectionDisplay(temp);
    }

    return (
        <>
            <h1> gear select</h1>
            <div id="fullGearDiv">
                <div className="gear-div" id="gear_head_div" onClick={handleGearSelect}>
                    <img src={currentPlayer.armor.head.image}/>
                </div>
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
        
        </>
    )
}

export default GearSelect