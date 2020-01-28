import React, { useState } from 'react';
import styled from 'styled-components';

const Subreddit = styled.input`
  display: block;
  width: 80%;
  height: 50px;
  padding: 10px;
  text-align: center;
`;

const SubReddit = props => {
  const [newsub, setSub] = useState(props.subreddit);

  return (
    <>
      <h5>Enter a subreddit:</h5>
      <Subreddit
        type="text"
        onChange={e => setSub(e.target.value)}
        value={newsub}
        name="search"
        placeholder="Subreddit"
      />
    </>
  );
};

export default SubReddit;
