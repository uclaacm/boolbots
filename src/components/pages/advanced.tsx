import React from 'react';
import Reward, {RewardElement} from 'react-rewards';
import robot1 from '../../assets/robots/pg6/robot1pg6.svg';
import robot2 from '../../assets/robots/pg6/robot2pg6.svg';
import robot3 from '../../assets/robots/pg6/robot3pg6.svg';
import robot4 from '../../assets/robots/pg6/robot4pg6.svg';
import {lineOfCode, CodeFormat}  from  '../shared/codeFormat';
import {Color} from '../shared/constants';

interface AdvancedProps {
  onCorrect: () => void;
}

function Advanced(props:AdvancedProps): JSX.Element {

  const code: lineOfCode[] = [
    [
      { ['print']: Color.Orange },
      { ['(num_of_antennas']: Color.White },
      { [' > ']: Color.Orange },
      { ['1']: Color.Blue },
      { [' or ']: Color.Orange },
      { ['has_mouth)']: Color.White },
    ],
    [
      { ['print']: Color.Orange },
      { ['(color']: Color.White },
      { [' == ']: Color.Orange },
      { ['"red"']: Color.Green },
      { [' and ']: Color.Orange },
      { ['color']: Color.White },
      { [' != ']: Color.Orange },
      { ['"blue"']: Color.Green },
      { [')']: Color.White },
    ],
    [
      { ['print']: Color.Orange },
      { ['(']: Color.White },
      { ['not ']: Color.Orange },
      { ['head_shape']: Color.White },
      { [' == ']: Color.Orange },
      { ['"circle"']: Color.Green },
      { [')']: Color.White },

    ],
  ];


  const refList = [React.useRef<RewardElement>(null), React.useRef<RewardElement>(null),
    React.useRef<RewardElement>(null), React.useRef<RewardElement>(null)];
  const robotImages = [robot1, robot2, robot3, robot4];

  function robots(index: number) {
    switch(index) {
      case 2:
        refList[2].current?.rewardMe();
        props.onCorrect();
        break;
      default:
        refList[index].current?.punishMe();
        break;
    }
  }

  function getAltText(index: number) {
    switch(index) {
      case 0:
        return 'red robot, circle head, with mouth, 1 antenna, 2 arms, 1 button';
      case 1:
        return 'red robot, square head, with mouth, 1 antenna, 0 arms, 1 button';
      case 2:
        return 'blue robot, triangle head, with mouth, 2 antenna, 2 arms, 3 buttons';
      default:
        return 'green robot, circle head, with mouth, 2 antenna, 2 arms, 1 button';
    }
  }

  return (
    <div className="frame">
      <div id="advanced" className='robot-layout'>
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
            <Reward key='robot${index}' ref={refList[index]} type="confetti" config={{angle: 70, lifetime: 125}}>
              <button className="robot-button" onClick={() => robots(index)}>
                <img className="robot-image" src={robot} alt={getAltText(index)}></img>
              </button>
            </Reward>
          ))}
        </div>
      </div>
    </div>

  );
}

export default Advanced;

