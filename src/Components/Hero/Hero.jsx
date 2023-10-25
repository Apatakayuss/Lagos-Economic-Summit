// SlidingContentBackground.js
import React from "react";
import "./Hero.css";
import { Link } from 'react-router-dom'
// import image1 from "../../Assets/Background.png";
// import image2 from "../../Assets/bg3.png";
// import image3 from "../../Assets/background3.png";


const SlidingContentBackground = () => {
  return (
    <div className='sliding-content-background'>
      <div className='sliding-background'>
        {/* {images.map((image, index) => (
          <div
            key={index}
            className={`background-image ${index === 0 ? "visible" : "hidden"}`}
            style={{
              backgroundImage: `url(${image})`,
              animationDuration: "24s",
            }}
          ></div>
        ))} */}
        <div
          // className={`background-image ${index === 0 ? "visible" : "hidden"}`}
          className='visible'
          style={{
            // backgroundImage: `url(${image2})`,
            backgroundPosition: "100% 100%",
            backgroundSize: "cover",
            // animationDuration: "24s",
            height: "100vh",
            width: "100%",
          }}
        ></div>
      </div>
      <div className='sliding-content'>
        <div className='summit-info'>
          <div className='top'>
            <h2>
              LCS <span>2023</span>
            </h2>
            <p>LAGOS CLIMATE SUMMIT</p>

            
          </div>
          <div className="next">
          <p>21, Nov 2023 |  Ballroom, Oriental Hotel</p>
          </div>


          <div className="new">
            <h5>Innovating for a Resilient Future: Youth Empowerment and SME Resilience in Climate</h5>
          </div>

          <div className='book-now'>
            <button>
              <Link 
                to='./BookNow'
                style={{
                  color: "#FFF",
                  fontSize: "18px",
                }}
              >
                Register
              </Link>
            </button>
          </div>

          {/* <div className='bottom'>
            <div className='date'>
              <h4
                style={{ fontSize: "16px", color: "#FFF", fontWeight: "600" }}
              >
                Date:
              </h4>
              <p
                style={{ color: "#FFF", fontWeight: "600", textAlign: "left" }}
              >
                21st November 2023
              </p>
            </div>

            <div className='venue'>
              <h4
                style={{ fontSize: "16px", color: "#FFF", fontWeight: "600" }}
              >
                Venue:
              </h4>
              <p
                style={{ color: "#FFF", fontWeight: "600", textAlign: "left" }}
              >
                Ballroom, Oriental Hotel.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SlidingContentBackground;
