import React, { useState, useEffect } from "react"
import { Switch, Route, useHistory } from "react-router-dom"
import BattlePage from "./battle/BattlePage"
import LandingPage from "./LandingPage"
import CharCreation from "./playercreation/CharCreation"
import AttributeAddPage from "./playercreation/AttributeAddPage"
import CreateAccount from "./CreateAccount"
import Login from "./Login"
import Homepage from "./Homepage"
import PlayerView from "./playerview/PlayerView"
import GearStore from "./playercreation/GearStore"
import GearSelect from "./playercreation/GearSelect"

function App() {
  const history = useHistory();
  const [currentPlayer, setCurrentPlayer] = useState();
  const [currentPlayerGearStore, setCurrentPlayerGearStore] = useState();
  const [currentUser, setCurrentUser] = useState();
  const autoLog = () => {
    const token = localStorage.getItem("token");
    if (token){
      fetch("http://localhost:3000/autolog", {
        headers:{
          Authorization: `Bearer ${token}`
        },
      })
        .then(r => r.json())
        .then(user => {
          setCurrentUser(user);
          console.log(user);
          console.log("autologged")
          sendToHome();
        })
    }
  }

  useEffect(()=> {
    //autoLog();
  }, [])


  //SEND TO ROUTES
  const sendToCharCreate = () => history.push("/char_create");
  const sendToBattle = () => history.push("/battle");
  const sendToAttrAdd = () => history.push("/creation_add_attr");
  const sendToCreateAcct = () => history.push("/create_account");
  const sendToLogin = () => history.push("/login");
  const sendToHome = () => history.push("/home");
  const sendToGearStore = () => history.push("/gear_store");
  const sendToGearSelect = () => history.push("/gear_select");
  const sendToLanding = () => history.push("/");

  return (
    <div className="App">
      <Switch>
        <Route exact path = "/">
          <LandingPage sendToSelect={sendToCharCreate} sendToLogin={sendToLogin} sendToCreateAcct={sendToCreateAcct}/>
        </Route>
        <Route exact path = "/create_account">
          <CreateAccount setCurrentUser={setCurrentUser} sendToHome={sendToHome}/>
        </Route>
        <Route exact path = "/login">
          <Login setCurrentUser={setCurrentUser} sendToHome={sendToHome} />
        </Route>
        <Route exact path = "/home">
          <Homepage autoLog={autoLog} sendToBattle={sendToBattle} currentUser={currentUser} sendToCharCreate={sendToCharCreate} sendToLanding={sendToLanding}/>
        </Route>
        <Route exact path = "/char_create">
          <CharCreation sendToBattle={sendToBattle} sendToAttrAdd={sendToAttrAdd} setCurrentPlayer={setCurrentPlayer} currentUser={currentUser} />
        </Route>
        <Route exact path = "/creation_add_attr">
          <AttributeAddPage sendToHome={sendToHome} player={currentPlayer} setCurrentUser={setCurrentUser} currentUser={currentUser} />
        </Route>
        <Route exact path = "/player_view/:id">
          <PlayerView user={currentUser} setCurrentPlayerGearStore={setCurrentPlayerGearStore} sendToGearStore={sendToGearStore} sendToGearSelect={sendToGearSelect}/>
        </Route>
        <Route exact path = "/gear_store">
          <GearStore setCurrentUser={setCurrentUser} currentUser={currentUser} currentPlayer={currentPlayerGearStore} />
        </Route>
        <Route exactpath = "/gear_select">
          <GearSelect sendToHome={sendToHome} setCurrentUser={setCurrentUser} currentUser={currentUser} currentPlayer={currentPlayerGearStore}/>
        </Route>
        <Route exact path = "/battle">
          <BattlePage player={currentPlayer} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

//auto log is not always running for some reason
