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
import Landing from './components/pages/landing';
import Python from './components/pages/python';
import Variable from './components/pages/variable';
import NextButton from './components/shared/nextButton';
import Sidebar from './components/shared/sidebar';

function App(): JSX.Element {
  const [enabled, setEnabled] = useState(false);
  const enable = () => {setEnabled(true);};
  const disable = () => {setEnabled(false);};
  return (
    <Router>
      <Sidebar/>
      <div id = "contents">
        <Switch>
          <Route exact path="/"> <Landing/> </Route>
          <Route path="/variable"> <Variable/> </Route>
          <Route path="/python"> <Python enable={enable}/> </Route>
        </Switch>
      </div>
      <NextButton isEnabled={enabled} disable={disable}/>
    </Router>
  );
}

export default App;
