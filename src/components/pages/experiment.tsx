import '../../styles/experiment.scss';
import {lineOfCode, CodeFormat}  from  '../shared/codeFormat';
import {Color} from '../shared/constants';
import Sidebar from '../shared/sidebar';


function Experiment(): JSX.Element {

  const code: lineOfCode[] = [
    [
      { ['num_of_antennas']: Color.White },
      { [' = ']: Color.Orange },
      // { ['2']: Color.Blue },
    ],
    [
      { ['has_arms']: Color.White },
      { [' = ']: Color.Orange },
      // { ['True']: Color.Blue },
    ],
    [
      { ['has_ears']: Color.White },
      { [' = ']: Color.Orange },
      { ['False']: Color.Blue },
    ],
    [
      { ['color']: Color.White },
      { [' = ']: Color.Orange },
      { ['"']: Color.Green },
      // { ['"white"']: Color.Green },
      { ['"']: Color.Green },
    ],
    [],
    [
      { ['print']: Color.Orange },
      { ['(']: Color.White },

      { [')']: Color.White },
    ],
    [
      { ['print']: Color.Orange },
      { ['(']: Color.White },
      { [')']: Color.White },
    ],
    [
      { ['print']: Color.Orange },
      { ['(color']: Color.White },

      { [')']: Color.White},
    ],
  ];
  return (
    <div className='frame'>
      <div id='experiment'>
        <h1>Your turn to try!</h1>
        <div id='problem' className='code-and-output'>
          <div id='code'>
            <CodeFormat code={code}/>
          </div>
          <div id='output'>
            <Sidebar/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiment;