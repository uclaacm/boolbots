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

  const refList = [React.useRef<RewardElement>(null), React.useRef<RewardElement>(null),
    React.useRef<RewardElement>(null), React.useRef<RewardElement>(null)];
  const robotImages = [robot1, robot2, robot3, robot4];
  const altTexts = ['blue robot, circle head, no mouth, 0 antenna, 2 arms, 3 buttons',
    'green robot, circle head, with mouth, 2 antenna, 2 arms, 3 buttons',
    'blue robot, circle head, no mouth, 1 antenna, 2 arms, 3 buttons',
    'blue robot, circle head, with mouth, 0 antenna, 2 arms, 3 buttons'];

  function robots(index: number) {
    switch(index) {
      case 0:
        refList[index].current?.rewardMe();
        props.onCorrect();
        break;
      default:
        refList[index].current?.punishMe();
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
          {robotImages.map((robot, index) => (
            <div key='robot${index}' className="robot-container">
              <Reward ref={refList[index]} type="confetti" config={{angle: 70, lifetime: 125}}>
                <button className="robot-button" onClick={() => robots(index)}>
                  <img className="robot-image" src={robot} alt={altTexts[index]}></img>
                </button>
              </Reward>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Variable;

