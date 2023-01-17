import { useState } from "react";
import "./Home.css";

import {
  Box,
  FormControlLabel,
  Switch,
  ThemeProvider,
  createTheme,
} from "@mui/material";

import List from "./ListComponents/List";
import MaterialList from "./MaterialListComponents/MaterialList";

/* 
  Here, we are using Material UI's createTheme() to modify the colors 
  and fonts from the default
  MUI components. 
*/
const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#00363B",
    },
    secondary: {
      main: "#83c5be",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontSize: 14,
    h1: {
      fontSize: 32,
      fontWeight: "bold",
    },
  },
});

function Home(props) {
  /* 
    We are storing the state of the page's style so that we can
    toggle between rendering the Material UI and manual CSS 
    lists.
  */
  const [style, updateStyle] = useState("Manual CSS");

  /*
    This function handles the toggle switch. It sets the new state of our
    style variable which causes a re-render of our component so we can see
    the other version of the list!
  */
  function onSwitch() {
    if (style === "MUI") {
      updateStyle("Manual CSS");
      return;
    }

    updateStyle("MUI");
  }

  /*
    We can see that what we return from this component is a bunch of HTML.
    This is basically how we define what we want to display in our component.
    However, we can also use JavaScript logic to display the CSS or Material
    UI verisons based on the current state of our style variable (ex: if it 
    is equal to "Manual CSS" or "MUI"). Based on that state, we display 
    a <List/> or <MaterialList/> component.
  */
  return (
    <div className="Home">
      <div className="container">
        <ThemeProvider theme={muiTheme}>
          {(style === "Manual CSS" && <List {...props} />) ||
            (style === "MUI" && <MaterialList {...props} />)}
          <Box p={4}>
            <FormControlLabel
              control={<Switch />}
              onChange={onSwitch}
              label={style}
            />
          </Box>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Home;
