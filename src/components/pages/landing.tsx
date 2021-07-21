import robot1 from '../../assets/robots/pg1/robot1pg1.svg';
import robot2 from '../../assets/robots/pg1/robot2pg1.svg';
import robot3 from '../../assets/robots/pg1/robot3pg1.svg';
import robot4 from '../../assets/robots/pg1/robot4pg1.svg';
import {lineOfCode, CodeFormat}  from  '../shared/codeFormat';
import {Color} from '../shared/constants';

interface LandingProps {
  onCorrect: () => void;
}

function Landing(props:LandingProps): JSX.Element {

  const code: lineOfCode[] = [
    [
      { ['This robot has 2 antennas.']: Color.White },
    ],
    [
      { ['This robot has a mouth.']: Color.White },
    ],
    [
      { ['This robot is green.']: Color.White },
    ],
  ];

  return (
    <div className="frame">
      <div id="landing" className='robot-layout'>
        <div id='code'>
          <CodeFormat code={code}/>
        </div>
        <h1>Select the matching robot:</h1>
        <div className="robots">
          <button className="robot-button">
            <img className="robot-image" src={robot1} alt="green robot, circle head, no mouth, 0 antenna, 2 arms, 3 buttons"></img>
          </button>
          <button className="robot-button">
            <img className="robot-image" src={robot2} alt="red robot, circle head, with mouth, 2 antenna, 2 arms, 3 buttons"></img>
          </button>
          <button className="robot-button" onClick={props.onCorrect}>
            <img className="robot-image" src={robot3} alt="green robot, circle head, with mouth, 2 antenna, 2 arms, 3 buttons"></img>
          </button>
          <button className="robot-button">
            <img className="robot-image" src={robot4} alt="blue robot, circle head, with mouth, 0 antenna, 2 arms, 3 buttons"></img>
          </button>
        </div>
      </div>
    </div>

  );
}

export default Landing;