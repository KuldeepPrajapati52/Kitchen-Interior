import React, { useState } from "react";
import { Box, Container, Grid, } from "@material-ui/core";
import ScrollAnimation from "react-animate-on-scroll";

//icon  Import
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import MailRoundedIcon from '@material-ui/icons/MailRounded';
import PrintRoundedIcon from '@material-ui/icons/PrintRounded';

import { useStyles } from "./bodyStyle";
import {
  RenderSectionHeading,
  RenderSubmitButton,
  CardMedia,
} from "../commonComponents/common";
import CustomizedInputs from "../commonComponents/TextField";

export default function ContactUs() {
  const classes = useStyles();

  const contactDetails = [
    {
      icon: <LocationOnOutlinedIcon />,
      title: "Address",
      desc: "Datta nagar, Gajanan Mandir Rd, Dharampeth, Nasik, Maharashtra 2200020, India.",
    },
    {
      icon: <CallRoundedIcon />,
      title: "Contact",
      desc: "+91 000003689",
    },
    {
      icon: <PrintRoundedIcon />,
      title: "Fax",
      desc: "+91 982000000",
    },
    {
      icon: <MailRoundedIcon/>,
      title: "Mail-Id",
      desc: "space@gmail.com",
    },
  ];

  const [state, setState] = useState({
    data: {
      firstName: "",
      email: "",
      messages: "",
    },
    errors: {},
  });

  const handleOnChange = ({ target }) => {
    const { data, errors } = state;

    target.value.length <= 3
      ? (errors[target.name] = `Enter Full Name`)
      : (errors[target.name] = "");

    data[target.name] = target.value;
    setState({ data, errors });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { data } = state;

    console.log("Submitted data ", data);
    //post data via api call
  };

  return (
    <Box className={classes.section} id='ContactUs'>
      <ScrollAnimation animateIn='fadeIn'>
        <Container maxWidth='lg'>
          <Grid container justifyContent={"center"}>
            <Grid item sm={12} md={7}>
              {RenderSectionHeading({
                SmallText: "Contact Us",
                Title: "Contact Us For Quick Assistance",
              })}
              <Box className={classes.cardLists}>
                <Grid container spacing={1}>
                  {contactDetails.map((item, i) => (
                    <Grid
                      key={i}
                      item
                      xs={12}
                      sm={6}
                      style={{ margin: "10px 0px" }}>
                      {CardMedia({
                        Icon: item.icon,
                        Desc: item.desc,
                      })}
                    </Grid>
                  ))}
                </Grid>
              </Box>

              <Box className={classes.cardLists}>
                <form onSubmit={handleSubmit}>
                  <Grid container justifyContent='center'>
                    <Grid item xs={12} className={classes.gridItem}>
                      <CustomizedInputs
                        label='First Name'
                        name='firstName'
                        state={state}
                        onChange={handleOnChange}
                      />
                    </Grid>

                    <Grid item xs={12} className={classes.gridItem}>
                      <CustomizedInputs
                        label='Email@Example.com'
                        name='email'
                        state={state}
                        onChange={handleOnChange}
                      />
                    </Grid>

                    <Grid item xs={12} className={classes.gridItem}>
                      <CustomizedInputs
                        label='Your Messages Here'
                        name='messages'
                        state={state}
                        onChange={handleOnChange}
                        multiline
                        rows={6}
                      />
                    </Grid>

                    <Grid item xs={8} sm={6}>
                      {RenderSubmitButton({ label: "submit" })}
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
}
