import React from 'react'
import './SummitNumber.css'
import microphone from '../../Assets/mircrophone.svg'
import gavel from '../../Assets/gavel.svg'
import people from '../../Assets/people.svg'
export default function SummitNumber () {
  return (
    <div className='summit-number'>
        <h4 className='eko' style={{color: '#fff', 
                                    textAlign: 'center', 
                                    fontSize: '1.8rem',
                                    fontWeight: 'normal'}}
                                    >
            Summit in Numbers
        </h4>

        <div className="box">
            <div className="new-card">
                <img src={microphone} alt="" />
                <div>
                    <p><span>45+</span>Speakers</p>
                </div>
            </div>

            <div className="new-card">
                <img src={gavel} alt="" />
                <div>
                    <p><span>82%+</span>of attendees are decision makers</p>
                </div>
            </div>

            <div className="new-card">
                <img src={people} alt="" />
                <div>
                    <p><span>120+</span>industry attendees</p>
                </div>
            </div>
        </div>


        <div className='book-now' style={{display: 'flex', justifyContent: 'center', margin: '30px auto 0 auto'}}>
            <a href='/' style={{backgroundColor: '#fff'}}>
                Register
            </a>

            <a href='/' style={{backgroundColor: '#fff'}}>
                Sponsor
            </a>
          </div>
    </div>
  )
}

// export default SummitNumber