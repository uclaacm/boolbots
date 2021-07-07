import { useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import LevelSelect from './levelSelect';
import '../../styles/sidebar.scss';

function Sidebar(): JSX.Element {
  const pages = ['/','/variable','/equal','/comparison','/boolean','/advanced','/output','/python','/experiment'];
  const desc = [
    'Welcome to BoolBots! We will be going over what a boolean is in Python. A boolean is a data type that can take one of two values. Usually these values are True or False. We use booleans if we want to represent something with two distinct states.',
    'In Python, we assign a variable to be a boolean by setting it equal to either True or False, or a boolean expression which we will go over in a bit.',
    'Here we can see some print statements. These print out the evaluation of the expression inside them. If the expression is just a boolean variable, as with the second statement, it will simply print out the value of that variable. The expressions with the != and == operators compare the values on the left and right of the operator. != checks if they are not equal and == checks if they are. Thus the first expression is saying "num_of_antennas is not equal to 1" which we can see is true.',
    'Comparison operators are used to create expressions that evaluate to a boolean by comparing the two sides of the expression in some way depending on the operator. There are 6 comparison operators in Python: !=, ==, <, <=, >, and >=. These coorespond to "not equal", "equal", "less than", "less than or equal to", "greater than", and "greater than or equal to" respectively.',
    'Boolean operators (also called logical operators) act on boolean values or expressions to return a boolean value. The and operator returns true if both expressions are true and false otherwise. the or operator returns true if either expression is true and only returns false if both are false. And the not operator returns the opposite of the expression it is with.',
    'We\'ve covered the basics of booleans! Now let\'s combine them to make some more complex statements.',
    'Now try to select the correct output for each of the statements given the robot shown below.',
    'Let\'s repeat that last exercise, but now instead of matching the characteristics of the robot we have assigned the variables values in the code.',
    'Congratulations, you have finished the BoolBots Learning Lab! You can change the boxes in the code to assign your own values to the variables and statements to see how they are.',
  ];
  const location = useLocation();
  const current = location.pathname;
  return (
    <div id="sidebar">
      <div id='header'>
        <div id='title'>
          BoolBots
        </div>
        <img id='logo' src={logo}/>
      </div>
      <div id='desc'>
        {desc[pages.indexOf(current)]}
      </div>
      <LevelSelect
        pageOptions={pages}
        currentPage={current}
      />
    </div>
  );
}

export default Sidebar;
