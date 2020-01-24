import React from 'react';
// import RedditCards from './RedditCards';
import styled from 'styled-components';

const RedditMain = styled.ul`
  display: block;
  list-style: none;
`;

const RedditCard = styled.li`
  display: flex;
  background-color: lightgray;
  font-size: 14px;
  margin: 0px 10px 10px 0px;
  align-items: center;
`;

const TitleLink = styled.a`
  text-decoration: none;
  padding: 10px;
  flex: 3 200px;
  color: black;
`;

const Updoots = styled.button`
  flex: 1 50px;
`;

const CommentsNum = styled.button`
  flex: 1 50px;
`;

class Redditorer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch('https://www.reddit.com/r/witcher.json')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.data.children
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <RedditMain>
          {items.map((item, i) => (
            <RedditCard key={i}>
              <img src={item.data.thumbnail} />
              <Updoots>Updoots: {item.data.score}</Updoots>
              <TitleLink href={'https://reddit.com/' + item.data.permalink}>
                {item.data.title}
              </TitleLink>
              <CommentsNum>Comments: {item.data.num_comments}</CommentsNum>
            </RedditCard>
          ))}
        </RedditMain>
      );
    }
  }
}

export default Redditorer;
