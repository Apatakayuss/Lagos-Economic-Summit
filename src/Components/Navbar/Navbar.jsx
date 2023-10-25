import React from "react";
import "../Navbar/Navbar.css";
import logo from "../../Assets/LCShigh.png";
import { Link } from "react-scroll";
// import AboutUs from "../../Pages/AboutUs";
import Hero from "../Hero/Hero";
import { Text } from "@chakra-ui/react";

export default function Navbar() {
  const handleSetActive = (to) => {
    console.log("destination", to);
  };
  return (
    <div className='navbar sticky-navbar'>
      <div className='navbar'>
        <div className='navbar-nav'>
          <div 
          >
            <Link to='/'>
              <img src={logo} alt='' />
            </Link>
          </div>


          <div className='navbar-pages' 
          style={{display: 'flex', margin: 'auto'}}
          >
            <div className='navbar-svg'>
              <Link to='AboutUs' smooth={true} duration={500}>
                <Text
                  fontSize='15px'
                  fontWeight='600'
                  onSetActive={handleSetActive}
                >
                  ABOUT
                </Text>{" "}
              </Link>
            </div>

            <div className='navbar-svg'>
              <Link to='Speakers' smooth={true} duration={500}>
                <Text
                  fontSize='15px'
                  fontWeight='600'
                  onSetActive={handleSetActive}
                >
                  SPEAKERS
                </Text>
              </Link>
            </div>

            <div className='navbar-svg'>
              <Link to='Agenda' smooth={true} duration={500}>
                <Text fontSize='15px' fontWeight='600'>
                  AGENDA
                </Text>
              </Link>
            </div>


            <div className='navbar-svg'>
              <Link to='Sponsors' smooth={true} duration={500}>
                <Text
                  fontSize='15px'
                  fontWeight='600'
                  onSetActive={handleSetActive}
                >
                  SPONSORS
                </Text>
              </Link>
            </div>

            
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
        </div>
      </div>
      <Hero />
    </div>
  );
}
