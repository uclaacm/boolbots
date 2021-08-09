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

  const refList = [React.useRef<RewardElement>(null), React.useRef<RewardElement>(null),
    React.useRef<RewardElement>(null), React.useRef<RewardElement>(null)];
  const robotImages = [robot1, robot2, robot3, robot4];
  const altTexts = ['blue robot, circle head, no mouth, 0 antenna, 2 arms, 3 buttons',
    'red robot, circle head, with mouth, 1 antenna, 2 arms, 3 buttons',
    'green robot, circle head, with mouth, 2 antenna, 2 arms, 3 buttons',
    'green robot, circle head, no mouth, 0 antenna, 2 arms, 3 buttons'];

  function robots(index: number) {
    switch(index) {
      case 3:
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
          {robotImages.map((robot, index) => (
            <div key='robot${index}'>
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

export default Equal;

