
import {useState, useEffect} from 'react';
import '../../styles/levelSelect.scss';
import Dropdown, { Option } from 'react-dropdown';
import { BsCaretLeftFill , BsCaretRightFill, BsFillCaretUpFill, BsFillCaretDownFill } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';

interface LevelSelectProps {
  pageOptions: string[];
  currentPage: string;
  isCompleted: boolean;
}

function LevelSelect(props:LevelSelectProps): JSX.Element | null {
  const { pageOptions, currentPage, isCompleted } = props;

  const [index, setIndex] = useState(pageOptions.indexOf(currentPage));

  const [pagesCompleted, setPagesCompleted] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  // don't need a highest page prop, can just compute as the last index of 1 in pagesCompleted

  const [reloadTime, setReloadTime] = useState(Date.now());

  const history = useHistory();

  const createDropDownItems = ():Option[] => {
    return pageOptions.slice(0, pagesCompleted.lastIndexOf(1) + 2).map((item, itemIndex) => {
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
    if (isCompleted) {
      const newArray:number[] = [...pagesCompleted];
      newArray[pageOptions.indexOf(currentPage)] = 1;
      setPagesCompleted(newArray);
    }
  }, [isCompleted]);

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

  if (pagesCompleted.lastIndexOf(1)  + 1 >= 1) {
    return (
      <div className="dropdown-container">
        {pageOptions.indexOf(currentPage) > 0 && <BsCaretLeftFill onClick={() => setIndex(index - 1)} className="select-arrow" size={30} /> }
        <Dropdown
          options={createDropDownItems()}
          baseClassName="dropdown"
          onChange={(option) => onLevelChange(pageOptions.indexOf(option.value))}
          value={{
            label: <span key={reloadTime} >Level { pageOptions.indexOf(currentPage) + 1} of 9</span>,
            value: pageOptions[index]}}
          arrowClosed={<BsFillCaretUpFill size={10} />}
          arrowOpen={<BsFillCaretDownFill size={10} />}
        />
        { pageOptions.indexOf(currentPage) < pagesCompleted.lastIndexOf(1) + 1 && <BsCaretRightFill onClick={() => setIndex(index + 1)} className="select-arrow" size={30} /> }
      </div>
    );
  } else {
    return null;
  }

}
export default LevelSelect;