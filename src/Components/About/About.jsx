import React from 'react'
import './About.css'
import Concept from '../Concept/Concept'

function AboutUs() {
  return (
    <div className='about-container'>
       
       <div className="column">
            <div className="column-one">
              <p>
              In a world marked by formidable global challenges, the convergence of technology,
               innovation, and collaborative spirit shines as a beacon of hope. In confronting 
               the urgent imperative of climate change, it becomes evident that fresh paradigms 
               and solutions are the keystones of our efforts.
              </p>
            </div>

            <div className="column-two">
              <p>
              We are delighted to present an exceptional opportunity that 
              seamlessly interweaves these elements into a dynamic and 
              impactful event: The Lagos Climate Roundtable 2023, themed 
              "Innovating for a Resilient Future: Youth Empowerment and 
              SME Resilience in Climate Action."
              </p>
            </div>
       </div>
         

        

        <div className="btn-container">
          <Concept />
        </div>
    </div>
  )
}
export default AboutUs
