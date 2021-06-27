import '../styles/levelSelect.scss';
import {useState, useEffect} from 'react';
import Dropdown, { Option } from 'react-dropdown';
import { BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs';
import {
  useHistory,
} from 'react-router-dom';
/*import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle
} from 'react-icons/io'
*/
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

  const history = useHistory();

  let lastPage = locationPathName;
  const onPageChange = (currentOption:Option):void => {
    // if the same option was selected, still update the display but don't route anywhere
    if (lastPage == currentOption.value) {
      updateCurrentDisplay(pages.indexOf(lastPage));
    } else {
      lastPage = currentOption.value;
      history.push(currentOption.value);
    }
  };

  // need this so that the levelSelect refreshes its display when location changes via next button as well
  useEffect(() => {
    updateCurrentDisplay(pages.indexOf(locationPathName));
  }, [locationPathName]);

  //const leftArrow = (<IoMdArrowDropleftCircle/>);
  //const rightArrow = (<IoMdArrowDroprightCircle/>);

  return (
    <div className="dropdown-container">
      <Dropdown
        options={pageArray}
        baseClassName="dropdown"
        onChange={onPageChange}
        value={currentDisplay}
        arrowClosed={<BsArrowUpShort/>}
        arrowOpen={<BsArrowDownShort/>}
      />
    </div>
  );

}
export default LevelSelect;