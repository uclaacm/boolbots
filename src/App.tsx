import './assets/WestwoodSans-Regular.ttf';
import './styles/app.scss';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
//Remember to import tsx files for pages!
//Import components that are inside pages in page tsx files themselves
import NextButton from './components/nextButton';
import Sidebar from './components/sidebar';
import Landing from './pages/landing';
import Python from './pages/python';
import Variable from './pages/variable';

function App(): JSX.Element {
  return (
    <Router>
      <Sidebar/>
      <div id = "contents">
        <Switch>
          <Route exact path="/"> <Landing/> </Route>
          <Route path="/variable"> <Variable/> </Route>
          <Route path="/python"> <Python/> </Route>
        </Switch>
      </div>
      <NextButton/>
    </Router>
  );
}

export default App;
