
import React from "react";
import '../Styles/Presenter.css'
import US from "../Assets/USMission.png";
import Agra from "../Assets/AGRA.png";
import Aice from "../Assets/finalaice.svg";
import Eco from "../Assets/ecostride.jpeg";
import Afya from "../Assets/AfyaRekod.jpeg";
import raai from "../Assets/RAAI.jpeg";

export default function Presenter() {
  return (
    <div>

        <div className="head">
          <h3>Partners/Sponsors</h3>
        </div>

      <div className="sponsors-container">
        
        <div className="sponsorss">
          <img src={Agra} alt="" />
        </div>

        <div className="sponsorss">
          <img src={Aice} alt="" style={{padding: '30px'}}/>
        </div>

        <div className="sponsorss us">
          <img src={US} alt="" style={{padding: '30px'}}/>
        </div>

        <div className="sponsorss">
          <img src={Eco} alt="" style={{padding: '20px'}}/>
        </div>

        <div className="sponsorss">
          <img src={Afya} alt="" style={{padding: '20px'}}/>
        </div>

        <div className="sponsorss">
          <img src={raai} alt="" style={{padding: '20px'}}/>
        </div>
      </div>

    </div>
  );
}

// const Sponsor = [
//   {
//     image: Agra,
//   },
//   {
//     image: Aice,
//   },
//   {
//     image: US,
//   },
//   {
//     image: Eco,
//   },
//   {
//     image: Afya,
//   },
// ];
