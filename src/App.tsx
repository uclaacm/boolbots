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
import useSound from 'use-sound';
import correctSound from './assets/sounds/correct-sound-effect.mp3';
import Advanced from './components/pages/advanced';
import Boolean from './components/pages/booleanop';
import Comparison from './components/pages/comparison';
import Equal from './components/pages/equal';
import Experiment from './components/pages/experiment';
import Landing from './components/pages/landing';
import Output from './components/pages/output';
import Python from './components/pages/python';
import Variable from './components/pages/variable';
import Footer from './components/shared/footer';
import NextButton from './components/shared/nextButton';
import Sidebar from './components/shared/sidebar';


function App(): JSX.Element {
  const [enabled, setEnabled] = useState(false);

  const [play] = useSound(correctSound);

  const onCorrect = () => {
    play();
    setEnabled(true);
  };

  return (
    <Router>
      <div id="app-container">
        <Sidebar isCompleted={enabled} disableNextButton={() => setEnabled(false)} />
        <div id = "contents">
          <Switch>
            <Route exact path="/"> <Landing onCorrect={onCorrect}/> </Route>
            <Route path="/variable"> <Variable onCorrect={onCorrect}/> </Route>
            <Route path="/equal"> <Equal onCorrect={onCorrect}/> </Route>
            <Route path="/comparison"> <Comparison onCorrect={onCorrect}/> </Route>
            <Route path="/boolean"> <Boolean onCorrect={onCorrect}/> </Route>
            <Route path="/advanced"> <Advanced onCorrect={onCorrect}/> </Route>
            <Route path="/output"> <Output onCorrect={onCorrect}/> </Route>
            <Route path="/python"> <Python onCorrect={onCorrect}/> </Route>
            <Route path="/experiment"> <Experiment/> </Route>
          </Switch>
          <NextButton isEnabled={enabled} onClick={() => setEnabled(false)}/>
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
