import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from "@mui/material/Chip";

export default function ProductCard(props) {
    const {id, category, name, price, imgurl} = props
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Event Thumbnail"
        height="250"
        image={imgurl}
      />
      <CardContent>
        <Chip label={category} size="small" />
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="h7" color="text.secondary">
          ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={`/product/${id}`}>
          See Full Specifications
        </Button>
      </CardActions>
    </Card>
  );
}
