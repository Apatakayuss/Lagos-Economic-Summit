import { Box, Image, Text, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import US from "../Assets/USMission.png";
import Agra from "../Assets/AGRA.png";
import Aice from "../Assets/AICE.png";
import Eco from "../Assets/ECO.jpeg";
import Afya from "../Assets/AfyaRekod.jpeg";

export default function Presenter() {
  return (
    <div>
      <Box
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
      </Box>
    </div>
  );
}

const Sponsor = [
  {
    image: Agra,
  },
  {
    image: Aice,
  },
  {
    image: US,
  },
  {
    image: Eco,
  },
  {
    image: Afya,
  },
];
