import './assets/WestwoodSans-Regular.ttf';
import './styles/app.scss'; 

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
//Remember to import tsx files for pages!
//Import components that are inside pages in page tsx files themselves
import Sidebar from './components/sidebar';
import NextButton from './components/nextButton';
import Landing from './pages/landing';
import Variable from './pages/variable';

function App(): JSX.Element {
  return (
    <Router>
      <div id="app">
        <Sidebar/>
        <div id = "contents">
          <Switch>
            <Route exact path="/"> <Landing/> </Route>
            <Route path="/variable"> <Variable/> </Route>
          </Switch>
        </div>
        <NextButton/>
      </div>
    </Router>
  );
}

export default App;
