import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useLocation } from "react-router-dom";
import "./tabs.css";

export default function ProductTabs() {
  const location = useLocation();
  const [value, setValue] = React.useState(
    // location.pathname.includes("all") ? 0 : 1
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box className="tabs-box" sx={{ bgcolor: "background.paper" }}>
      <Tabs
        onChange={handleChange}
        className="tabs"
        TabIndicatorProps={{ sx: { display: "none" } }}
        padding="0"
        sx={{
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
            "& .MuiTab-root": { padding: "5px", margin: "auto" },
            "& .Mui-selected": {
              color: "#03989E",
              border: "1px solid #03989E",
            },
          },
        }}
        value={value}
        centered
      >
        <Tab label="All" href="/product/all" tabIndex={0}/>
        <Tab label="Smart Phones" href="/product/phones"  tabIndex={1}/>
        <Tab label="Laptops" href="/product/laptop"  tabIndex={2}/>
        <Tab label="Cameras" href="/product/camera" />
        <Tab label="Gaming Consoles" href="/product/gamingconsole" />
        <Tab label="Headphones" href="/product/headphone" />
        <Tab label="Televisions" href="/product/television" />
        <Tab label="Desktops" href="/product/desktop" />
        <Tab label="Accessories" href="/product/accessories" />
      </Tabs>
    </Box>
  );
}
