import { Grid, Paper, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
export function PostList({ posts }) {
    return (
      <Grid container spacing={2}>
        {posts.map(post => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Paper>
              <Typography variant="h6" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {post.body}
              </Typography>
              <Button component={Link} to={`/post/${post.id}`} variant="contained" color="primary">
                View Details
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    );
  }
  
 