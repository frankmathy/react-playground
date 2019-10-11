import React from 'react';
import './App.css';
import Example from './components/hooks/Example'
import Welcome from './components/general/Welcome'
import Clock from './components/general/Clock'
import EventsTest from './components/general/EventsTest'
import ListComponent from './components/general/ListComponent'
import NameForm from './components/general/NameForm'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navigation from './components/general/Navigation'

function App() {
  return (    
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navigation/>
          <hr/>
          <Welcome name='Franklin'/>
          <Switch>
            <Route path='/clock' component={Clock}/>
            <Route path='/events' component={EventsTest}/>
            <Route path='/hooks' component={Example}/>
            <Route path='/form' component={NameForm}/>
            <Route path='/list' render={(props) => <ListComponent {...props} numbers={[1,4,9,3,7]}/>}/>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
