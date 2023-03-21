import React, { useState, useEffect } from 'react';
import { Container, AppBar, Toolbar, Typography, Grid, Box, Pagination } from '@mui/material';
import axios from 'axios';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=9`)
      .then((response) => {
        setPosts(response.data);
        const totalPosts = response.headers['x-total-count'];
        setTotalPages(Math.ceil(totalPosts / 9));
      })
      .catch((error) => console.log(error));
  }, [page]);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">My Blog</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Box mt={3}>
          <Grid container spacing={2}>
            {posts.map((post) => (
              <Grid item key={post.id} xs={12} sm={6} md={4}>
                <Post post={post} />
              </Grid>
            ))}
          </Grid>
          <Box mt={3} display="flex" justifyContent="center">
            <Pagination count={totalPages} page={page} onChange={handleChangePage} />
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default App;
