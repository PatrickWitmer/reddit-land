import React, { useState } from 'react';
import styled from 'styled-components';
import { render } from '@testing-library/react';
// import { loadReddit } from './Redditorer';

const SubReddit = props => {
  const [newsub, setSub] = useState(props.subreddit);

  function handleChange(e) {
    console.log(e.target.value);
    return setSub(e.target.value);
  }

  return (
    <>
      <h5>Enter a subreddit:</h5>
      <Subreddit
        type="text"
        // onChange={e => setSub(e.target.value)}
        onChange={loadReddit}
        // onInput={loadReddit()}
        value={newsub}
        name="search"
        placeholder="Subreddit"
      />
    </>
  );
};

export default SubReddit;
