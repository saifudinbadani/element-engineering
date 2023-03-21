import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {  Typography, Button } from '@material-ui/core';

export function PostDetail({ handleBackButtonClick }) {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
  
    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => {
          setPost(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, [postId]);
  
    if (!post) {
      return (
        <Typography variant="h6">
          Loading...
        </Typography>
      );
    }
  
    return (
        <div>
          <Button variant="contained" color="primary" onClick={handleBackButtonClick}>
            Back
          </Button>
          <Typography variant="h4" gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="body1">
            {post.body}
          </Typography>
        </div>
      );
    }
  