import '../../styles/footer.scss';

function Footer(): JSX.Element {
   return (
      <div id="footer">
         <h3>
               made with ❤️ by
            <a href="https://teachla.uclaacm.com" target="_blank" rel="noopener noreferrer"><img id="tla-logo" src='../../assets/teach-la-logo-full.svg' alt="teach la logo!"/></a>
         </h3>
      </div>
   );
}

export default Footer;