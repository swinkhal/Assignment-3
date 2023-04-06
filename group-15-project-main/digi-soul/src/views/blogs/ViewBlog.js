import React, { useState } from 'react';
import { Button, TextField, Container } from '@mui/material';
import Typography from "@mui/material/Typography";
import './blogs.css'
import axios from "axios";
import { useParams } from "react-router-dom";

const ViewBlog = () => {

  const { id } = useParams();
  const [blog, setBlog] = React.useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
  };

  React.useEffect(() => {
    axios.get(`https://digi-soul.onrender.com/api/blog/singleBlog/${id}`).then((res) => {
      setBlog(res.data.data)
    }).catch((err) => {
      alert(err.response.data.message);
    });
  }, [])

  return (
    <>
      <Container sx={{ marginTop: "25px" }}>
        <Typography variant="h4" component="h1" textAlign="center" gutterBottom>
          {blog.Title}
        </Typography>

        <img
          src={`https://digi-soul.onrender.com/images/${blog.imagePath}`}
          alt=" not available"
          className='blogs-img'
        />

        <hr />

        <Typography variant="body1" gutterBottom>
          {blog.Content}
        </Typography>
      </Container>
    </>
  );
};

export default ViewBlog;
