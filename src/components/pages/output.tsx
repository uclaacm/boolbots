import { useState, useEffect } from 'react';
import robot from '../../assets/robots/robotpg7.svg';

import {BooleanDropdown} from '../shared/booleanDropdown';
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

  const [dropValues, setDropValues] = useState({
    top: false,
    middle: false,
    bottom: false,
  });

  const selected = (value:string, pos:string) => {
    const val = value === 'True';
    const newDropValues = {...dropValues, [pos]: val};
    setDropValues(newDropValues);
  };

  useEffect(() => {
    if (dropValues.top && dropValues.middle && !dropValues.bottom) {
      props.onCorrect();
    }
  },[dropValues]);

  return (
    <div className="frame">
      <div id="output_frame" className='robot-layout'>
        <div className="code-and-output">
          <div id='code'>
            <CodeFormat code={code}/>
          </div>
          <div id="output">
            <div id='dropdowns'>
              {Object.keys(dropValues).map((dropdown) => (
                <BooleanDropdown key={dropdown} onChange={(value) => selected(value,dropdown)} position={dropdown}/>
              ))}
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

