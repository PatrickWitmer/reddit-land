import React from 'react';
import SubReddit from './SubReddit';
import UpDoots from './UpDoots';
import styled from 'styled-components';

const RedditMain = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

const RedditCard = styled.li`
  ${'' /* display: flex; */}
  align-content: center;
  flex: 3 50px;
  background-color: lightgray;
  font-size: 14px;
  margin: 0px 10px 10px 0px;
  align-items: center;
  border: 2px solid yellow;
`;

const TitleLink = styled.a`
  text-decoration: none;
  padding: 10px;
  ${'' /* flex: 3 200px; */}
  color: black;
`;

const CommentsNum = styled.button`
  display: flex;
  align-items: end;
  height: 50px;
  margin: 50px 50px 0 50px;
`;

class Redditorer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      subReddit: ''
    };
  }
  async loadReddit() {
    await fetch(`https://www.reddit.com/r/${this.state.subReddit}` + '.json')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.data.children
            // subReddit: this.state.subReddit
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

  componentDidMount() {
    this.loadReddit();
  }

  render() {
    const { isLoaded, items } = this.state;
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // } else

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <SubReddit subreddit={this.state.subReddit} />

          <RedditMain>
            {items.map((item, i) => (
              <RedditCard key={i}>
                <img src={item.data.thumbnail} alt="Related Post" />

                <UpDoots score={item.data.score} />

                <TitleLink href={'https://reddit.com/' + item.data.permalink}>
                  {item.data.title}
                </TitleLink>

                <CommentsNum>Comments: {item.data.num_comments}</CommentsNum>
              </RedditCard>
            ))}
          </RedditMain>
        </>
      );
    }
  }
}

export default Redditorer;
