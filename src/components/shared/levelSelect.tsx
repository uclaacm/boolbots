
import {useState, useEffect} from 'react';
import '../../styles/levelSelect.scss';
import Dropdown, { Option } from 'react-dropdown';
import { BsCaretLeftFill , BsCaretRightFill, BsFillCaretUpFill, BsFillCaretDownFill } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';

interface LevelSelectProps {
  pageOptions: string[];
  currentPage: string;
  highestPage: number;
}

function LevelSelect(props:LevelSelectProps): JSX.Element | null {
  const { pageOptions, currentPage, highestPage } = props;

  const [index, setIndex] = useState(pageOptions.indexOf(currentPage));

  const [reloadTime, setReloadTime] = useState(Date.now());

  const history = useHistory();

  const createDropDownItems = ():Option[] => {
    return pageOptions.slice(0, highestPage).map((item, itemIndex) => {
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

  if (highestPage > 1) {
    return (
      <div className="dropdown-container">
        {pageOptions.indexOf(currentPage) > 0 && <BsCaretLeftFill onClick={() => setIndex(index - 1)} className="select-arrow" size={30} /> }
        <Dropdown
          options={createDropDownItems()}
          baseClassName="dropdown"
          onChange={(option) => onLevelChange(pageOptions.indexOf(option.value))}
          value={{label: <span key={reloadTime} >Level {index + 1} of 9</span>, value: pageOptions[index]}}
          arrowClosed={<BsFillCaretUpFill size={10} />}
          arrowOpen={<BsFillCaretDownFill size={10} />}
        />
        { pageOptions.indexOf(currentPage) + 1 < highestPage && <BsCaretRightFill onClick={() => setIndex(index + 1)} className="select-arrow" size={30} /> }
      </div>
    );
  } else {
    return null;
  }

}
export default LevelSelect;