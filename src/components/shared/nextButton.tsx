import '../../styles/nextButton.scss';
import {Link, useLocation} from 'react-router-dom';

interface NextButtonProps {
  isEnabled: Boolean;
  disable: () => void;
}

function NextButton(props:NextButtonProps): JSX.Element {
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
    return (<div></div>);
  } else {
    return (
      props.isEnabled ?
        <Link to={nextPage} className='nextButton' id='enabled'onClick={props.disable} >next</Link>
        :<Link to='' className='nextButton' onClick={(e) => e.preventDefault()} >next</Link>
    );
  }
}

export default NextButton;
