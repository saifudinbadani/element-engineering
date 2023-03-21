import axios from 'axios';
import { PostDetail } from './Components/PostDetail';
import { PostList } from './Components/PostList';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const history = useHistory();

  const handleBackButtonClick = () => {
    history.goBack();
  };

  return (
    <Container maxWidth="md">
      <Switch>
        <Route path="/post/:postId">
          <PostDetail handleBackButtonClick={handleBackButtonClick} />
        </Route>
        <Route path="/">
          <PostList posts={posts} />
        </Route>
      </Switch>
    </Container>
  );
}


export default App;
