import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
/*--components--*/
import Overview from "./components/Overview";
import Queue from "./components/Queue";
import PriorityQueue from "./components/PriorityQueue";
import Stack from "./components/Stack";
import LinkedList from "./components/LinkedList";
import Graph from "./components/Graph";
import Tree from "./components/Tree";
import BinaryTree from "./components/BinaryTree";
import Sorting from "./components/Sorting";
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
          <NavLink exact to="/priority-queue" activeClassName="active">Priority Queue</NavLink>
          <NavLink exact to="/stack" activeClassName="active">Stack</NavLink>
          <NavLink exact to="/linked-list" activeClassName="active">LinkedList</NavLink>
          <NavLink exact to="/graph" activeClassName="active">Graph</NavLink>
          <NavLink exact to="/tree" activeClassName="active">Tree</NavLink>
          <NavLink exact to="/binary-tree" activeClassName="active">Binary Tree</NavLink>
          <NavLink exact to="/sorting" activeClassName="active">Sorting</NavLink>
        </nav>
      </header>
      <Route render={(props) => {
        const { location } = props;
        return (
          <Switch location={location}>
            <Route exact path="/" component={Overview} />
            <Route exact path="/queue" component={Queue} />
            <Route exact path="/priority-queue" component={PriorityQueue} />
            <Route exact path="/stack" component={Stack} />
            <Route exact path="/linked-list" component={LinkedList} />
            <Route exact path="/graph" component={Graph} />
            <Route exact path="/tree" component={Tree} />
            <Route exact path="/binary-tree" component={BinaryTree} />
            <Route exact path="/sorting" component={Sorting} />
          </Switch>
        )}
      }
      />
      </div>
    </Router>
  );
}

export default App;
