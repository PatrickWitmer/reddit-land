import React from 'react';
// import SubReddit from './SubReddit';
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

const Subreddit = styled.input`
  display: block;
  width: 80%;
  height: 50px;
  padding: 10px;
  text-align: center;
`;

// ~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~
//                      Styling End
// ~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~

class Redditorer extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.url = 'https://www.reddit.com/r/';
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      subReddit: 'blackmetal'
    };
  }
  loadReddit(sub) {
    console.log(sub);
    this.setState({
      items: [],
      subReddit: sub
    });

    fetch(this.url + sub + '.json')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.data.children
            // subReddit: this.state.subReddit
          });
        },

        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  componentDidMount() {
    this.loadReddit(this.state.subReddit);
  }

  // componentDidUpdate() {
  //   this.loadReddit();
  // }

  handleChange(e) {
    this.setState({ subReddit: e.target.value });
    console.log(e);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.loadReddit(e);
  }

  render() {
    const { isLoaded, items } = this.state;
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // } else

    // if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {
    return (
      <>
        {/* <SubReddit subreddit={this.state.subReddit} /> */}

        <form onSubmit={this.handleSubmit}>
          <label>Enter a Subreddit:</label>
          <Subreddit
            type="text"
            onChange={this.handleChange}
            // onChange={e => this.search(e.target.value)}
            // onInput={loadReddit()}
            value="SHITSHITSHIT"
            // placeholder="subreddit"
          />
          <input type="submit" value="Submit" />
        </form>

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

export default Redditorer;
