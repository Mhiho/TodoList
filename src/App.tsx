import React from 'react';
import './App.css';
import HomePage from './routes/HomePage'
import {HashRouter, Route} from 'react-router-dom'
import AddTodo from './routes/AddTodo'
import {ThemeProvider} from './hoc/ThemeContext'
import Layout from './hoc/Layout'

const App: React.FC = () => {
  return (
    <>
     <HashRouter>
       <ThemeProvider>
          <Layout>
            <Route exact path="/" component={HomePage} />
            <Route path="/addTodo" component={AddTodo} />
          </Layout>
       </ThemeProvider>
     </HashRouter>
    </>
  )
}

export default App;
