import React from "react";
import { useEffect, useState } from "react";
import PlayerSelection from "./PlayerSelection";


import WicketKeepers from "./WicketKeepers";
const PickPlayers = () => {
  const [playerDetails, setPlayerDetails] = useState([]);


  useEffect(() => {
    const playerDetails = async () => {
      try {
        const response = await fetch(
          "https://leaguex.s3.ap-south-1.amazonaws.com/task/fantasy-sports/Get_All_Players_of_match.json"
        );
        const data = await response.json();
        // console.log(data);
        setPlayerDetails(data);
      } catch (error) {}
    };
    playerDetails();
  }, []);
  console.log(playerDetails)
  return (
    <>
   
     <PlayerSelection playerDetails={playerDetails}/>
    </>
  );
};
export default PickPlayers;
