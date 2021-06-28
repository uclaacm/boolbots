import { useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import logo_light from '../../assets/teachla-logo-light.svg';
import wordmark from '../../assets/teachla-wordmark-light.svg';
import LevelSelect from './levelSelect';
import '../../styles/sidebar.scss';

function Sidebar(): JSX.Element {
  const pages = ['/','/variable','/equal','/comparison','/boolean','/advanced','/output','/python','/experiment'];
  const desc = [
    'landing page',
    'variable page',
    'equal page',
    'comparison page',
    'boolean op page',
    'advanced statements page',
    'output match',
    'just python page',
    'experiment page',
  ];
  const location = useLocation();
  const current = location.pathname;
  return (
    <div id="sidebar">
      <div id='header'>
        <div id='title'>
          BoolBots
        </div>
        <img id='logo' src={logo}/>
      </div>
      <div id='desc'>
        {desc[pages.indexOf(current)]}
      </div>
      <LevelSelect/>
      <a id='teachlaLink' href="https://teachla.uclaacm.com/">
        <img className="linkImg" src={logo_light} alt="ACM TeachLA's logo"/>
        <img className="linkImg" src={wordmark} alt="acm.teachLA"/>
      </a>
    </div>
  );
}

export default Sidebar;
