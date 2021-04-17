import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/HomePage/Header/Header';
import Home from './components/HomePage/Home/Home';
import Login from './components/LoginPage/Login/Login';
import { createContext, useState } from 'react';
import Dashboard from './components/DashboardPage/Dashboard/Dashboard';


export const UserContext = createContext()


function App() {

  const [loggedInUser, setLoggedInUser] = useState({})


  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>

        <Switch>

          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/login'>
            <Login></Login>
          </Route>

          <Route path='/dashboard'>
            <Dashboard></Dashboard>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
