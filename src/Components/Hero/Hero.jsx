
import React from "react";
import "./Hero.css";



const SlidingContentBackground = () => {
  return (
    <div className='sliding-content-background'>
      <div className='sliding-background'>
        <div

          className='visible'
          style={{
            backgroundPosition: "100% 100%",
            backgroundSize: "cover",
            height: "100vh",
            width: "100%",
          }}
        ></div>
      </div>
      <div className='sliding-content'>
        <div className='summit-info'>
          <div className='top'>
            <div className="lcs">
             <h2>LCS</h2><h3>2023</h3>
            </div>
            <p>LAGOS CLIMATE SUMMIT</p>

            
          </div>
         


          <div className='book'>
          <a href="/" rel="noreferrer" className="hero-sponsor"
                style={{
                  color: "#FFF",
                  fontSize: "18px",
                }}
              >
                Register
            </a>

            <a href="/" rel="noreferrer" className="hero-sponsor"
                style={{
                  color: "#FFF",
                  fontSize: "18px",
                }}
              >
                Sponsor
            
              </a>
          </div>



          <div className="next">
          <p >21, NOV 2023 |  BALLROOM, ORIENTAL HOTEL. LAGOS - NIGERIA</p>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default SlidingContentBackground;
