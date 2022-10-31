import React, { useState } from 'react';
import {
  Box, Divider, Tab, Tabs, Typography,
} from '@mui/material';
import experienceItems from '../data/Education';

export default function Experience() {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box id="0">
      <Typography variant="h3">Experience</Typography>
      <Divider sx={{ width: '300px' }} />
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        {experienceItems.map((experience) => (
          <Tab label={experience.org} />
        ))}
      </Tabs>
    </Box>
  );
}
