import React from "react";
import { Box, IconButton, Typography } from "@material-ui/core";
import { useStyles } from "./bodyStyle";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { Link } from "react-scroll";

export default function Footer() {
  const classes = useStyles();
  const date = new Date();

  return (
    <Box className={classes.footerContainer}>
      <IconButton
        color='inherit'
        className={classes.arrowTop}
        component={Link}
        spy={true}
        smooth={true}
        offset={-70}
        duration={1200}
        to='Home'>
        <ArrowUpwardIcon />
      </IconButton>
      <Typography variant='body1' align='center'>
        Developed and designed by <b>Kuldeep J Prajapati</b>, All Right Reserved &#169; {date.getFullYear()}
      </Typography>
    </Box>
  );
}
