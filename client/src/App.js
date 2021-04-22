import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import Profile from './pages/Profile';
import Events from './pages/Events';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path = "/events">
          <Events/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
