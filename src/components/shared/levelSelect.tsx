
import { useState, useEffect } from 'react';
import '../../styles/levelSelect.scss';
import Dropdown, { Option } from 'react-dropdown';
import { BsCaretLeftFill, BsCaretRightFill, BsFillCaretUpFill, BsFillCaretDownFill } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';

interface LevelSelectProps {
  pageOptions: string[];
  currentPage: string;
  isCompleted: boolean;
  disableNextButton: () => void;
}

function LevelSelect(props:LevelSelectProps): JSX.Element | null {
  const { pageOptions, currentPage, isCompleted, disableNextButton } = props;

  const [index, setIndex] = useState(pageOptions.indexOf(currentPage));

  const [highestPage, setHighestPage] = useState(-1);

  const [reloadTime, setReloadTime] = useState(Date.now());

  const history = useHistory();

  const createDropDownItems = ():Option[] => {
    return pageOptions.slice(0, highestPage + 1).map((item, itemIndex) => {
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
    const num = Number(localStorage.getItem('highestPage'));
    setHighestPage(num || -1);
  }, []);

  useEffect(() => {
    if (isCompleted && pageOptions.indexOf(currentPage) >= highestPage) {
      setHighestPage(pageOptions.indexOf(currentPage) + 1);
      localStorage.setItem('highestPage', highestPage.toString());
    }
    setIndex(pageOptions.indexOf(currentPage));
  }, [isCompleted]);

  useEffect(() => {
    if (index == highestPage) {
      disableNextButton();
    }
    if (index >= pageOptions.length) {
      setIndex(pageOptions.length - 1);
    }
    if (index < 0) {
      setIndex(0);
    }
    const newPage = pageOptions[index];
    history.push(newPage);
  }, [index]);

  if (highestPage != -1) {
    localStorage.setItem('highestPage', highestPage.toString());
    return (
      <div className="dropdown-container">
        {pageOptions.indexOf(currentPage) > 0 && <BsCaretLeftFill onClick={() => setIndex(index - 1)} className="select-arrow left-arrow" size={20} />}
        <Dropdown
          options={createDropDownItems()}
          baseClassName="dropdown"
          onChange={(option) => onLevelChange(pageOptions.indexOf(option.value))}
          value={{label: <span key={reloadTime} >Level {pageOptions.indexOf(currentPage) + 1} of 9</span>,
            value: pageOptions[index]}}
          arrowClosed={<BsFillCaretUpFill size={10} />}
          arrowOpen={<BsFillCaretDownFill size={10} />}
        />
        {pageOptions.indexOf(currentPage) < highestPage && <BsCaretRightFill onClick={() => setIndex(index + 1)} className="select-arrow right-arrow" size={20} />}
      </div>
    );
  } else {
    return null;
  }

}
export default LevelSelect;