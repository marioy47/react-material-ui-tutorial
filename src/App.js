// src/App.js
import React from 'react';
import { Button } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <h1>React material Tutorial</h1>
      <h2>This Could be a subtitle</h2>
      <p>And this is a paragraph</p>
      <Button variant="contained" color="primary">
        A Primary button
      </Button>
      <Button variant="contained" color="secondary">
        A Secondary button
      </Button>
    </div>
  );
}

export default App;
