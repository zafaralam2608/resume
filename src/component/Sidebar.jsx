import React, { useState } from 'react';
import {
  Divider, IconButton, Link, List, ListItem, ListItemIcon, ListItemText, Menu, Toolbar,
} from '@mui/material';
import {
  AccountCircle, ChevronLeft, Home, Laptop, School, Work,
} from '@mui/icons-material';
import Drawer from '../common/Drawer';

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={() => (setOpen(!open))}>
          {open
            ? (<ChevronLeft />)
            : (<Menu />)}
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        <Link href="#0" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link href="#1" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              <Laptop />
            </ListItemIcon>
            <ListItemText primary="Skills" />
          </ListItem>
        </Link>
        <Link href="#2" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              <Work />
            </ListItemIcon>
            <ListItemText primary="Experience" />
          </ListItem>
        </Link>
        <Link href="#3" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              <School />
            </ListItemIcon>
            <ListItemText primary="Education" />
          </ListItem>
        </Link>
        <Link href="#4" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Profiles" />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
}
