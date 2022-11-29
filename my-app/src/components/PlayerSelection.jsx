import React from "react";
import { useState, useRef } from "react";
import "./styles.css";
import Header from "./Header";
import DisplaySelectedPlayer from "./DisplaySelectedPlayer";
let count1 = 0;
let count2 = 0;
const PlayerSelection = ({ playerDetails }) => {
  const [selectedPlayers, setSelectedPlayers] = useState("");
  const [leftCredit, setLeftCredit] = useState(100);
  const [melbourneStarPlayer, setMelbourneStarPlayer] = useState(0);
  const [perthScoutchersPlayer, setPerthScoutchersPlayer] = useState(0);
  const [clickBtn, setClickBtn] = useState(true);
  const [checkProperRoles, setCheckProperRoles] = useState(false);
  const [checkRole, setCheckRole] = useState({
    Batsman: 0,
    Bowler: 0,
    ["All-Rounder"]: 0,
    ["Wicket-Keeper"]: 0,
  });
  const count = useRef(0);

  //Function for hadel row Click 
  function handelRowClick(e) {
    e.preventDefault();
    const val = checkCredit(e.target.id);
    //console.log(selectedPlayers);
    if (selectedPlayers.includes(val)) {
      alert("cricketer all ready selected");
    } else if (selectedPlayers.length >= 11) {
      alert("Number of Players can be only 11");
    } else {
      let filteredValue = countPlayer(val);
      setSelectedPlayers(() => {
        return [...selectedPlayers, filteredValue];
      });
    }
  }

//Function for checking credit 
  function checkCredit(value) {
    let pd = playerDetails.filter((x) => {
      return x.player_id === value;
    });
    console.log(pd[0].player_id);
    // setTotalPlayerCount(playerCount(pd));
    if (leftCredit - pd[0].event_player_credit >= 0) {
      if (!selectedPlayers.includes(pd[0].player_id)){
        setLeftCredit(leftCredit - pd[0].event_player_credit);
      }
        
      return pd[0].player_id;
    } else {
      alert("Not enough money in credit");
    }
  }

  //Function to count player 
  function countPlayer(value) {
    let pd = playerDetails.filter((x) => {
      return x.player_id === value;
    });
    if (pd[0].team_name === "Melbourne Stars") {
      if (melbourneStarPlayer < 7) {
        setMelbourneStarPlayer(++count1);
        // console.log(count1)
        count.current = count.current + 1;
        return pd[0].player_id;
      } else {
        alert("Player count can not be more then 7 from one team");
      }
    } else {
      if (perthScoutchersPlayer < 7) {
        setPerthScoutchersPlayer(++count2);
        count.current = count.current + 1;
        return pd[0].player_id;
      } else {
        alert("Player count can not be more then 7 from one team");
      }
    }
    return "";
  }

  //Function to handel click
  function handelClickBtn() {
    setClickBtn(false);
    handelPlayerProperNumber();
  }
//Validation for point 4 in given question
  function handelPlayerProperNumber() {
    let pd = playerDetails.filter((x) => {
      return selectedPlayers.includes(x.player_id);
    });
    console.log(pd)
    for (let i = 0; i < selectedPlayers.length; i++) {
      if (pd[i].role === "Batsman") {
        setCheckRole(checkRole.Batsman++);
      }
      if (pd[i].role === "Bowler") {
        setCheckRole(checkRole.Bowler++);
      }
      if (pd[i].role === "All-Rounder") {
        setCheckRole(checkRole["All-Rounder"]++);
      }
      if (pd[i].role === "Wicket-Keeper") {
        setCheckRole(checkRole["Wicket-Keeper"]++);
      }
    }
    console.log(checkRole.Batsman)
     console.log(checkRole.Bowler);
      console.log(checkRole["All-Rounder"]);
       console.log(checkRole["Wicket-Keeper"]);
    if (
      checkRole.Batsman > 3 ||
      checkRole.Batsman < 7 &&
      checkRole.Bowler > 3 ||
      checkRole.Bowler < 7 &&
      checkRole["All-Rounder"] < 4 &&
      checkRole["Wicket-Keeper"] > 1 ||
      checkRole["Wicket-Keeper"] < 5
    ) {
      setCheckProperRoles(true);
    } else {
      alert("Proper Selection of player not done");
    }
  }
  console.log(typeof checkRole)

  return clickBtn ? (
    <div>
      <Header
        count={count.current}
        leftCredit={leftCredit}
        melbourneStarPlayer={melbourneStarPlayer}
        perthScoutchersPlayer={perthScoutchersPlayer}
      />
      <div className="container">
        <div className="container-box">
          <h4>Pick 3-7 Batsman</h4>
          {/* iterate through the customers array and render a unique Customer component for each customer object in the array */}
          {playerDetails
            .filter((y) => y.role === "Batsman")
            .map((x) => (
              <div
                key={x.id}
                id={x.player_id}
                onClick={handelRowClick}
                className="row-style border-left"
              >
                <p id={x && x.player_id}>
                  {x.name}
                </p>

                <p id={x && x.player_id}>
                  {x.event_player_credit}
                </p>
              </div>
            ))}
        </div>

        <div className="container-box">
          <h4>Pick 3-7 Bowlers</h4>

          <div className="border-box">
            {/* iterate through the customers array and render a unique Customer component for each customer object in the array */}
            {playerDetails
              .filter((y) => y.role === "Bowler")
              .map((x) => (
                <div
                  key={x.id}
                  id={x && x.player_id}
                  onClick={handelRowClick}
                  className="row-style border-left"
                >
                  <p id={x && x.player_id}>
                    {x.name}
                  </p>

                  <p id={x && x.player_id}>
                    {x.event_player_credit}
                  </p>
                </div>
              ))}
          </div>
        </div>

        <div className="container-box">
          <h4>Pick 0-4 All Rounders</h4>
          {/* iterate through the customers array and render a unique Customer component for each customer object in the array */}
          {playerDetails
            .filter((y) => y.role === "All-Rounder")
            .map((x) => (
              <div
                key={x.id}
                id={x && x.player_id}
                onClick={handelRowClick}
                className="row-style border-left"
              >
                <p id={x && x.player_id}>
                  {x.name}
                </p>

                <p id={x && x.player_id}>
                  {x.event_player_credit}
                </p>
              </div>
            ))}
        </div>

        <div className="container-box">
          <h4>Pick 1-5 Wicket Keepers</h4>

          {/* iterate through the customers array and render a unique Customer component for each customer object in the array */}
          {playerDetails
            .filter((y) => y.role === "Wicket-Keeper")
            .map((x) => (
              <div
                key={x.id}
                id={x && x.player_id}
                onClick={handelRowClick}
                className="row-style border-left"
              >
                <p id={x && x.player_id}>
                  {x.name}
                </p>

                <p id={x && x.player_id}>
                  {x.event_player_credit}
                </p>
              </div>
            ))}
        </div>
        <button className="btn" onClick={handelClickBtn}>
          Procede
        </button>
      </div>
    </div>
  ) : checkProperRoles ? (
    <div>
      <div>
        <Header
          count={count.current}
          leftCredit={leftCredit}
          melbourneStarPlayer={melbourneStarPlayer}
          perthScoutchersPlayer={perthScoutchersPlayer}
        />
      </div>
      <DisplaySelectedPlayer
        playerDetails={playerDetails}
        selectedPlayers={selectedPlayers}
      />
    </div>
  ) : (
    <div>
      <h1>Opps Player Selection is not done Properly</h1>
    </div>
  );
};
export default PlayerSelection;
