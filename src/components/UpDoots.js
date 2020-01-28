import React, { useState } from 'react';
import styled from 'styled-components';

const Updoots = styled.button`
  ${'' /* display: flex; */}
  flex: 1 50px;
  color: red;
  height: 50px;
  margin: 10px;
`;

const DownDoots = styled.button`
  ${'' /* display: flex; */}
  flex: 1 50px;
  color: red;
  height: 50px;
  margin: 10px 60px 10px 60px;
`;

const Dracula = styled.div`
  color: purple;
`;

const UpDoots = props => {
  const [newscore, setScore] = useState(props.score);

  return (
    <>
      <Updoots onClick={() => setScore(newscore + 1)}>Up Doot</Updoots>
      <Dracula>Updoots: {newscore}</Dracula>
      <DownDoots onClick={() => setScore(newscore - 1)}>Down Doot</DownDoots>
    </>
  );
};

export default UpDoots;
