import React from "react";
import {
  Box,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import US from "../Assets/USMission.png";
import Agra from "../Assets/AGRA.png";
import Aice from "../Assets/AICE.png";
import Eco from "../Assets/ECO.jpeg";
import Afya from "../Assets/AfyaRekod.jpeg";
import  { GiCheckMark } from 'react-icons/gi'


export default function Sponsors() {
  const email = "lagos-summit@forum.com";
  return (
    <Box>
      <Box
      width= '100%'
        // pb='40px'
        // bgImage={`url(${imageUrl})`}
        // backgroundSize='cover'
        // backgroundPosition='100%'
        // backgroundPosition='center'
      >
        <Box width='90%' maxWidth='1280px' margin='0 auto'>
          <Box
            display='flex'
            flexDirection='column'
            width='100%'
            py='20px'
            px='25px'
            justifyContent='center'
          >
            <Box
              width='100%'
              display='flex'
              justifyContent='center'
              flexDirection='column'
              p='10px'
              mb='20px'
              alignItems='center'
              margin='0 auto'
            >
              <Text
                alignItems='center'
                color='#0F3879'
                fontWeight='normal'
                fontSize='1.6rem'
                textAlign='center'
              >
                SPONSORSHIP OPPORTUNITIES
              </Text>
              {/* <ColoredLine color='#0F3879' /> */}
            </Box>
            <Box
              display='flex'
              flexDirection='row'
              // justifyContent='space-evenly'
              py='10px'
            >
              <Text fontSize='18px'>
                To discuss sponsorship and visibility opportunities at the
                International Lagos Summit, please contact Killian Mayua on{" "}
              </Text>
              <Text ml='5px' color='#0A1172'>
                <a
                  style={{ fontSize: "18px", Color: "#0A1172" }}
                  href={`mailto:${email}`}
                >
                  {" "}
                  {email}
                </a>
              </Text>
            </Box>

            <SimpleGrid
              // minChildWidth={["120px", "150px"]}
              mt='40px'
              spacing='30px'
            >
              {Sponsor.map((item, index) => (
                <Box
                  key={index}
                  // minHeight='150px'
                  // maxWidth='150px'
                  // width='100%'
                  display='flex'
                  color='#000'
                  justifyContent='flex-start'
                  // style={{
                  //   // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${item.imageURL})`,
                  //   backgroundSize: "cover",
                  //   backgroundPosition: "center",

                  //   display: "flex",
                  //   alignItems: "center",
                  //   justifyContent: "center",
                  //   flexDirection: "column",
                  // }}
                >
                  {/* <Image
                    src={item.imageURL}
                    width={["90%", "95%", "99%"]}
                    // height='100%'
                    alt=''
                  /> */}
                  <Box width='fit-content'
                  color= '#0F3879'
                  >
                    <GiCheckMark size={20}/>
                    {/* <Image src={Url} /> */}
                  </Box>
                  <Box ml='15px' display='flex' alignItems='center'>
                    <Text fontSize='18px'>{item.text}</Text>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const Sponsor = [
  {
    name: "Early Bird Ticket",
    text: "Exclusive speaking positions | Your organisation can contribute to the discussion.",
    price: "500",

    imageURL: Agra,
  },
  {
    name: "Early Bird Ticket",
    text: "Media Visibility | Be present on a pan-European and global media platform.",
    price: "500",
    imageURL: Aice,
  },
  {
    name: "Early Bird Ticket",
    text: "European and global outreach | Engage in interactive, public discussions with businesses, policymakers and media.",
    price: "500",
    imageURL: US,
  },
  {
    name: "Early Bird Ticket",
    text: "Networking opportunities | Connect with your fellow attendees during coffee and lunch breaks throughout the event.",
    price: "500",
    imageURL: Eco,
  },
  {
    name: "Early Bird Ticket",
    text: " Visibility Opportunities | Ensure maximum visibility through branding in the room, on the event website and marketing activities.",
    price: "500",
    imageURL: Afya,
  },
  {
    text: "Exhibition and demos area | Showcase your products and solutions or share a position paper with the audience.",
  },
];
