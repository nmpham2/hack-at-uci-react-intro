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
  const [style, updateStyle] = useState("Manual CSS");

  function onSwitch() {
    if (style === "MUI") {
      updateStyle("Manual CSS");
      return;
    }

    updateStyle("MUI");
  }

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
