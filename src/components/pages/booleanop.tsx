import React from 'react';
import Reward, {RewardElement} from 'react-rewards';
import robot1 from '../../assets/robots/pg5/robot1pg5.svg';
import robot2 from '../../assets/robots/pg5/robot2pg5.svg';
import robot3 from '../../assets/robots/pg5/robot3pg5.svg';
import robot4 from '../../assets/robots/pg5/robot4pg5.svg';
import {lineOfCode, CodeFormat}  from  '../shared/codeFormat';
import {Color} from '../shared/constants';

interface BooleanProps {
  onCorrect: () => void;
}

function Boolean(props:BooleanProps): JSX.Element {

  const code: lineOfCode[] = [
    [
      { ['print']: Color.Orange },
      { ['(num_buttons']: Color.White },
      { [' < ']: Color.Orange },
      { ['2']: Color.Blue },
      { [' and ']: Color.Orange },
      { ['has_arms)']: Color.White },
    ],
    [
      { ['print']: Color.Orange },
      { ['(color']: Color.White },
      { [' == ']: Color.Orange },
      { ['"red"']: Color.Green },
      { [' or ']: Color.Orange },
      { ['num_of_antennas']: Color.White },
      { [' > ']: Color.Orange },
      { ['1']: Color.Blue },
      { [')']: Color.White },
    ],
    [
      { ['print']: Color.Orange },
      { ['(']: Color.White },
      { ['not']: Color.Orange },
      { [' has_mouth)']: Color.White },
    ],
  ];

  const refList = [React.useRef<RewardElement>(null), React.useRef<RewardElement>(null),
    React.useRef<RewardElement>(null), React.useRef<RewardElement>(null)];
  const robotImages = [robot1, robot2, robot3, robot4];
  const altTexts = ['green robot, circle head, no mouth, 0 antenna, 2 arms, 1 button',
    'red robot, square head, with mouth, 1 antenna, 0 arms, 1 button',
    'blue robot, circle head, no mouth, 1 antenna, 0 arms, 2 buttons',
    'red robot, circle head, with mouth, 2 antenna, 2 arms, 1 button'];

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
      <div id="boolean" className='robot-layout'>
        <div className="code-and-output">
          <div id='code'>
            <CodeFormat code={code}/>
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

export default Boolean;

