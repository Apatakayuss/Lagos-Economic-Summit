import React from 'react'
import Single from '../Components/SingleSpeaker/SingleSpeaker'
import Killian from '../Assets/Killian.svg'
import Oguogo from '../Assets/oguogo.jpeg'
import Chisolum from '../Assets/chilosum.jpeg'
import "../Styles/speakerCss.css";

const Speaker = () => {
  return (
    <>
    <div className="wrapper">

      <div className="topic">
        <p>Speakers</p>
      </div>

    <div className="speaker-container"  >
    <Single 
        src={Killian}
        alt="Image Alt Text"
        caption="Main Caption"
        secCaption="Secondary Caption"
        linkedinUrl="https://www.linkedin.com//"
      />

<Single
        src={Oguogo}
        alt="Image Alt Text"
        caption="Main Caption"
        secCaption="Secondary Caption"
        linkedinUrl="https://www.linkedin.com//"
      />


<Single
        src={Chisolum}
        alt="Image Alt Text"
        caption="Main Caption"
        secCaption="Secondary Caption"
        linkedinUrl="https://www.linkedin.com//"
      />


<Single
        src={Killian}
        alt="Image Alt Text"
        caption="Main Caption"
        secCaption="Secondary Caption"
        linkedinUrl="https://www.linkedin.com//"
      />



<Single
        src={Chisolum}
        alt="Image Alt Text"
        caption="Main Caption"
        secCaption="Secondary Caption"
        linkedinUrl="https://www.linkedin.com//"
      />




<Single
        src={Oguogo}
        alt="Image Alt Text"
        caption="Main Caption"
        secCaption="Secondary Caption"
        linkedinUrl="https://www.linkedin.com//"
      />



      <Single
        src={Chisolum}
        alt="Image Alt Text"
        caption="Main Caption"
        secCaption="Secondary Caption"
        linkedinUrl="https://www.linkedin.com//"
      />
      <Single
        src={Killian}
        alt="Image Alt Text"
        caption="Main Caption"
        secCaption="Secondary Caption"
        linkedinUrl="https://www.linkedin.com//"
      /> 
    </div>
    </div>
     
    
    </>
  )
}

export default Speaker