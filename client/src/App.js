import './Stylesheet/App.css';
import Home from './Components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Signup from './Components/Signup';

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path="/user-signup">
          <Signup />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
