import React from 'react'
import Single from '../Components/SingleSpeaker/SingleSpeaker'
import Killian from '../Assets/Killian.svg'
import Oguogo from '../Assets/round.png'
import Chisolum from '../Assets/roundprince.png'
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

    <div className="speaker-container" >
    
       
          <Single 
          alt='John Kamara'
          src={John}
          caption='John Kamara'
          secCaption='CEO/Co-founder Adanian Labs'
          />
          <Single 
          alt='John Kamara'
          src={Oguogo}
          caption='Great Oguguo'
          secCaption='Board member EcoStride Energy Limited'
          />
            <Single 
          alt='Prince Chisolum'
          src={Chisolum}
          caption='Prince Chisolum'
          secCaption='Economist, World Intellectual Property
          Organisation Switzerland.'
          />
            <Single 
          alt='Killian'
          src={Killian}
          caption='Killian Mayua'
          secCaption='Country Head Adanian Labs NG'
          />
         {/* <Single 
          alt='John Kamara'
          src={John}
          caption='John Kamara'
          secCaption='CEO/Co-founder Adanian Labs'
          />
          <Single 
          alt='John Kamara'
          src={John}
          caption='John Kamara'
          secCaption='CEO/Co-founder Adanian Labs'
          />
            <Single 
          alt='John Kamara'
          src={John}
          caption='John Kamara'
          secCaption='CEO/Co-founder Adanian Labs'
          />
            <Single 
          alt='John Kamara'
          src={John}
          caption='John Kamara'
          secCaption='CEO/Co-founder Adanian Labs'
          /> */}






     
 
     
      
    </div>
    </div>
    </div>
     
    
    </>
  )
}

export default Speaker