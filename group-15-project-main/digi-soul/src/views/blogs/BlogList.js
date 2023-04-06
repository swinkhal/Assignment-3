import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import axios from "axios";

export default function BlogList() {

  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    axios.get(`https://digi-soul.onrender.com/api/blog/getAll`).then((res) => {
      setBlogs(res.data.data)
    }).catch((err) => {
      alert(err.response.data.message);
    });
  })

  return (
    <Container sx={{ mt: 4 }}>
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item></Grid>
        </Grid>
      </Container>
      <Button href="/addblog" variant="contained" style={{ float: 'right' }}>
        Add Blog
      </Button>

      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>

          {blogs.length > 0 && blogs.map(item => {
            return (
              <>
                <Grid item xs={12} sm={6} key={item._id}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="140"
                      image={`https://digi-soul.onrender.com/images/${item.imagePath}`}
                      alt={item.Title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.Title}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" href={`/blog/${item._id}`}>
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </>)
          })}

          {blogs.length == 0 && <p>No blogs yet</p>}
        </Grid>
      </Container>
    </ Container>
  );
};
