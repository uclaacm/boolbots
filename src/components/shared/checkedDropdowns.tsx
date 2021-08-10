import '../../styles/checkedDropdowns.scss';
import { useState, useEffect } from 'react';
import { BooleanDropdown } from './booleanDropdown';

interface CheckedDropdownsProps {
  onCorrect: () => void;
  topCorrect: boolean;
  middleCorrect: boolean;
  bottomCorrect: boolean;
}

export function CheckedDropdowns(props:CheckedDropdownsProps):JSX.Element  {

  const [dropValues, setDropValues] = useState({
    top: !props.topCorrect,
    middle: !props.middleCorrect,
    bottom: !props.bottomCorrect,
  });

  const selected = (value:string, pos:string) => {
    const val = value === 'True';
    const newDropValues = {...dropValues, [pos]: val};
    setDropValues(newDropValues);
  };

  useEffect(() => {
    if (dropValues.top === props.topCorrect
      && dropValues.middle === props.middleCorrect
      && dropValues.bottom === props.bottomCorrect) {
      props.onCorrect();
    }
  },[dropValues]);

  return (
    <div id='dropdowns'>
      {Object.keys(dropValues).map((dropdown) => (
        <BooleanDropdown key={dropdown} onChange={(value) => selected(value,dropdown)} position={dropdown}/>
      ))}
    </div>
  );}
