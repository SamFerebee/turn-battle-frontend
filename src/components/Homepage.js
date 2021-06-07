import React, { useState, useEffect } from "react"
import {Link, useParams} from "react-router-dom";

const Homepage = ({sendToBattle, currentUser, sendToCharCreate}) => {
    let playerDisplay;
    console.log(currentUser);
    if(currentUser.players.length < 1){
        playerDisplay = <li>you have no characters</li>;
    }else{
        const temp = currentUser.players.map((p) => <li key={p.id}><Link to={`/player_view/${p.id}`}>{p.name}</Link> <br></br></li>);
        playerDisplay = temp;
    }

    return(
        <>
        <h1>Welcome {currentUser.username} </h1>
        <ol>
            {playerDisplay}
        </ol>
        <button onClick={sendToCharCreate}>Create Character</button><br></br>
        <button onClick={sendToBattle}>Battle</button>
        </>
    )
}

export default Homepage