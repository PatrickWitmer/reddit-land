import React, { useState } from 'react';
import styled from 'styled-components';

const Updoots = styled.button`
  display: flex;
  flex: 1 50px;
  color: red;
  height: 50px;
  margin: 50px;
`;

const DownDoots = styled.button`
  display: flex;
  flex: 1 50px;
  color: red;
  height: 50px;
  margin: 50px;
`;

const Dracula = styled.div`
  color: purple;
`;

const UpDoots = props => {
  const [newscore, setScore] = useState(props.score);

  return (
    <React.Fragment>
      <Updoots onClick={() => setScore(newscore + 1)}>Up Doot</Updoots>
      <Dracula>Updoots: {newscore}</Dracula>
      <DownDoots onClick={() => setScore(newscore - 1)}>Down Doot</DownDoots>
    </React.Fragment>
  );
};

export default UpDoots;
