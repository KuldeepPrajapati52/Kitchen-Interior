import React from "react";
import { Box, Container, Grid } from "@material-ui/core";
import { useStyles } from "./bodyStyle";
import { RenderSectionHeading } from "../commonComponents/common";
import ScrollAnimation from "react-animate-on-scroll";


export default function Services() {
    const classes = useStyles();

    return (
        <Box className={classes.sectionDark} id='Services'>
            <ScrollAnimation animateIn='fadeIn'>
                <Container maxWidth='xl'>
                    <Grid container direction="column" justifyContent={"center"}>
                        <Grid item sm={12} md={7} >
                            {RenderSectionHeading({
                                SmallText: "Services",
                                Title: "Services We Provide",
                                AllCenter: true,
                                Dec_Styles: { margin: "0px auto", width: "100px" },
                            })}
                        </Grid>
                        <Grid>
                            <h2>Modular Kitchen</h2>
                            <p>Perfect modular for perfect home</p>
                            <hr className={classes.listhr}/>
                            <h2>Wardrobe</h2>
                            <p>Revolution towards smart storage</p>
                            <hr className={classes.listhr}/>
                            <h2>UPVC windows</h2>
                            <p>UPVC windows and Doors for better life</p>
                            <hr className={classes.listhr}/>
                        </Grid>
                    </Grid>
                </Container>
            </ScrollAnimation>
        </Box>
    )
}
