import robot1 from '../../assets/robots/pg1/robot1pg1.svg';
import robot2 from '../../assets/robots/pg1/robot2pg1.svg';
import robot3 from '../../assets/robots/pg1/robot3pg1.svg';
import robot4 from '../../assets/robots/pg1/robot4pg1.svg';
import {lineOfCode, CodeFormat}  from  '../shared/codeFormat';
import {Color} from '../shared/constants';
import Reward, {RewardElement} from "react-rewards";
import React from "react";

; //this was a different solution I tried to set ref={rewardRef} but it also didn't work

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

  const rewardRef = React.useRef<RewardElement>(null)

  function punish() { //I added the this: any to try to fix an error, idk if it works correctly
    rewardRef.current?.punishMe();
  }

  /*function getRef(this: any, ref: any) //I tried to make this to replace whats in the {} after ref=
  { 
    this.reward = ref;
    return this.reward;
  }*/

  return (
    <div className="frame">
      <div id="landing" className='robot-layout'>
        <div id='code'>
          <CodeFormat code={code}/>
        </div>
        <h1>Select the matching robot:</h1>
        <div className="robots">
          <Reward ref={rewardRef} type='confetti'>
            <button className="robot-button" onClick={punish}>
              <img className="robot-image" src={robot1} alt="green robot, circle head, no mouth, 0 antenna, 2 arms, 3 buttons"></img>
            </button>
          </Reward>
          <button className="robot-button">
            <img className="robot-image" src={robot2} alt="red robot, circle head, with mouth, 2 antenna, 2 arms, 3 buttons"></img>
          </button>
          <button className="robot-button" onClick={props.onCorrect}>
            <img className="robot-image" src={robot3} alt="green robot, circle head, with mouth, 2 antenna, 2 arms, 3 buttons"></img>
          </button>
          <button className="robot-button">
            <img className="robot-image" src={robot4} alt="blue robot, circle head, with mouth, 0 antenna, 2 arms, 3 buttons"></img>
          </button>
        </div>
      </div>
    </div>

  );
}

export default Landing;