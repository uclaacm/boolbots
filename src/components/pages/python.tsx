import '../../styles/python.scss';
import BooleanDropdown from '../shared/booleanDropdown';

function Python(): JSX.Element {

  const outputAndMatches = {
    num_of_antennas: '2',
    has_arms: 'True',
    has_ears: 'False',
    color: '"white"',
  };

  return (
    <div id='python'>
      <h1>Match the output to the code:</h1>
      <div id='problem'>
        <div id='code'>
          <div>
            {Object.entries(outputAndMatches).map(([output, match]) => (
              <div key={output}>
                <span className='white'>{output}</span>
                <span className='orange'> = </span>
                <span className='blue'>{match}</span>
              </div>
            ))}
            <br/>
            <span className='orange'>print</span><span className='white'>(num_of_antennas </span><span className='orange'>&gt; </span><span className='blue'>3 </span><span className='orange'>or </span><span className='white'>has_arms)</span><br/>
            <span className='orange'>print</span><span className='white'>(</span><span className='orange'>not </span><span className='white'>has_ears)</span><br/>
            <span className='orange'>print</span><span className='white'>(color </span><span className='orange'>!= </span><span className='blue'>&quot;red&quot;</span><span className='white'>)</span><br/>
          </div>
        </div>
        <div id='output'>
          <div>
            {/* TODO: replace change with actual functionality */}
            <BooleanDropdown change={() => void 0}/>
            <BooleanDropdown change={() => void 0}/>
            <BooleanDropdown change={() => void 0}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Python;