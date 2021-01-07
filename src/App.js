import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
/*--components--*/
import Overview from "./components/Overview";
import Queue from "./components/Queue";
/*--styles--*/
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header" style={{height:'12rem', minHeight:"auto"}}>
        <h1 style={{marginBottom:'.5rem'}}>Data Structures</h1>
        <p style={{marginTop:'.5rem'}}>Play with Data Structures in JS</p>
        <nav>
          <NavLink exact to="/" activeClassName="active">Overview</NavLink>
          <NavLink exact to="/queue" activeClassName="active">Queue</NavLink>
        </nav>
      </header>
      <Route render={(props) => {
        const { location } = props;
        return (
          <Switch location={location}>
            <Route exact path="/" component={Overview} />
            <Route exact path="/queue" component={Queue} />
          </Switch>
        )}
      }
      />
      </div>
    </Router>
  );
}

export default App;
