/**
 * @author Amanjot Singh
 **/

import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useLocation } from 'react-router-dom';

export default function CenteredTabs() {
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname.includes("all")?0:1);

  const handleChange = (event, newValue) => {
    console.log(event)
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs onChange={handleChange} value={value} centered>
        <Tab label="All Events" href='/events/all'/>
        <Tab label="Upcoming Events" href='/events/upcoming'/>
      </Tabs>
    </Box>
  );
}