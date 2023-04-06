import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { FormControl, FormGroup, Input, InputLabel } from '@mui/material';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ColorTextFields() {

  const navigate = useNavigate();
  const [content, setContent] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [image, setImage] = React.useState("");

  function handleSubmit(event) {

    const obj1 = new FormData();
    obj1.append("image", image)
    obj1.append("Title", title)
    obj1.append("Content", content)

    axios.post('https://digi-soul.onrender.com/api/blog', obj1).then((resp) => {
      navigate("/homepage");
    }).catch((err) => {
      alert(err.response.data.message);
    });
  }

  return (
    <>
      <div>
        <div>
          <>
            <Container maxWidth="l">
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                </Grid>
              </Grid>
            </Container>
          </>
          <br />

        </div>
        <Container sx={{ py: 8 }} maxWidth="md">
          <h1>Add Blog</h1>
          <FormGroup>
            <FormControl sx={{ marginBottom: '1rem' }}>
              <InputLabel>Title</InputLabel>
              <Input name={title} onChange={(e) => setTitle(e.target.value)} />
            </FormControl>

            <FormControl sx={{ marginBottom: '1rem' }}>
              <InputLabel>Content</InputLabel>
              <Input name={content} onChange={(e) => setContent(e.target.value)} />
            </FormControl>

            <FormControl sx={{ marginBottom: '1rem' }}>
              {/* <InputLabel>Add Image</InputLabel> */}
              <Input type="file" onChange={(e) => setImage(e.target.files[0])} />
            </FormControl>

            <Button variant='contained' onClick={handleSubmit}>Submit</Button>
          </FormGroup>
        </Container>
      </div>
    </>
  );
}