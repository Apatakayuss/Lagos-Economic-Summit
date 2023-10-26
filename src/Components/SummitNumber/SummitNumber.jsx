import React from 'react'
import './SummitNumber.css'
import { Link } from 'react-router-dom'
import microphone from '../../Assets/mircrophone.svg'
import gavel from '../../Assets/gavel.svg'
import people from '../../Assets/people.svg'
export default function SummitNumber () {
  return (
    <div className='summit-number'>
        <h4 className='eko' style={{color: '#fff', 
                                    textAlign: 'center', 
                                    fontSize: '2rem'}}>
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
            <button style={{backgroundColor: '#fff'}}>
              <Link
                to='./BookNow'
                style={{
                  color: "#0f3879",
                  fontSize: "18px",
                }}
              >
                Register
              </Link>
            </button>
          </div>
    </div>
  )
}

// export default SummitNumber