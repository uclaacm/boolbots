import '../../styles/python.scss';
import {BooleanDropdown, Position} from '../shared/booleanDropdown';
import {lineOfCode, CodeFormat}  from  '../shared/codeFormat';
import {Color} from '../shared/constants';

function Python(): JSX.Element {

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
      { ['"red")']: Color.White},
    ],
  ];

  return (
    <div id='python'>
      <h1>Match the output to the code:</h1>
      <div id='problem'>
        <div id='code'>
          <CodeFormat code={code}/>
        </div>
        <div id='output'>
          <div id='dropdowns'>
            {/* TODO: replace change with actual functionality */}
            <BooleanDropdown onChange={() => void 0} position={Position.Top}/>
            <BooleanDropdown onChange={() => void 0} position={Position.Middle}/>
            <BooleanDropdown onChange={() => void 0} position={Position.Bottom}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Python;