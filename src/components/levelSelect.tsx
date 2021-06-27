import '../styles/levelSelect.scss';
import {useState, useEffect} from 'react';
import Dropdown, { Option } from 'react-dropdown';
import { BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs';
import {
  useHistory,
} from 'react-router-dom';

interface LevelSelectProps {
  pages: string[];
  locationPathName: string;
}

function LevelSelect(props:LevelSelectProps): JSX.Element {
  const { pages, locationPathName } = props;

  const createDropDownItems = ():Option[] => {
    return pages.map((item, index) => {
      return  ({
        label: <div>{index + 1}</div>,
        value: item,
      });
    });
  };

  const pageArray = createDropDownItems();

  const [currentDisplay, setCurrentDisplay] = useState<Option>();

  const updateCurrentDisplay = (index:number) => {
    const optionCopy = pageArray[index];
    optionCopy.label = <div>Level {index + 1} of 9</div>;
    setCurrentDisplay(optionCopy);
  };

  const history = useHistory(); // ReactRouter history element, used to change the route by pagechange function

  const onPageChange = (currentOption:Option):void => {
    history.push((currentOption.value));
  };

  // double use case, causes levelselect to change when location is changed via level select and via next button
  useEffect(() => {
    updateCurrentDisplay(pages.indexOf(locationPathName));
  }, [locationPathName]);

  return (
    <div className="dropdown-container">
      <Dropdown
        options={pageArray}
        baseClassName="dropdown"
        onChange={onPageChange}
        value={currentDisplay} // the page the dropdown starts off displaying
        arrowClosed={<BsArrowUpShort/>}
        arrowOpen={<BsArrowDownShort/>}
      />
    </div>

  );

}
export default LevelSelect;