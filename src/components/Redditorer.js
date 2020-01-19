import React from 'react';

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
    fetch('https://www.reddit.com/r/aww.json')
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
        <ul>
          {items.map((item, i) => (
            <li key={i}>
              <a href={'https://reddit.com/' + item.data.permalink}>
                {item.data.title}
              </a>
              <img src={item.data.thumbnail} />
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default Redditorer;
