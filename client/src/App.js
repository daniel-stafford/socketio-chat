import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Chat from './pages/Chat';
import Welcome from './pages/Welcome';

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Welcome} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
}
