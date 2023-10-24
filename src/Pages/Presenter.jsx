
import React from "react";
import '../Styles/Presenter.css'
import US from "../Assets/USMission.png";
import Agra from "../Assets/AGRA.png";
import Aice from "../Assets/ace.png";
import Eco from "../Assets/ECO.jpeg";
import Afya from "../Assets/AfyaRekod.jpeg";

export default function Presenter() {
  return (
    <div>

        <div className="head">
          <h3>Sponsosred by</h3>
        </div>

      <div className="sponsors-container">
        
        <div className="sponsor">
          <img src={Agra} alt="" />
        </div>

        <div className="sponsor">
          <img src={Aice} alt="" />
        </div>

        <div className="sponsor us">
          <img src={US} alt="" style={{padding: '30px'}}/>
        </div>

        <div className="sponsor">
          <img src={Eco} alt="" />
        </div>

        <div className="sponsor">
          <img src={Afya} alt="" />
        </div>
      </div>














      {/* <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        p='20px 25px'
      >
        <Box margin='0 auto'>
          <Text color='#0F3879' fontSize='50px' fontWeight='600'>
            Sponsored by
          </Text>
        </Box>

        <Box
         px='20px'
          py='40px' 
          margin='0 auto'
          width='80%'
          // backgroundColor='yellow'
          >
          <SimpleGrid
            minChildWidth={["90px", "120px"]}
            spacing='20px'
            column={3}
          >
            {Sponsor.map((item, index) => (
              <Box display='flex' justifyContent='center' key={index}>
                <Image src={item.image} />
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box> */}
    </div>
  );
}

// const Sponsor = [
//   {
//     image: Agra,
//   },
//   {
//     image: Aice,
//   },
//   {
//     image: US,
//   },
//   {
//     image: Eco,
//   },
//   {
//     image: Afya,
//   },
// ];
