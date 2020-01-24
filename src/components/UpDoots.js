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
    <Updoots onClick={() => setScore(newscore + 1)}>
      Updoots: {newscore}
    </Updoots>
  );
};

export default UpDoots;
