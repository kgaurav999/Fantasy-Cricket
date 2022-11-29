import React from "react";

const DisplaySelectedPlayer = ({ playerDetails, selectedPlayers }) => {
  return (
    <div>
      {playerDetails.filter((y)=>{
        return selectedPlayers.includes(y.player_id)
      })
      .map((x) => (
        <div
          key={x.id}
          id={x.player_id}
        
          className="row-style border-left"
        >
          <p>{x.name}</p>

          <p>{x.event_player_credit}</p>
        </div>
      ))}
    </div>
  );
};
export default DisplaySelectedPlayer;
