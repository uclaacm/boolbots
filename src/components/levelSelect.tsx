import '../styles/levelSelect.scss';
import {useState} from 'react';
import Dropdown, { Option } from 'react-dropdown';
import { BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs';


function LevelSelect(): JSX.Element {

  const pages = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const [currentPage, setCurrentPage] = useState(6 /* change this to current page once set up */);


  const createDropDownItems = ():Option[] => {
    return pages.map((item) => {
      return  ({
        label: <div>{item}</div>,
        value: item,
      });
    });
  };

  const pageArray = createDropDownItems();

  const onPageChange = (currentOption:Option):void => {
    // add functionality here to change the current page
    // the selected option is passed in automatically
    setCurrentPage(parseInt(currentOption.value));
  };

  return (
    <div className="dropdown-container">
      <Dropdown
        options={pageArray}
        baseClassName="dropdown"
        onChange={onPageChange}
        value={pageArray[currentPage - 1]} // the page the dropdown starts off displaying
        arrowClosed={<BsArrowUpShort/>}
        arrowOpen={<BsArrowDownShort/>}
      />
    </div>

  );

}
export default LevelSelect;