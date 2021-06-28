import './assets/WestwoodSans-Regular.ttf';
import './styles/app.scss';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
//Remember to import tsx files for pages!
//Import components that are inside pages in page tsx files themselves
import Advanced from './components/pages/advanced';
import Boolean from './components/pages/booleanop';
import Comparison from './components/pages/comparison';
import Equal from './components/pages/equal';
import Landing from './components/pages/landing';
import Output from './components/pages/output';
import Python from './components/pages/python';
import Variable from './components/pages/variable';

import NextButton from './components/shared/nextButton';
import Sidebar from './components/shared/sidebar';

function App(): JSX.Element {
  return (
    <Router>
      <Sidebar/>
      <div id = "contents">
        <Switch>
          <Route exact path="/"> <Landing/> </Route>
          <Route path="/variable"> <Variable/> </Route>
          <Route path="/equal"> <Equal/> </Route>
          <Route path="/comparison"> <Comparison/> </Route>
          <Route path="/boolean"> <Boolean/> </Route>
          <Route path="/advanced"> <Advanced/> </Route>
          <Route path="/output"> <Output/> </Route>
          <Route path="/python"> <Python/> </Route>
        </Switch>
      </div>
      <NextButton/>
    </Router>
  );
}

export default App;
