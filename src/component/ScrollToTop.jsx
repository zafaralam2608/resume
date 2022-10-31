import React, { useState } from 'react';
import { Fab, Zoom } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 200);
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    visible
      ? (
        <Zoom in style={{ position: 'fixed', left: 'calc(50% - 62px)', bottom: '20px' }}>
          <div onClick={handleClick} role="presentation">
            <Fab size="medium" variant="extended">
              <KeyboardArrowUp />
              Go to top
            </Fab>
          </div>
        </Zoom>
      )
      : <div />
  );
}
