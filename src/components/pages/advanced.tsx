import robot1 from '../../assets/robots/pg6/robot1pg6.svg';
import robot2 from '../../assets/robots/pg6/robot2pg6.svg';
import robot3 from '../../assets/robots/pg6/robot3pg6.svg';
import robot4 from '../../assets/robots/pg6/robot4pg6.svg';
import {lineOfCode, CodeFormat}  from  '../shared/codeFormat';
import {Color} from '../shared/constants';

function Advanced(): JSX.Element {

  const code: lineOfCode[] = [
    [
      { ['print']: Color.Orange },
      { ['(num_of_antennas']: Color.White },
      { [' > ']: Color.Orange },
      { ['1']: Color.Blue },
      { [' or ']: Color.Orange },
      { ['has_mouth)']: Color.White },
    ],
    [
      { ['print']: Color.Orange },
      { ['(color']: Color.White },
      { [' == ']: Color.Orange },
      { ['"red"']: Color.White },
      { [' and ']: Color.Orange },
      { ['color']: Color.White },
      { [' != ']: Color.Orange },
      { ['"blue")']: Color.White },
    ],
    [
      { ['print']: Color.Orange },
      { ['(']: Color.White },
      { ['not ']: Color.Orange },
      { ['head_shape']: Color.White },
      { [' == ']: Color.Orange },
      { ['"circle")']: Color.White },
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
          <img src={robot1} alt="red robot, circle head, with mouth, 1 antenna, 2 arms, 1 button"></img>
          <img src={robot2} alt="red robot, square head, with mouth, 1 antenna, 0 arms, 1 button"></img>
          <img src={robot3} alt="blue robot, triangle head, with mouth, 2 antenna, 2 arms, 3 buttons"></img>
          <img src={robot4} alt="green robot, circle head, with mouth, 2 antenna, 2 arms, 1 button"></img>
        </div>
      </div>
    </div>

  );
}

export default Advanced;

