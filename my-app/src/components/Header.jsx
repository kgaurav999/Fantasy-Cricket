import React from 'react'
import './styles.css'
const Header =({count,leftCredit,melbourneStarPlayer,perthScoutchersPlayer})=>{
    return (
      <div className="container-header">
        <h3>Pick Players</h3>
        <ul className="container-header_elements">
          <li className="header-padding">
            <p>{count}/11</p>
            <p>players</p>
          </li>
          <li className="header-padding">
            <p>{melbourneStarPlayer}</p>
            <p>MS</p>
          </li>
          <li className="header-padding">
            <p>{perthScoutchersPlayer}</p>
            <p>PS</p>
          </li>
          <li className="header-padding">
            <p>cr left</p>
            <p>{leftCredit}</p>
          </li>
        </ul>
      </div>
    );
    
}
export default Header;