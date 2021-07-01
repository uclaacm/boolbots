import robot1 from '../../assets/robots/pg4/robot1pg4.svg';
import robot2 from '../../assets/robots/pg4/robot2pg4.svg';
import robot3 from '../../assets/robots/pg4/robot3pg4.svg';
import robot4 from '../../assets/robots/pg4/robot4pg4.svg';
import {lineOfCode, CodeFormat}  from  '../shared/codeFormat';
import {Color} from '../shared/constants';

function Comparison(): JSX.Element {

  const code: lineOfCode[] = [
    [
      { ['print']: Color.Orange },
      { ['(num_of_antennas']: Color.White },
      { [' < ']: Color.Orange },
      { ['2']: Color.Blue },
      { [')']: Color.White },
    ],
    [
      { ['print']: Color.Orange },
      { ['(num_of_buttons']: Color.White },
      { [' >= ']: Color.Orange },
      { ['2']: Color.Blue },
      { [')']: Color.White },
    ],
    [
      { ['print']: Color.Orange },
      { ['(color']: Color.White },
      { [' != ']: Color.Orange },
      { ['"green")']: Color.White },
    ],
  ];

  return (
    <div className="frame">
      <div id="landing" className='robot-layout'>
        <div className="code-and-output">
          <div id='code'>
            <CodeFormat code={code}/>
          </div>
          <div id="output">
            <div className="output-items">
              <div>True</div>
              <div>False</div>
              <div>True</div>
            </div>

          </div>
        </div>

        <h1>Select the matching robot:</h1>
        <div className="robots">
          <img src={robot1} alt="blue robot, triangle head, with mouth, 2 antenna, 2 arms, 3 buttons"></img>
          <img src={robot2} alt="red robot, circle head, with mouth, 1 antenna, 2 arms, 1 buttons"></img>
          <img src={robot3} alt="red robot, circle head, no mouth, 2 antenna, 2 arms, 2 buttons"></img>
          <img src={robot4} alt="blue robot, circle head, no mouth, 1 antenna, 0 arms, 2 buttons"></img>
        </div>
      </div>
    </div>

  );
}

export default Comparison;

