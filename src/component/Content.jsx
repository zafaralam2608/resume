import React from 'react';
import { Box, Container, Toolbar } from '@mui/material';
import ScrollToTop from './ScrollToTop';
import Experience from '../section/Experience';

export default function Content() {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, height: '100vh', overflow: 'auto' }}
    >
      <Toolbar />
      <Container maxWidth="100%" sx={{ mt: 5, mb: 5 }}>
        <Experience />
        <div style={{ height: '60px' }}>
          <ScrollToTop />
        </div>
      </Container>
    </Box>
  );
}
