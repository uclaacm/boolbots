import Dropdown from 'react-dropdown';
import '../../styles/generalDropdown.scss';
import '../../styles/operatorDropdown.scss';

interface GeneralDropdownProps {
  onChange: (option: string) => void;
  options: string[];
  position: string;
  className?: string;
}

export function GeneralDropdown(props:GeneralDropdownProps):JSX.Element  {
  const options: {value:string, label:string, className:string}[] = props.options.map((option) => {
    const opt = {value: option, label: option, className: 'option'};
    if (option === props.options[props.options.length-1]) {
      opt.className = 'option last';
    }
    return opt;
  });

  return (
    <Dropdown
      className={`drop ${props.className ?? ''} ${props.position}`}
      options={options}
      value={props.options[props.options.length-1]}
      arrowClosed={<div className='arrow'/>}
      arrowOpen={<div className='arrow flipped'/>}
      onChange={(option) => props.onChange(option.value)}/>
  );
}
