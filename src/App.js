import React from 'react';
import './App.css';
import ChecklistBuilder from './containers/ChecklistBuilder/ChecklistBuilder';
import { Route, Switch } from 'react-router-dom';
import Details from './containers/Details/Details';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout'

function App() {
  return (
    <div className="App">
        <Layout>
        <Switch>
          <Route path= "/Checklist/products/:id" component={Details} />
          <Route path="/Checklist/products" exact component={ChecklistBuilder} />
          <Route path="/Checklist" exact component={Home} />
        </Switch>
        </Layout>
          
        
      
    </div>
  );
}

export default App;
