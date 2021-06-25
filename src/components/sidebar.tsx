import LevelSelect from './levelSelect';
import '../styles/sidebar.scss';

function Sidebar(): JSX.Element {
  return (
    <div id="sidebar">
      <LevelSelect/>
    </div>
  );
}

export default Sidebar;
