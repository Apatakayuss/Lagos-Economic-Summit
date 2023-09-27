/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './Footer.css'
import Powered from '../Assets/Frame 3901.png'
import {AiFillMail,
        AiOutlineTwitter,
        AiOutlineInstagram,
        AiFillLinkedin} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'

const Footer = () => {
return (
    <div className='footer'>
        <div className='detail'>
            <div className="detail-left deets" style={{display: 'flex', flexDirection: 'column'}}>
                <h4 style={{ color: '#0F3879' }}>Office Address</h4>
                <p className='p-mid'>Sunny Motors, Plot 3, Otunba Adedoyin Ogunge close,</p>
                <p>Lekki phase 1, Lagos. Nigeria.</p>


                <div className='info-img' style={{justifyContent: 'flex-start'}}>
                <img src={Powered} alt="Adanian" />
            </div>
            </div>
            <div className="detail-right deets" style={{display: 'flex', flexDirection: 'column'}}>
                <h4 style={{ color: '#0F3879' }}>Event Address</h4>
                <p className='p-mid'>The Ball-Room, Lagos Oriental Hotel Lekki - Epe Expy,</p>
                <p>Victoria Island 106104, Lagos</p>

                <div className='info-tel' style={{justifyContent: 'flex-start'}}>
                <p style={{ textAlign: 'left', color: '#0F3879' }}>+234 706 728 1296</p>
            </div>
            </div>
        </div>

        {/* <div className='info'>
            <div className='info-img' style={{justifyContent: 'flex-start'}}>
                <img src={Powered} alt="Adanian" />
            </div>

            <div className='info-tel' style={{justifyContent: 'flex-start'}}>
                <p style={{ textAlign: 'left', color: '#0F3879' }}>+234 706 728 1296</p>
            </div>
        </div> */}

        <hr />
        <div className="foot">
            <div className='foot-note'>
                <p style={{fontSize: '12px'}}>© 2023 The Lagos ESG Summit. All rights reserved.</p>
            </div>
            <div className='foot-icon'>

            <a href="/" class="iconlink" target="_blank" rel='noreferrer'>
            <AiFillMail />
            </a>
            <a href="/" class="iconlink" target="_blank" rel='noreferrer'>
            <FaFacebookF />
            </a>
            <a href="https://twitter.com/OfficialApata" class="iconlink" target="_blank" rel='noreferrer'>
            <AiOutlineTwitter />
            </a>
            <a href="/" class="iconlink" target="_blank" rel='noreferrer'>
            <AiOutlineInstagram />
            </a>
            <a href="/" class="iconlink" target="_blank">
            <AiFillLinkedin />
            </a>
            </div>
        </div>
    </div>
  )
}

export default Footer