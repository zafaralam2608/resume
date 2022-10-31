import React from 'react';
import {
  Avatar, Button, Card, CardHeader, Divider,
} from '@mui/material';
import profileItems from '../data/Profiles';

export default function Profiles() {
  return (
    <div id="4">
      <h2>Profiles</h2>
      <Divider style={{ width: '300px' }} />
      <div style={{ paddingTop: '10px' }}>
        {
                    profileItems.map((profile) => (
                      <Card style={{ marginBottom: '5px' }}>
                        <CardHeader
                          avatar={<Avatar>{profile.avatar}</Avatar>}
                          title={profile.title}
                          subheader={<Button size="small" href={profile.link}>Visit</Button>}
                        />
                      </Card>
                    ))
                }
      </div>
    </div>
  );
}
