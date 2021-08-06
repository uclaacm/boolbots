import '../../styles/experiment.scss';
import { useState, useEffect } from 'react';
import { BooleanDropdown } from '../shared/booleanDropdown';
import {lineOfCode, CodeFormat}  from  '../shared/codeFormat';
import {Color} from '../shared/constants';
import { OperatorDropdown } from '../shared/operatorDropdown';


function Experiment(): JSX.Element {

  const code: lineOfCode[] = [[
    { ['num_of_antennas']: Color.White },
    { [' = ']: Color.Orange },
  ]];
  const code2: lineOfCode[] = [[
    { ['has_arms']: Color.White },
    { [' = ']: Color.Orange },
  ]];
  const code3: lineOfCode[] = [[
    { ['has_mouth']: Color.White },
    { [' = ']: Color.Orange },
  ]];
  const code4p1: lineOfCode[] = [[
    { ['color']: Color.White },
    { [' = ']: Color.Orange },
    { ['"']: Color.Green },
  ]];
  const code4p2: lineOfCode[] = [[
    { ['"']: Color.Green },
  ]];
  const code5: lineOfCode[] = [[]];
  const code6p1: lineOfCode[] = [[
    { ['print']: Color.Orange },
    { ['(num_of_antennas ']: Color.White },
  ]];
  const code6p2: lineOfCode[] = [[
    {[')']: Color.White},
  ]];
  const code7p1: lineOfCode[] = [[
    { ['print']: Color.Orange },
    { ['(color ']: Color.White },
  ]];
  const code7p2: lineOfCode[] = [[
    {['"']: Color.Green},
  ]];
  const code7p3: lineOfCode[] = [[
    {['"']: Color.Green},
    {[')']: Color.White},
  ]];
  const code8p1: lineOfCode[] = [[
    { ['print']: Color.Orange },
    { ['(has_arms ']: Color.White },
  ]];
  const code8p2: lineOfCode[] = [[
    { [' has_mouth)']: Color.White },
  ]];


  const [outputValues, setOutputValues] = useState({
    top: true,
    middle: false,
    bottom: false,
  });
  const [antennas, setAntennas] = useState(0);
  const [antennaOp, setAntennaOp] = useState('!=');
  const [antennaCompare, setAntennaCompare] = useState(0);
  const [arms, setArms] = useState(false);
  const [mouth, setMouth] = useState(false);
  const [boolOp, setBoolOp] = useState('or');
  const [color, setColor] = useState('blue');
  const [colorOp, setColorOp] = useState('==');
  const [colorCompare, setColorCompare] = useState('red');

  useEffect(() => {
    const newOutput = {top: true,middle: false,bottom: false};
    switch (antennaOp) {
      case '>=':
        newOutput.top = antennas >= antennaCompare;
        break;
      case '>':
        newOutput.top = antennas > antennaCompare;
        break;
      case '<':
        newOutput.top = antennas < antennaCompare;
        break;
      case '<=':
        newOutput.top = antennas <= antennaCompare;
        break;
      case '==':
        newOutput.top = antennas === antennaCompare;
        break;
      case '!=':
        newOutput.top = antennas !== antennaCompare;
        break;
    }
    switch (colorOp) {
      case '==':
        newOutput.middle = color === colorCompare;
        break;
      case '!=':
        newOutput.middle = color !== colorCompare;
        break;
    }
    switch (boolOp) {
      case 'and':
        newOutput.bottom = arms && mouth;
        break;
      case 'or':
        newOutput.bottom = arms || mouth;
        break;
    }
    setOutputValues(newOutput);
  },[antennas,antennaOp,antennaCompare,arms,mouth,boolOp,color,colorOp,colorCompare]);

  return (
    <div className='frame'>
      <div id='experiment'>
        <h1>Your turn to try!</h1>
        <div id='problem' className='code-and-output'>
          <div id='code'>
            <div id="experiment-code">
              <div className='line'>
                <CodeFormat code={code}/>
                <input className='input + num' placeholder='0' type='number' onChange={(val) => setAntennas(Number(val.target.value))}/>
              </div>
              <div className='line'>
                <CodeFormat code={code2}/>
                <BooleanDropdown onChange={(val) => setArms(val === 'True')} position={'top'}/>
              </div>
              <div className='line'>
                <CodeFormat code={code3}/>
                <BooleanDropdown onChange={(val) => setMouth(val === 'True')} position={'middle'}/>
              </div>
              <div className='line'>
                <CodeFormat code={code4p1}/>
                <input className='input + string' placeholder='blue' onChange={(val) => setColor(val.target.value === '' ? 'blue' : val.target.value)}/>
                <CodeFormat code={code4p2}/>
              </div>
              <div className='line'>
                <CodeFormat code={code5}/>
              </div>
              <div className='line'>
                <CodeFormat code={code6p1}/>
                <OperatorDropdown onChange={(val) => setAntennaOp(val)} options={['>=','>','<','<=','==','!=']} position={'top'}/>
                <input className='input + num' placeholder='0' onChange={(val) => setAntennaCompare(Number(val.target.value))}/>
                <CodeFormat code={code6p2}/>
              </div>
              <div className='line'>
                <CodeFormat code={code7p1}/>
                <OperatorDropdown onChange={(val) => setColorOp(val)} options={['!=','==']} position={'middle'}/>
                <CodeFormat code={code7p2}/>
                <input className='input + string' placeholder='red'onChange={(val) => setColorCompare(val.target.value === '' ? 'red' : val.target.value)}/>
                <CodeFormat code={code7p3}/>
              </div>
              <div className='line'>
                <CodeFormat code={code8p1}/>
                <OperatorDropdown onChange={(val) => setBoolOp(val)} options={['and','or']} position={'bottom'}/>
                <CodeFormat code={code8p2}/>
              </div>
            </div>
          </div>
          <div id='output'>
            <div className="output-items">
              <div>{outputValues.top ? 'True' : 'False'}</div>
              <div>{outputValues.middle ? 'True' : 'False'}</div>
              <div>{outputValues.bottom ? 'True' : 'False'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiment;