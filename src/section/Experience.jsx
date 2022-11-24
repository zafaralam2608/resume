import React, { useState } from 'react';
import {
  Accordion, AccordionDetails, AccordionSummary, Box, CardContent, CardHeader, Divider, Grid, List,
  ListItem, Tab, Tabs, Typography,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import experienceItems from '../data/Experience';

export default function Experience() {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const current = experienceItems[value];

  return (
    <Box id="0">
      <Typography variant="h3">Experience</Typography>
      <Divider sx={{ width: '300px' }} />
      <Grid container>
        <Grid>
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
        </Grid>
        <Grid>
          <CardHeader
            title={current.post}
            subheader={`${current.org}, ${current.location}`}
          />
          <CardContent>
            {
              current.projects.map((project) => (
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <CardHeader
                      title={project.title}
                      subheader={project.technologies.join(' | ')}
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography paragraph>
                      {project.description}
                    </Typography>
                    <List>
                      {project.contributions.map((contribution) => (
                        <ListItem>
                          <Typography>{`* ${contribution}`}</Typography>
                        </ListItem>
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
              ))
            }
          </CardContent>
        </Grid>
      </Grid>
    </Box>
  );
}
