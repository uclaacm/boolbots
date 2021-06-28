import '../../styles/landing.scss';


import robot from '../../assets/robots/robotpg7.svg';

import {BooleanDropdown, Position} from '../shared/booleanDropdown';
import {lineOfCode, CodeFormat}  from  '../shared/codeFormat';
import {Color} from '../shared/constants';

function Output(): JSX.Element {

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
            <div id='dropdowns'>
              {/* TODO: replace change with actual functionality */}
              <BooleanDropdown onChange={() => void 0} position={Position.Top}/>
              <BooleanDropdown onChange={() => void 0} position={Position.Middle}/>
              <BooleanDropdown onChange={() => void 0} position={Position.Bottom}/>
            </div>

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

