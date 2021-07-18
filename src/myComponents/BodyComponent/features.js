import React from 'react'
import { Box, Container, Grid } from "@material-ui/core";
import { useStyles } from "./bodyStyle";
import { RenderSectionHeading } from "../commonComponents/common";
import ScrollAnimation from "react-animate-on-scroll";


export default function Features() {
    const classes = useStyles();

    return (
        <Box className={classes.section} id='Features'>
            <ScrollAnimation animateIn='fadeIn'>
                <Container maxWidth='xl'>
                    <Grid container direction="column" justifyContent={"center"}>
                        <Grid item sm={12} md={7} >
                            {RenderSectionHeading({
                                SmallText: "Features",
                                Title: "Our Features",
                                AllCenter: true,
                                Dec_Styles: { margin: "0px auto", width: "100px" },
                            })}
                        </Grid>
                        <Grid>
                        <Box>
                            <h2>Value for money</h2>
                            <p>We Deliver the best design and comfort with a combination of quality and budget-friendly interir.</p>
                            <hr className={classes.listhr} />
                            </Box>
                            <Box>
                            <h2>Great Performance -</h2>
                            <p>We rely on premium quality of top-notch brands. We give our 100% in flawless design and smart solutions with latest innovations.</p>
                            <hr className={classes.listhr} />
                            </Box>
                            <Box>
                            <h2>Good Looks</h2>
                            <p>We assure you to deliver a Modern and Smart interior which matches your requirement. Choose from a variety of color combinations and designs to decore your place.</p>
                            <hr className={classes.listhr} />
                            </Box>
                            <Box>
                            <h2>After Sales Service</h2>
                            <p>We always take into considerations delivering servics on time. We have well-trained and experienced service technicians who are at your service in just one call away.</p>
                            <hr className={classes.listhr} />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </ScrollAnimation>
        </Box>
    )
}
