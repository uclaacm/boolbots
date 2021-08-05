import robot1 from '../../assets/robots/pg5/robot1pg5.svg';
import robot2 from '../../assets/robots/pg5/robot2pg5.svg';
import robot3 from '../../assets/robots/pg5/robot3pg5.svg';
import robot4 from '../../assets/robots/pg5/robot4pg5.svg';
import {lineOfCode, CodeFormat}  from  '../shared/codeFormat';
import {Color} from '../shared/constants';

interface BooleanProps {
  onCorrect: () => void;
}

function Boolean(props:BooleanProps): JSX.Element {

  const code: lineOfCode[] = [
    [
      { ['print']: Color.Orange },
      { ['(num_buttons']: Color.White },
      { [' < ']: Color.Orange },
      { ['2']: Color.Blue },
      { [' and ']: Color.Orange },
      { ['has_arms)']: Color.White },
    ],
    [
      { ['print']: Color.Orange },
      { ['(color']: Color.White },
      { [' == ']: Color.Orange },
      { ['"red"']: Color.Green },
      { [' or ']: Color.Orange },
      { ['num_of_antennas']: Color.White },
      { [' > ']: Color.Orange },
      { ['1']: Color.Blue },
      { [')']: Color.White },
    ],
    [
      { ['print']: Color.Orange },
      { ['(']: Color.White },
      { ['not']: Color.Orange },
      { [' has_mouth)']: Color.White },
    ],
  ];

  return (
    <div className="frame">
      <div id="boolean" className='robot-layout'>
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
          <button className="robot-button" onClick={props.onCorrect}>
            <img className="robot-image" src={robot1} alt="green robot, circle head, no mouth, 0 antenna, 2 arms, 1 button"></img>
          </button>
          <button className="robot-button">
            <img className="robot-image" src={robot2} alt="red robot, square head, with mouth, 1 antenna, 0 arms, 1 button"></img>
          </button>
          <button className="robot-button">
            <img className="robot-image" src={robot3} alt="blue robot, circle head, no mouth, 1 antenna, 0 arms, 2 buttons"></img>
          </button>
          <button className="robot-button">
            <img className="robot-image" src={robot4} alt="red robot, circle head, with mouth, 2 antenna, 2 arms, 1 button"></img>
          </button>
        </div>
      </div>
    </div>

  );
}

export default Boolean;

