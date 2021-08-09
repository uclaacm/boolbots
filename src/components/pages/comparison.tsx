import React from 'react';
import Reward, {RewardElement} from 'react-rewards';
import robot1 from '../../assets/robots/pg4/robot1pg4.svg';
import robot2 from '../../assets/robots/pg4/robot2pg4.svg';
import robot3 from '../../assets/robots/pg4/robot3pg4.svg';
import robot4 from '../../assets/robots/pg4/robot4pg4.svg';
import {lineOfCode, CodeFormat}  from  '../shared/codeFormat';
import {Color} from '../shared/constants';

interface ComparisonProps {
  onCorrect: () => void;
}

function Comparison(props:ComparisonProps): JSX.Element {

  const code: lineOfCode[] = [
    [
      { ['print']: Color.Orange },
      { ['(num_of_antennas']: Color.White },
      { [' < ']: Color.Orange },
      { ['2']: Color.Blue },
      { [')']: Color.White },
    ],
    [
      { ['print']: Color.Orange },
      { ['(num_of_buttons']: Color.White },
      { [' >= ']: Color.Orange },
      { ['2']: Color.Blue },
      { [')']: Color.White },
    ],
    [
      { ['print']: Color.Orange },
      { ['(color']: Color.White },
      { [' != ']: Color.Orange },
      { ['"green"']: Color.Green },
      { [')']: Color.White },
    ],
  ];

  const refList = [React.useRef<RewardElement>(null), React.useRef<RewardElement>(null),
    React.useRef<RewardElement>(null), React.useRef<RewardElement>(null)];
  const robotImages = [robot1, robot2, robot3, robot4];
  const altTexts = ['blue robot, triangle head, with mouth, 2 antenna, 2 arms, 3 buttons',
    'red robot, circle head, with mouth, 1 antenna, 2 arms, 1 button',
    'red robot, circle head, no mouth, 2 antenna, 2 arms, 2 buttons',
    'blue robot, circle head, no mouth, 1 antenna, 0 arms, 2 buttons'];

  function robots(index: number) {
    switch(index) {
      case 1:
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
      <div id="comparison" className='robot-layout'>
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

export default Comparison;

