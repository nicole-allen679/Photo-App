import React from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import Hello from './components/Hello'
import Photos from './components/Photos'
import './App.global.css'

export default function App() {
  return (
    <Router>
      <nav>
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/photo" exact>Photo</NavLink>
      </nav>
      <Switch>
        <Route path="/photo" component={Photos} />
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
