import '../styles/python.scss';
import BooleanDropdown from '../components/booleanDropdown';

let i = '';

const select = () => {
  i = 'Test';
};

function Python(): JSX.Element {
  return (
    <div id='python'>
      <h1>Match the output to the code:</h1>
      <div id='problem'>
        <div id='code'>
          <div>
            <span id='w'>num_of_antennas </span><span id='o'>= </span><span id='b'>2</span><br/>
            <span id='w'>has_arms </span><span id='o'>= </span><span id='b'>True</span><br/>
            <span id='w'>has_ears </span><span id='o'>= </span><span id='b'>False</span><br/>
            <span id='w'>color </span><span id='o'>= </span><span id='b'>&quot;white&quot;</span><br/>
            <br/>
            <span id='o'>print</span><span id='w'>(num_of_antennas </span><span id='o'>&gt; </span><span id='b'>3 </span><span id='o'>or </span><span id='w'>has_arms)</span><br/>
            <span id='o'>print</span><span id='w'>(</span><span id='o'>not </span><span id='w'>has_ears)</span><br/>
            <span id='o'>print</span><span id='w'>(color </span><span id='o'>!= </span><span id='b'>&quot;red&quot;</span><span id='w'>)</span><br/>
            <div>{i}</div>
          </div>
        </div>
        <div id='output'>
          <div>
            <BooleanDropdown change={select}/>
            <BooleanDropdown change={select}/>
            <BooleanDropdown change={select}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Python;