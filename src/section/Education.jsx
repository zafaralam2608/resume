import React from 'react';
import {
  Box, Divider, Table, TableBody, TableCell, TableContainer, TableRow, Typography,
} from '@mui/material';
import educationItems from '../data/Education';

export default function Education() {
  return (
    <Box id="0">
      <Typography variant="h3">Education</Typography>
      <Divider sx={{ width: '300px' }} />
      <TableContainer>
        <Table>
          <TableBody>
            {educationItems.map((education) => (
              <TableRow key={education.order}>
                <TableCell align="center" sx={{ border: 'none ' }}>
                  <Typography variant="h5">
                    {`${education.duration.from}  -  ${education.duration.to}`}
                  </Typography>
                </TableCell>
                <TableCell sx={{ border: 'none ' }}>
                  <Typography variant="h4">
                    {education.course}
                  </Typography>
                  <Typography>
                    {`${education.institute} , ${education.location}`}
                  </Typography>
                  <Typography variant="h6">
                    {education.score}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
