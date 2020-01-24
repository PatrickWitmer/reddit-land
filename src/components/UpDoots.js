import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Updoots = styled.button`
  flex: 1 50px;
  color: red;
  height: 100%;
`;

const UpDoots = props => {
  const [newscore, setScore] = useState(props.score);

  return (
    <Updoots onClick={() => setScore(newscore + 1)}>
      Updoots: {newscore}
      <br />
    </Updoots>
  );
};

export default UpDoots;
