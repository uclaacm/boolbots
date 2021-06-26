import Dropdown from 'react-dropdown';
import '../../styles/booleanDropdown.scss';

const options = ['True', 'False'];

export enum Position {
  Top = 'top',
  Middle = 'middle',
  Bottom = 'bottom'
}

interface BooleanDropdownProps {
  change: () => void;
  position: Position;
}

export function BooleanDropdown(props:BooleanDropdownProps):JSX.Element  {
  return <Dropdown className={'drop '+props.position} options={options} value='False' arrowClassName='arrow' onChange={props.change}/>;
}
