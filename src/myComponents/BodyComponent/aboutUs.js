import React from "react";
import { Box, Container, } from "@material-ui/core";
import { useStyles } from "./bodyStyle";
import { RenderSectionHeading } from "../commonComponents/common"
import ScrollAnimation from "react-animate-on-scroll";

export default function AboutUs() {
  const classes = useStyles();

  return (
    <Box className={classes.section} id='AboutUs'>
      <ScrollAnimation animateIn='fadeIn'>
        <Container>
          {RenderSectionHeading({
            SmallText: "About Us",
          })}
          <br />
          <p className ={classes.aboutPara}>Pioneered by Mr. Shubham and Mr. Mayank in 2000 as PK Marketing, the company revolutionised the way Nagpurians looked at the cooking space. It wasn’t long before the concept took Vidarbha by a storm and business grew exponentially. PK Marketing soon started creating their place in the marketplace of modular kitchens and other furniture. Their close associations with leading architects, interior designers and builders of the city opened doors to a flourishing business. The firm made a name for itself in the market because of their excellent service, innovative products and good management. From the traditional carpenter and his age-old designs to computer-designed 3D models, Paradise Kitchens changed the face of the cooking arena in many households.
            Besides having a huge Showroom at mumbai with a display space of 3000 sq. ft., the company boasts of two showrooms in Pune having a total display space of more than 3000 sq. ft. All the showrooms have a huge display of Kitchens & Home furniture too. A well-established dealer network in the entire Vidarbha, Marathwada, Pune& Bangalore region generates good business.<br /><br />

            Over the years, The Paradise Kitchen has regularly introduced newer designs and products in the market, making it a leader in the modular kitchens industry along with a good reputation in the UPVC windows and doors market.<br /><br />

            The Paradise Kitchen has tied up with prestigious international companies like Hafele, Nagold, Aristo and Lingel for different verticals.<br />
          </p>
        </Container>
      </ScrollAnimation>
    </Box>
  );
}
