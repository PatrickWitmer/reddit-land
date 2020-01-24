import React from 'react';
import './App.css';
import Redditorer from './components/Redditorer';
import styled from 'styled-components';

const HeaderText = styled.header`
  color: white;
  font-size: 24px;
`;

function App() {
  return (
    <div className="App">
      <HeaderText className="App-header">
        <p>Reddit Simulator</p>

        <Redditorer />
      </HeaderText>
    </div>
  );
}

export default App;
