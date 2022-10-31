import React from 'react';
import {
  Avatar, Card, CardContent, CardHeader, Divider,
} from '@mui/material';
import skillItems from '../data/Skills';
import { calcTime } from '../constant/Util';

export default function Skills() {
  return (
    <div id="1">
      <h2>Technical Skills</h2>
      <Divider style={{ width: '300px' }} />
      <div style={{ paddingTop: '30px' }}>
        {skillItems.map((skill) => (
          <Card style={{ marginBottom: '10px' }}>
            <CardHeader title={skill.section} />
            <CardContent style={{ display: 'flex', flexWrap: 'wrap' }}>
              {skill.items.map((item) => (
                <CardHeader
                  avatar={<Avatar>{item.avatar}</Avatar>}
                  title={item.title}
                  subheader={calcTime(item.timeline)}
                />
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
