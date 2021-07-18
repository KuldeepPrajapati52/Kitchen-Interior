import React from "react";
import { Box, Container, Grid } from "@material-ui/core";
import { useStyles } from "./bodyStyle";
import { RenderSectionHeading } from "../commonComponents/common";
import ScrollAnimation from "react-animate-on-scroll";

//import in ht eimages
import Work1 from "../../images/ProjectImg/Work1.png";
import Work2 from "../../images/ProjectImg/Work2.png";
import Work3 from "../../images/ProjectImg/Work3.png";
import Work4 from "../../images/ProjectImg/Work4.png";
import Work5 from "../../images/ProjectImg/Work5.png";
import Work6 from "../../images/ProjectImg/Work6.png";
import Work7 from "../../images/ProjectImg/Work7.png";
import Work8 from "../../images/ProjectImg/Work8.png";
import Work9 from "../../images/ProjectImg/Work9.gif";

export default function Portfolio() {
  const classes = useStyles();

  const portfolio = [
    { url: Work1, name: " # PortFolio 1" },
    { url: Work2, name: " # PortFolio 2" },
    { url: Work3, name: " # PortFolio 3" },
    { url: Work4, name: " # PortFolio 4" },
    { url: Work5, name: " # PortFolio 5" },
    { url: Work6, name: " # PortFolio 6" },
    { url: Work7, name: " # PortFolio 6" },
    { url: Work8, name: " # PortFolio 6" },
    { url: Work9, name: " # PortFolio 6" },
  ];

  return (
    <Box className={classes.sectionDark} id='Projects'>
      <ScrollAnimation animateIn='fadeIn'>
        <Container maxWidth='xl'>
          <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item sm={12} md={5}>
              {RenderSectionHeading({
                SmallText: "Projects",
                Title: "Take a look at our Latest Project ",
                AllCenter: true,
                Dec_Styles: { margin: "0px auto", width: "100px" },
              })}
            </Grid>
          </Grid>
          {/* now image section  */}
          <Grid container className={classes.imageContaienr} spacing={2}>
            {portfolio.map((item, i) => (
              <Grid
                key={i}
                item
                xs={6}
                sm={6}
                md={4}
                className={classes.portFolioImageWrap}>
                <img
                  src={item.url}
                  alt={"grooming"}
                  className={classes.image}
                />
                
              </Grid>
            ))}
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
}
