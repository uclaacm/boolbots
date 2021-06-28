import { useState } from 'react';
import '../../styles/python.scss';
import {BooleanDropdown, Position} from '../shared/booleanDropdown';
import {lineOfCode, CodeFormat}  from  '../shared/codeFormat';
import {Color} from '../shared/constants';

interface PythonProps {
  enable: () => void;
}

function Python(props:PythonProps): JSX.Element {

  const code: lineOfCode[] = [
    [
      { ['num_of_antennas']: Color.White },
      { [' = ']: Color.Orange },
      { ['2']: Color.Blue },
    ],
    [
      { ['has_arms']: Color.White },
      { [' = ']: Color.Orange },
      { ['True']: Color.Blue },
    ],
    [
      { ['has_ears']: Color.White },
      { [' = ']: Color.Orange },
      { ['False']: Color.Blue },
    ],
    [
      { ['color']: Color.White },
      { [' = ']: Color.Orange },
      { ['"white"']: Color.Blue },
    ],
    [],
    [
      { ['print']: Color.Orange },
      { ['(num_of_antennas']: Color.White },
      { [' > ']: Color.Orange },
      { ['3']: Color.Blue },
      { [' or ']: Color.Orange },
      { ['has_arms)']: Color.White },
    ],
    [
      { ['print']: Color.Orange },
      { ['(']: Color.White },
      { ['not']: Color.Orange },
      { [' has_ears)']: Color.White },
    ],
    [
      { ['print']: Color.Orange },
      { ['(color']: Color.White },
      { [' != ']: Color.Orange },
      { ['"red"']: Color.Blue},
      { [')']: Color.White},
    ],
  ];

  const [top, setTop] = useState(false);
  const [middle, setMiddle] = useState(false);
  const [bottom,setBottom] = useState(false);

  const selected = (value:string, pos:Position) => {
    const val = value === 'True';
    switch (pos) {
      case Position.Top:
        setTop(val);
        if (val && middle && !bottom) {props.enable();}
        break;
      case Position.Middle:
        setMiddle(val);
        if (top && val && !bottom) {props.enable();}
        break;
      case Position.Bottom:
        setBottom(val);
        if (top && middle && !val) {props.enable();}
    }
  }

  return (
    <div id='python'>
      <h1>Match the output to the code:</h1>
      <div id='problem'>
        <div id='code'>
          <CodeFormat code={code}/>
        </div>
        <div id='output'>
          <div id='dropdowns'>
            <BooleanDropdown onChange={(value) => selected(value,Position.Top)} position={Position.Top}/>
            <BooleanDropdown onChange={(value) => selected(value,Position.Middle)} position={Position.Middle}/>
            <BooleanDropdown onChange={(value) => selected(value,Position.Bottom)} position={Position.Bottom}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Python;