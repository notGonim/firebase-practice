import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Header } from './components/Header';
import { Home } from './pages/Home';

function App() {
  return (
    <Router>

      <Header />
      <Home />
    </Router>
  );
}

export default App;
