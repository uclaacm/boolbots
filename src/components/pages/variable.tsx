import robot1 from '../../assets/robots/pg2/robot1pg2.svg';
import robot2 from '../../assets/robots/pg2/robot2pg2.svg';
import robot3 from '../../assets/robots/pg2/robot3pg2.svg';
import robot4 from '../../assets/robots/pg2/robot4pg2.svg';
import {lineOfCode, CodeFormat}  from  '../shared/codeFormat';
import {Color} from '../shared/constants';

function Variable(): JSX.Element {

  const code: lineOfCode[] = [
    [
      { ['num_of_antennas']: Color.White },
      { [' = ']: Color.Orange },
      { ['0']: Color.Blue },
    ],
    [
      { ['has_mouth']: Color.White },
      { [' = ']: Color.Orange },
      { ['False']: Color.Blue }    ],
    [
      { ['color']: Color.White },
      { [' = ']: Color.Orange },
      { ['"blue"']: Color.White }    ],
  ];

  return (
    <div className="frame">
      <div id="landing" className='robot-layout'>
        <div id='code'>
          <CodeFormat code={code}/>
        </div>
        <h1>Select the matching robot:</h1>
        <div className="robots">
          <img src={robot1} alt="blue robot, circle head, no mouth, 0 antenna, 2 arms, 3 buttons"></img>
          <img src={robot2} alt="green robot, circle head, with mouth, 2 antenna, 2 arms, 3 buttons"></img>
          <img src={robot3} alt="blue robot, circle head, no mouth, 1 antenna, 2 arms, 3 buttons"></img>
          <img src={robot4} alt="blue robot, circle head, with mouth, 0 antenna, 2 arms, 3 buttons"></img>
        </div>
      </div>
    </div>

  );
}

export default Variable;

