import React from 'react';
import './App.css';
import HooksExample from './components/HooksExample'
import Welcome from './components/Welcome'
import Clock from './components/Clock'
import EventsTest from './components/EventsTest'
import ListComponent from './components/ListComponent'
import NameForm from './components/NameForm'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navigation from './components/Navigation'

function App() {
  return (    
    <div className="App">
      <header className="App-header">
      </header>
        <BrowserRouter>
          <Navigation/>
          <Welcome name='Franklin'/>
          <Switch>
            <Route path='/clock' component={Clock}/> 
            <Route path='/events' component={EventsTest}/>
            <Route path='/hooks' component={HooksExample}/>
            <Route path='/form' component={NameForm}/>
            <Route path='/list' render={(props) => <ListComponent {...props} numbers={[1,4,9,3,7]}/>}/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
