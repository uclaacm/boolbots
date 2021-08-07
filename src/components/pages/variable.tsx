import React from 'react';
import Reward, {RewardElement} from 'react-rewards';
import robot1 from '../../assets/robots/pg2/robot1pg2.svg';
import robot2 from '../../assets/robots/pg2/robot2pg2.svg';
import robot3 from '../../assets/robots/pg2/robot3pg2.svg';
import robot4 from '../../assets/robots/pg2/robot4pg2.svg';
import {lineOfCode, CodeFormat}  from  '../shared/codeFormat';
import {Color} from '../shared/constants';

interface VariableProps {
  onCorrect: () => void;
}

function Variable(props:VariableProps): JSX.Element {

  const code: lineOfCode[] = [
    [
      { ['num_of_antennas']: Color.White },
      { [' = ']: Color.Orange },
      { ['0']: Color.Blue },
    ],
    [
      { ['has_mouth']: Color.White },
      { [' = ']: Color.Orange },
      { ['False']: Color.Blue }    ],
    [
      { ['color']: Color.White },
      { [' = ']: Color.Orange },
      { ['"blue"']: Color.Green }    ],
  ];

  const ref1 = React.useRef<RewardElement>(null);
  const ref2 = React.useRef<RewardElement>(null);
  const ref3 = React.useRef<RewardElement>(null);
  const ref4 = React.useRef<RewardElement>(null);

  function robots(i: number) {
    switch(i) {
      case 1:
        ref1.current?.rewardMe();
        props.onCorrect();
        break;
      case 2:
        ref2.current?.punishMe();
        break;
      case 3:
        ref3.current?.punishMe();
        break;
      default:
        ref4.current?.punishMe();
        break;
    }
  }

  return (
    <div className="frame">
      <div id="variable" className='robot-layout'>
        <div id='code'>
          <CodeFormat code={code}/>
        </div>
        <h1>Select the matching robot:</h1>
        <div className="robots">
          <Reward ref={ref1} type='confetti'>
            <button className="robot-button" onClick={() => robots(1)}>
              <img className="robot-image" src={robot1} alt="blue robot, circle head, no mouth, 0 antenna, 2 arms, 3 buttons"></img>
            </button>
          </Reward>
          <Reward ref={ref2} type='confetti'>
            <button className="robot-button" onClick={() => robots(2)}>
              <img className="robot-image" src={robot2} alt="green robot, circle head, with mouth, 2 antenna, 2 arms, 3 buttons"></img>
            </button>
          </Reward>
          <Reward ref={ref3} type='confetti'>
            <button className="robot-button" onClick={() => robots(3)}>
              <img className="robot-image" src={robot3} alt="blue robot, circle head, no mouth, 1 antenna, 2 arms, 3 buttons"></img>
            </button>
          </Reward>
          <Reward ref={ref4} type='confetti'>
            <button className="robot-button" onClick={() => robots(4)}>
              <img className="robot-image" src={robot4} alt="blue robot, circle head, with mouth, 0 antenna, 2 arms, 3 buttons"></img>
            </button>
          </Reward>
        </div>
      </div>
    </div>
  );
}

export default Variable;

