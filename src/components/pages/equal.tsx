import React from 'react';
import Reward, {RewardElement} from 'react-rewards';
import '../../styles/equal.scss';


import robot1 from '../../assets/robots/pg3/robot1pg3.svg';
import robot2 from '../../assets/robots/pg3/robot2pg3.svg';
import robot3 from '../../assets/robots/pg3/robot3pg3.svg';
import robot4 from '../../assets/robots/pg3/robot4pg3.svg';
import {lineOfCode, CodeFormat}  from  '../shared/codeFormat';
import {Color} from '../shared/constants';

interface EqualProps {
  onCorrect: () => void;
}

function Equal(props:EqualProps): JSX.Element {

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

  const ref1 = React.useRef<RewardElement>(null);
  const ref2 = React.useRef<RewardElement>(null);
  const ref3 = React.useRef<RewardElement>(null);
  const ref4 = React.useRef<RewardElement>(null);

  function robots(i: number) {
    switch(i) {
      case 1:
        ref1.current?.punishMe();
        break;
      case 2:
        ref2.current?.punishMe();
        break;
      case 3:
        ref3.current?.punishMe();
        break;
      default:
        ref4.current?.rewardMe();
        props.onCorrect();
        break;
    }
  }

  return (
    <div className="frame">
      <div id="equal" className='robot-layout'>
        <div className="code-and-output">
          <div id='code'>
            <CodeFormat code={code}/>
            <div id="arrows">
              <div>-----------------------------------------------------▶</div>
              <div>-----------------------------------------------------▶</div>
              <div>-----------------------------------------------------▶</div>
            </div>
          </div>
          <div id="output">
            <div className="output-items">
              <div>True</div>
              <div>False</div>
              <div>True</div>
            </div>

          </div>
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
              <img className="robot-image" src={robot2} alt="red robot, circle head, with mouth, 1 antenna, 2 arms, 3 buttons"></img>
            </button>
          </Reward>
          <Reward ref={ref3} type='confetti'>
            <button className="robot-button" onClick={() => robots(3)}>
              <img className="robot-image" src={robot3} alt="green robot, circle head, with mouth, 2 antenna, 2 arms, 3 buttons"></img>
            </button>
          </Reward>
          <Reward ref={ref4} type='confetti'>
            <button className="robot-button" onClick={() => robots(4)}>
              <img className="robot-image" src={robot4} alt="green robot, circle head, no mouth, 0 antenna, 2 arms, 3 buttons"></img>
            </button>
          </Reward>
        </div>
      </div>
    </div>

  );
}

export default Equal;

