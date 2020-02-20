import React from 'react';
import './App.css';
import HomePage from './routes/HomePage'
import {HashRouter, Route} from 'react-router-dom'
import AddTodo from './routes/AddTodo'

const App: React.FC = () => {
  return (
    <>
     <HashRouter>
      <Route exact path="/" component={HomePage} />
      <Route path="/addTodo" component={AddTodo} />
     </HashRouter>
    </>
  )
}

export default App;
