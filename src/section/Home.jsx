import React from 'react';
import {
  Avatar, Box, CardContent, Divider, Fab, Grid, List, ListItem, ListItemIcon, ListItemText,
  Typography,
} from '@mui/material';
import { Email, GetAppSharp, Phone } from '@mui/icons-material';
import display from '../data/profile.jpg';
import home from '../data/Home';

export default function Home() {
  return (
    <Box id="0">
      <Typography variant="h3">About Me</Typography>
      <Divider sx={{ width: '300px' }} />
      <Grid container alignContent="center" wrap="wrap-reverse">
        <Grid item lg={9} md={6} xs={12}>
          <CardContent>
            <List>
              {home.contentList.map((content) => (
                <Typography paragraph>
                  {content}
                </Typography>
              ))}
              <ListItem>
                <ListItemIcon>
                  <Email />
                </ListItemIcon>
                <ListItemText primary={home.email} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Phone />
                </ListItemIcon>
                <ListItemText primary={`+${home.phone.code} ${home.phone.number}`} />
              </ListItem>
            </List>
          </CardContent>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Avatar
            sx={{ height: '250px', width: '250px' }}
            src={display}
            alt="Profile image"
          />
          <Fab variant="extended" href={home.link} sx={{ marginTop: '10px' }}>
            <GetAppSharp />
            Download Resume
          </Fab>
        </Grid>
      </Grid>
    </Box>
  );
}
