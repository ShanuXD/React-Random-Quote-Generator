import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import Author from './components/Author';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/:author" component={Author}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
