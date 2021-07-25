import './assets/WestwoodSans-Regular.ttf';
import './styles/app.scss';
import { useState } from 'react';
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
import Experiment from './components/pages/experiment';
import Landing from './components/pages/landing';
import Output from './components/pages/output';
import Python from './components/pages/python';
import Variable from './components/pages/variable';

import NextButton from './components/shared/nextButton';
import Sidebar from './components/shared/sidebar';

function App(): JSX.Element {
  const [enabled, setEnabled] = useState(false);
  return (
    <Router>
      <div id="app-container">
        <Sidebar isCompleted={enabled} disableNextButton={() => setEnabled(false)} />
        <div id = "contents">
          <Switch>
            <Route exact path="/"> <Landing onCorrect={() => setEnabled(true)}/> </Route>
            <Route path="/variable"> <Variable onCorrect={() => setEnabled(true)}/> </Route>
            <Route path="/equal"> <Equal onCorrect={() => setEnabled(true)}/> </Route>
            <Route path="/comparison"> <Comparison onCorrect={() => setEnabled(true)}/> </Route>
            <Route path="/boolean"> <Boolean onCorrect={() => setEnabled(true)}/> </Route>
            <Route path="/advanced"> <Advanced onCorrect={() => setEnabled(true)}/> </Route>
            <Route path="/output"> <Output onCorrect={() => setEnabled(true)}/> </Route>
            <Route path="/python"> <Python onCorrect={() => setEnabled(true)}/> </Route>
            <Route path="/experiment"> <Experiment/> </Route>
          </Switch>
        </div>
      </div>
      <NextButton isEnabled={enabled} onClick={() => setEnabled(false)}/>
    </Router>
  );
}

export default App;
