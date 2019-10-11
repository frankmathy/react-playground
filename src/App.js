import React from 'react';
import './App.css';
import Example from './components/hooks/Example'
import Welcome from './components/general/Welcome'
import Clock from './components/general/Clock'
import EventsTest from './components/general/EventsTest'
import ListComponent from './components/general/ListComponent'

function App() {
  return (    
    <div className="App">
      <header className="App-header">
        <Clock/>
        <EventsTest/>
        <Welcome name='Franklin'/>
        <Example/>
        <ListComponent numbers={[1,4,9,3,7]}/>
      </header>
    </div>
  );
}

export default App;
