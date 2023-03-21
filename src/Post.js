import React from 'react';
import { Grid, Card, CardContent, CardActions, Button, Typography } from '@mui/material';

function Post({ post }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            View Post
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Post;