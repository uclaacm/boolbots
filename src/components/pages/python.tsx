import '../../styles/python.scss';
import BooleanDropdown from '../shared/booleanDropdown';
import {Color, lineOfCode}  from  '../shared/typings';

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
          <div>
            {code.map((lineOfCode1) => (
              <div key={code.indexOf(lineOfCode1)}>
                {lineOfCode1.map((bitOfCode) =>
                  Object.entries(bitOfCode).map(([text, color]) => {
                    return <span className={color} key={text}>{text}</span>;
                  }),
                )}
                <br/>
              </div>
            ))}
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