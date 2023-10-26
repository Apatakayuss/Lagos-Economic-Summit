import React from 'react'
import Single from '../Components/SingleSpeaker/SingleSpeaker'
import Killian from '../Assets/Killian.svg'
import Oguogo from '../Assets/great.jpeg'
import Chisolum from '../Assets/prince.jpeg'
import John from '../Assets/johnKamara.jpeg'
import "../Styles/speakerCss.css";

const Speaker = () => {
  return (
    <>
    <div className="wrapper">

      <div className="topic">
        <p>SPEAKERS</p>
      </div>

      <div className="speaker-wrapper">

    <div className="speaker-container"  >
 

<Single
        src={Oguogo}
        alt="Great Oguguo"
        caption="Great Oguguo"
        secCaption="Board member, EcoStride Energy Limited"
        linkedinUrl="https://www.linkedin.com//"
     
      />


<Single
        src={Chisolum}
        alt="Prince Chisolum"
        caption="Prince Chisolum"
        secCaption="Economist at World Intellectual Property
        Organisation"
        linkedinUrl="https://www.linkedin.com//"
  
      />
      


<Single
        src={John}
        alt="John Kamara"
        caption="John Kamara"
        secCaption="CEO/Co-founder Adanian Labs"
        linkedinUrl="https://www.linkedin.com//"
  
      />

<Single 
        src={Killian}
        alt="Killian Mayua"
        caption="Killian Mayua"
        secCaption="Country Head, Adanian Labs NG"
        linkedinUrl="https://www.linkedin.com//"
      
      />

<Single className='chiso'
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
    </div>
     
    
    </>
  )
}

export default Speaker