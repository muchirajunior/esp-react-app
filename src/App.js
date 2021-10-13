import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Create from './pages/create';
import Home from './pages/home';
import Project from './pages/project';
import Projects from './pages/projects';

function App() {
  return(
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/create' component={Create} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/project/:id' component={Project} />
      </Switch>
    </Router>
  );
}

export default App;
