import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  // Fetch posts
  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ posts: data }))
      .catch(err => this.setState({ error: err.message }));
  };

  // Lifecycle method - runs after first render
  componentDidMount() {
    this.loadPosts();
  }

  // Error handling lifecycle method
  componentDidCatch(error, info) {
    alert("An error occurred in the Posts component: " + error);
    console.error("Error info:", info);
  }

  render() {
    if (this.state.error) {
      return <h3>Error: {this.state.error}</h3>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {this.state.posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
