import '../../styles/footer.scss';
import FooterTxt from '../../assets/FooterTxt.svg';

function Footer(): JSX.Element {
  return (
    <div id="footer">
      <h3>
        <a href="https://teachla.uclaacm.com" target="_blank" rel="noopener noreferrer"><img id="tla-logo" src={FooterTxt} alt="Made with ❤️ by acm.teachLA"/></a>
      </h3>
    </div>
  );
}

export default Footer;