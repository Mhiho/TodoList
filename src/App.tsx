import React from 'react';
import './App.css';
import HomePage from './routes/HomePage'
import {HashRouter, Route} from 'react-router-dom'
import {ThemeProvider} from './hoc/ThemeContext'
import Layout from './hoc/Layout'

const App: React.FC = () => {
  return (
    <>
     <HashRouter>
       <ThemeProvider>
          <Layout>
            <Route exact path="/" component={HomePage} />

          </Layout>
       </ThemeProvider>
     </HashRouter>
    </>
  )
}

export default App;
