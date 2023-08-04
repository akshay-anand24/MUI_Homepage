import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';

export default function Cards() {
  return (
    <Container flexGrow={1} sx={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: '200px' }}
        image={require("./pic1.png")}
        title="Be a Ranker"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Rank Your Profile
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Use our AI Tools to increase the visibility of your profile. Make precise and informative Resumes, add important skills and elaborate your knowledge in different domains 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{color:'rgb(214, 141, 6)','&:hover':{backgroundColor:'transparent'}}}>Share</Button>
        <Button size="small" sx={{color:'rgb(214, 141, 6)','&:hover':{backgroundColor:'transparent'}}}>Learn More</Button>
      </CardActions>
    </Card>


    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: '200px' }}
        image={require("./pic.png")}
        title="Be a Ranker"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Know Your Earning Potential
        </Typography>
        <Typography variant="body2" color="text.secondary">
         A quick survey about you can help to find your money earning capabilities. This survey will help to find the hidden skills which can get monetized
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{color:'rgb(214, 141, 6)','&:hover':{backgroundColor:'transparent'}}}>Share</Button>
        <Button size="small" sx={{color:'rgb(214, 141, 6)','&:hover':{backgroundColor:'transparent'}}}>Learn More</Button>
      </CardActions>
    </Card>
    </Container>
  );
}