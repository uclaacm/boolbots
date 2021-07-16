import Dropdown from 'react-dropdown';
import '../../styles/booleanDropdown.scss';

const options = [
  { value: 'True', label: 'True', className: 'option'},
  { value: 'False', label: 'False', className: 'option second'},
];

interface BooleanDropdownProps {
  onChange: (option: string) => void;
  position: string;
}

export function BooleanDropdown(props:BooleanDropdownProps):JSX.Element  {
  return <Dropdown
    className={'drop '+props.position}
    options={options}
    value='False'
    arrowClosed={<div className='arrow'/>}
    arrowOpen={<div className='arrow flipped'/>}
    onChange={(option) => props.onChange(option.value)}/>;
}
