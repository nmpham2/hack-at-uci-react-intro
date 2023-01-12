import { useState } from "react";
import "./Home.css";

import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import MaterialTODOList from "../views/MaterialTODOList";
import TODOList from "../views/TODOList";
import MaterialList from "../views/MaterialList";

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
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 36,
      fontWeight: "bold",
    },
  },
});

function Home() {
  const [style, updateStyle] = useState("Manual CSS");

  function onSwitch() {
    if (style === "MUI") {
      updateStyle("Manual CSS");
      return;
    }

    updateStyle("MUI");
  }

  const groceryList = {
    title : "Grocery List",
    header1 : "Food",
    header2 : "Quantity"
  };

  return (
    <div className="Home">
      <div className="Container">
        <ThemeProvider theme={muiTheme}>
          {(style === "Manual CSS" && <TODOList />) ||
            (style === "MUI" && <MaterialList data={ groceryList } />)}
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
