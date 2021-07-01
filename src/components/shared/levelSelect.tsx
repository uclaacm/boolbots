
import {useState, useEffect} from 'react';
import '../../styles/levelSelect.scss';
import Dropdown, { Option } from 'react-dropdown';
import { BsCaretLeftFill , BsCaretRightFill, BsFillCaretUpFill, BsFillCaretDownFill } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';

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

  const [currIndex, setcurrIndex] = useState(pages.indexOf(locationPathName));

  const history = useHistory();

  const onPageChange = (currentOption:Option):void => {
    const newIndex = pages.indexOf((currentOption.value));

    if (newIndex == currIndex) {
      /*
 if the index wasn't actually changed, force component to rerender so
 that "value" prop to dropdown still remains as the label on the dropdown
*/
      history.push(pages[currIndex]);
    } else {
      setcurrIndex(newIndex);
    }
  };

  const setIndex = (newIndex:number) => {
    if (newIndex >= 0 && newIndex <= 8) {
      setcurrIndex(newIndex);
    }
  };

  useEffect(() => {
    const newPage = pages[currIndex];
    history.push(newPage);
  }, [currIndex]);


  return (
    <div className="dropdown-container">
      <BsCaretLeftFill onClick={() => setIndex(currIndex - 1)} className="left-arrow" size={30} />
      <Dropdown
        options={createDropDownItems()}
        baseClassName="dropdown"
        onChange={onPageChange}
        value={{label: <div>Level {currIndex + 1} of 9</div>, value: pages[currIndex]}}
        arrowClosed={<BsFillCaretUpFill size={10} />}
        arrowOpen={<BsFillCaretDownFill size={10} />}
      />
      <BsCaretRightFill onClick={() => setIndex(currIndex + 1)} className="right-arrow" size={30} />
    </div>
  );

}
export default LevelSelect;