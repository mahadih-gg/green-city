import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/HomePage/Header/Header';
import Home from './components/HomePage/Home/Home';


function App() {
  return (
    <div>
      <Router>
        <Header></Header>

        <Switch>

          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path=''>

          </Route>

          <Route path=''>

          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
