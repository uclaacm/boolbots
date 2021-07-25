import robot from '../../assets/robots/robotpg7.svg';

import { CheckedDropdowns } from '../shared/checkedDropdowns';
import {lineOfCode, CodeFormat}  from  '../shared/codeFormat';
import {Color} from '../shared/constants';

interface OutputProps {
  onCorrect: () => void;
}

function Output(props:OutputProps): JSX.Element {

  const code: lineOfCode[] = [
    [
      { ['print']: Color.Orange },
      { ['(num_of_antennas']: Color.White },
      { [' != ']: Color.Orange },
      { ['1']: Color.Blue },
      { [')']: Color.White },
    ],
    [
      { ['print']: Color.Orange },
      { ['(has_mouth)']: Color.White },
    ],
    [
      { ['print']: Color.Orange },
      { ['(color']: Color.White },
      { [' == ']: Color.Orange },
      { ['"green"']: Color.Green },
      { [')']: Color.White },
    ],
  ];

  return (
    <div className="frame">
      <div id="output_frame" className='robot-layout'>
        <div className="code-and-output">
          <div id='code'>
            <CodeFormat code={code}/>
          </div>
          <div id="output">
            <CheckedDropdowns onCorrect={props.onCorrect} topCorrect={true} middleCorrect={true} bottomCorrect={false}/>
          </div>
        </div>

        <h1>Match the output to the robot:</h1>
        <div className="robots">
          <img src={robot} alt="red robot, circle head, no mouth, 2 antenna, 2 arms, 2 buttons"></img>
        </div>
      </div>
    </div>

  );
}

export default Output;

