import '../../styles/python.scss';
import { CheckedDropdowns } from '../shared/checkedDropdowns';
import {lineOfCode, CodeFormat}  from  '../shared/codeFormat';
import {Color} from '../shared/constants';

interface PythonProps {
  onCorrect: () => void;
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
      { ['has_mouth']: Color.White },
      { [' = ']: Color.Orange },
      { ['False']: Color.Blue },
    ],
    [
      { ['color']: Color.White },
      { [' = ']: Color.Orange },
      { ['"white"']: Color.Green },
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
      { [' has_mouth)']: Color.White },
    ],
    [
      { ['print']: Color.Orange },
      { ['(color']: Color.White },
      { [' != ']: Color.Orange },
      { ['"red"']: Color.Green},
      { [')']: Color.White},
    ],
  ];
  return (
    <div className='frame'>
      <div id='python'>
        <h1>Match the output to the code:</h1>
        <div id='problem' className='code-and-output'>
          <div id='code'>
            <CodeFormat code={code}/>
          </div>
          <div id='output'>
            <CheckedDropdowns onCorrect={props.onCorrect} topCorrect={true} middleCorrect={true} bottomCorrect={true}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Python;
