import React, { useState } from 'react';
import styled from 'styled-components';

const Updoots = styled.button`
  flex: 1 50px;
  color: red;
  height: 50px;
`;

const UpDoots = props => {
  const [newscore, setScore] = useState(props.score);

  return (
    <React.Fragment>
      <Updoots onClick={() => setScore(newscore + 1)}>Up Doot</Updoots>
      Updoots: {newscore}
      <Updoots onClick={() => setScore(newscore - 1)}>Down Doot</Updoots>
    </React.Fragment>
  );
};

export default UpDoots;
