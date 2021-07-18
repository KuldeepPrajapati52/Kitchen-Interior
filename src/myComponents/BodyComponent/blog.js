import React from "react";
import { Box, Container, CardActionArea, CardMedia, CardContent, Typography, Card, Grid } from "@material-ui/core";
import { useStyles } from "./bodyStyle";
import { RenderSectionHeading } from "../commonComponents/common";
import ScrollAnimation from "react-animate-on-scroll";
//image
import blog1 from "../../images/moreImage/blog1.png"
import blog2 from "../../images/moreImage/blog2.png"
import blog3 from "../../images/moreImage/blog3.jpg"
import blog4 from "../../images/moreImage/blog4.png"





export default function Blog() {
    const classes = useStyles();

    return (
        <Box className={classes.sectionDark} id='Blog'>
            <ScrollAnimation animateIn='fadeIn'>
                <Container maxWidth='xl'>

                    {RenderSectionHeading({
                        SmallText: "Blog",
                        Title: "Have A Look To Our Blog",
                        AllCenter: true,
                        Dec_Styles: { margin: "0px auto", width: "100px" },
                    })}
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={4}>
                            <Box >
                                <Card className={classes.blogcard}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="blog1"
                                            height="300"
                                            image={blog1}
                                            title="Blog 1"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Salman Khan
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                            “Our dream kitchen is exactly what we wanted.”
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>

                                </Card>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box >
                                <Card className={classes.blogcard}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="blog2"
                                            height="300"
                                            image={blog2}
                                            title="Blog 2"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Kuldeep Prajapati
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                            “We have very busy schedules and didn’t have time to spare but the entire The Paradise Kitchen team was very accomodating.”
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>

                                </Card>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box >
                                <Card className={classes.blogcard}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="blog3"
                                            height="300"
                                            image={blog3}
                                            title="Blog 3"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Sonam Singh
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                            “Home feels like a hotel now! We love it.”
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>

                                </Card>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box >
                                <Card className={classes.blogcard}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="blog4"
                                            height="300"
                                            image={blog4}
                                            title="Blog 4"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Renu Sharma
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                            “We’d visualised a minimalist concept like this and The Paradise Kitchen successfully delivered it.”
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>

                                </Card>
                            </Box>
                        </Grid>
                    </Grid>

                </Container>
            </ScrollAnimation>
        </Box>
    )
}
