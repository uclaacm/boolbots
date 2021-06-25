import Dropdown from 'react-dropdown';
import '../../styles/booleanDropdown.scss';

const options = ['True', 'False'];

interface BooleanDropdownProps {
  change: () => void;
}

function BooleanDropdown(props:BooleanDropdownProps):JSX.Element  {
  return <Dropdown className='drop' options={options} value='False' arrowClassName='arrow' onChange={props.change}/>;
}

export default BooleanDropdown;