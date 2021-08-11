import { GeneralDropdown } from './generalDropdown';
import '../../styles/booleanDropdown.scss';

interface BooleanDropdownProps {
  onChange: (option: string) => void;
  position: string;
}

export function BooleanDropdown(props:BooleanDropdownProps):JSX.Element  {
  return(
    <div className='dropWrapperBool'>
      <GeneralDropdown
        options={['True','False']}
        onChange={(option) => props.onChange(option)}
        position={props.position}
        default={' '}/>
    </div>
  );}

