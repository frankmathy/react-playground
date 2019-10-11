import React from 'react';
import './App.css';
import Example from './components/hooks/Example'
import Welcome from './components/general/Welcome'
import Clock from './components/general/Clock'

function App() {
  return (    
    <div className="App">
      <header className="App-header">
        <Clock/>
        <Clock updateInterval={5}/>
        <Clock/>
        <Welcome name='Franklin'/>
        <Example/>
      </header>
    </div>
  );
}

export default App;
