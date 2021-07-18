import { Container } from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./headerStyle";
import Navbar from "./navbar";
import Typed from "react-typed";
import { DecoratorLabel } from "../commonComponents/common";
import DrawerComponent from "./drawer";

export default function HeaderComponent() {
  const classes = useStyles();

  // for navbar
  const navLinks = [
    { id: "Home", label: "Home" },
    { id: "AboutUs", label: "About Us" },
    { id: "Services", label: "Services" },
    { id: "Features", label: "Features" },
    { id: "Projects", label: "Projects" },
    { id: "ContactUs", label: "Contact Us" },
    { id: "Blog", label: "Blog" },
  ];

  //for drawer .
  const [initialState, setInitialState] = useState(false);
  const handleDrawerOpen = () => {
    setInitialState(!initialState);
  };

  return (
    <div className={classes.header} id='Home'>
      <div className={classes.headerWrapper}>
        <Navbar handleDrawerOpen={handleDrawerOpen} navLinks={navLinks} />
        <DrawerComponent
          navLinks={navLinks}
          initialState={initialState}
          handleDrawerOpen={handleDrawerOpen}
        />
        <Container className={classes.displayContainer}>
          <h1 className={classes.displayTextTitle}>
            Plan your Interior with our 
             <span style={{ paddingRight: "5px" }}></span>
            
            <Typed
              strings={[
                " Modern ideas,",
                " Smart ideas,",
              ]}
              typeSpeed={50}
              backSpeed={80}
              loop
            />
          </h1>
          <h3 className={classes.displayTextDescription}>
          Stylishly Designed and Convenient usage.
          </h3>

          {DecoratorLabel({ label: "Check Details", withIcon: true })}
        </Container>
      </div>
    </div>
  );
}
