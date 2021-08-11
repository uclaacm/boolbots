import ReactMarkdown from 'react-markdown';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import LevelSelect from './levelSelect';
import '../../styles/sidebar.scss';

interface SidebarProps {
  isCompleted: boolean;
  disableNextButton: () => void;
}

function Sidebar(props: SidebarProps): JSX.Element {

  const pages = ['/','/variable','/equal','/comparison','/boolean','/advanced','/output','/python','/experiment'];
  const desc = [
    'Welcome to BoolBots! Today we\'ll learn about booleans in Python. A **boolean** is a data type that can either be `True` or `False`. We use booleans if we want to represent something with two distinct states! For example, a robot can either be green or not green. Can you find which robot matches the description?',
    'We can assign a variable to be a boolean by setting it equal to `True` or `False`. Here, we made a variable called `has_mouth` and set it equal to `False`. That means the robot does not have a mouth!',
    'Here we see some `print` statements. These print out the results of the expression inside them. The expressions with the `!=` and `==` **operators** compare the values on the left and right of the operator. `!=` checks if they are not equal and `==` checks if they are. So, the first expression is saying "`num_of_antennas` is not equal to 1" which we can see is true!',
    'Comparison operators are used to create expressions that give us a boolean by comparing the left and right sides of the expression. There are 6 comparison operators in Python: `!=`, `==`, `<`, `<=`, `>`, and `>=`. These correspond to "not equal", "equal", "less than", "less than or equal to", "greater than", and "greater than or equal to" respectively.',
    '**Boolean operators** (also called logical operators) are used on booleans or expressions and give us a boolean in return. The `and` operator gives us true if both expressions are true, and false otherwise. The `or` operator gives us true if either expression is true and only gives us false if both are false. The `not` operator gives us the opposite of the expression it is with.',
    'We\'ve covered the basics of booleans! Now let\'s combine them to make some more complex statements.',
    'Now look at the robot shown below. Try to select the correct output for each of the statements to match the robot.',
    'Now instead of matching the characteristics of the robot, we\'ve assigned the variables values in the code. Can you find the correct output?',
    'Congratulations, you have finished the BoolBots Learning Lab! You can change the code to assign your own values to the variables and statements. Check out how the output changes!',
  ];
  const location = useLocation();
  const current = location.pathname;

  const { isCompleted, disableNextButton } = props;

  return (
    <div id="sidebar">
      <div id="header-and-description">
        <div id='header'>
          <div id='title'>
            BoolBots
          </div>
          <img id='logo' src={logo}/>
        </div>
        <div id='description'>
          <ReactMarkdown>
            {desc[pages.indexOf(current)]}
          </ReactMarkdown>
        </div>
      </div>
      <LevelSelect
        pageOptions={pages}
        currentPage={current}
        isCompleted={isCompleted}
        disableNextButton={disableNextButton}
      />
    </div>
  );
}

export default Sidebar;
