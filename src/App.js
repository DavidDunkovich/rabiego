import React from 'react';
import { Header, Embed } from 'semantic-ui-react';

function App() {
  return (
    <div style={{backgroundImage: 'url(heartsbg.png)', height: '100%', width: '100%'}}>
      <Header as='h1' textAlign='center' style={{padding: '2em 0 1em 0'}} color='blue'>To Mr and Mrs Rabiego</Header>
      <div style={{width: '50%', margin: '0 auto'}}>
        <Embed />
      </div>
    </div>
  );
}

export default App;