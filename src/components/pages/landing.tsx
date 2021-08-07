import React from 'react';
import Reward, {RewardElement} from 'react-rewards';
import robot1 from '../../assets/robots/pg1/robot1pg1.svg';
import robot2 from '../../assets/robots/pg1/robot2pg1.svg';
import robot3 from '../../assets/robots/pg1/robot3pg1.svg';
import robot4 from '../../assets/robots/pg1/robot4pg1.svg';
import {lineOfCode, CodeFormat}  from  '../shared/codeFormat';
import {Color} from '../shared/constants';


interface LandingProps {
  onCorrect: () => void;
}

function Landing(props:LandingProps): JSX.Element {

  const code: lineOfCode[] = [
    [
      { ['This robot has 2 antennas.']: Color.White },
    ],
    [
      { ['This robot has a mouth.']: Color.White },
    ],
    [
      { ['This robot is green.']: Color.White },
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
        return 'green robot, circle head, no mouth, 0 antenna, 2 arms, 3 buttons';
      case 1:
        return 'red robot, circle head, with mouth, 2 antenna, 2 arms, 3 buttons';
      case 2:
        return 'green robot, circle head, with mouth, 2 antenna, 2 arms, 3 buttons';
      default:
        return 'blue robot, circle head, with mouth, 0 antenna, 2 arms, 3 buttons';
    }
  }


  return (
    <div className="frame">
      <div id="landing" className='robot-layout'>
        <div id='code'>
          <CodeFormat code={code}/>
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

export default Landing;