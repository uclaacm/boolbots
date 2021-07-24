import { GeneralDropdown } from './generalDropdown';

interface OperatorDropdownProps {
  onChange: (option: string) => void;
  position: string;
  options: string[];
}

export function OperatorDropdown(props:OperatorDropdownProps):JSX.Element  {
  return(
    <div className='dropWrapperOp'>
      <GeneralDropdown
        options={props.options}
        onChange={(option) => props.onChange(option)}
        position={props.position}
        className={'dropOp'}/>
    </div>
  );}


