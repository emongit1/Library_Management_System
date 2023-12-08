import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import libraryimg from '../Assets/4013889_PNBUOL0.jpeg';
import { useState } from "react";
import records from './data.json';
import { Link } from 'react-router-dom';


export default function MCard() {

  const [data, setData] = useState(records);


  return (
    <>
     <div style={{ display: 'flex',flexWrap: 'wrap', gap: '20px' }}>
      {data.map((item, index) => (
        <Link to={{ pathname: '/history', state: { rating: item.rating } }} >
        <Card key={index} sx={{ width: 240, maxWidth: '100%'}} >
          <CardMedia sx={{ height: 140 }} image={libraryimg} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography paragraph>
              {item.rating}
            </Typography>
          </CardContent>
        </Card>
        
        </Link>
         
      ))}
      </div>
    </>
  );
}
