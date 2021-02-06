import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { auth } from './firebase.utils';
import { UserLoggingIn } from './actions/UserActions';

function App() {

  const dispatch = useDispatch()
  const { user } = useSelector(state => state.user)

  console.log(user)



  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(UserLoggingIn(
          {
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
          }
        ))
      }
    })
  }, [])



  return (
    <Router>
      <Header />
      {!user ?
        (<Home />) :
        (
          <>
            <Switch>
              <Route path="/" exact component={Dashboard} />
            </Switch>
          </>
        )
      }

    </Router>
  );
}

export default App;
