
import {useState, useEffect} from 'react';
import '../../styles/levelSelect.scss';
import Dropdown, { Option } from 'react-dropdown';
import { BsCaretLeftFill , BsCaretRightFill, BsFillCaretUpFill, BsFillCaretDownFill } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';

interface LevelSelectProps {
  pageOptions: string[];
  currentPage: string;
}

function LevelSelect(props:LevelSelectProps): JSX.Element {
  const { pageOptions, currentPage } = props;

  const [index, setIndex] = useState(pageOptions.indexOf(currentPage));

  const [reloadTime, setReloadTime] = useState(Date.now());

  const history = useHistory();

  const createDropDownItems = ():Option[] => {
    return pageOptions.map((item, itemIndex) => {
      return  ({
        label: <div>{itemIndex + 1}</div>,
        value: item,
      });
    });
  };

  const onLevelChange = (newIndex:number) => {
    setReloadTime(Date.now());
    setIndex(newIndex);
  };

  useEffect(() => {
    if (index >= pageOptions.length) {
      setIndex(pageOptions.length - 1);
    }
    if (index < 0) {
      setIndex(0);
    }
    const newPage = pageOptions[index];
    history.push(newPage);
  }, [index]);

  return (
    <div className="dropdown-container">
      <BsCaretLeftFill onClick={() => setIndex(index - 1)} className="select-arrow left-arrow" size={20} />
      <Dropdown
        options={createDropDownItems()}
        baseClassName="dropdown"
        onChange={(option) => onLevelChange(pageOptions.indexOf(option.value))}
        value={{label: <span key={reloadTime} >Level {index + 1} of 9</span>, value: pageOptions[index]}}
        arrowClosed={<BsFillCaretUpFill size={10} />}
        arrowOpen={<BsFillCaretDownFill size={10} />}
      />
      <BsCaretRightFill onClick={() => setIndex(index + 1)} className="select-arrow right-arrow" size={20} />
    </div>
  );

}
export default LevelSelect;