import React from 'react';
import './App.css';
import {
  Route, Switch, BrowserRouter 
} from 'react-router-dom';
import TodoList from './TodoList';
import ArchiveList from './ArchiveList';
import Header from './Header';
import Home from './Home';

const App = () => (
  
  <div>
    <BrowserRouter>
    
      <Header />
    
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/archive" component={ArchiveList} />
        <Route exact path="/todos" component={TodoList} />
      </Switch>

    </BrowserRouter>
  </div>
  
);

export default App;
