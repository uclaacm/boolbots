import '../styles/nextButton.scss';
import {Link, useLocation} from 'react-router-dom';

function NextButton(): JSX.Element {
  let end = false;
  const pages = ['/','/variable','/equal','/comparison','/boolean','/advanced','/output','/python','/experiment'];
  let nextPage = '/variable';
  const location = useLocation();
  const current = location.pathname;
  if (current === '/experiment') {
    end = true;
  } else {
      nextPage = pages[pages.indexOf(current)+1];
  }
  if (end) {
    return (null as any);
  } else {
    return (<Link to={nextPage}  id='nextButton'>next</Link>)
  }
}

export default NextButton;