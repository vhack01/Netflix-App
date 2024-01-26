import "../../css/footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__subcontainer">
        <p className="footer__container_p">
          <span>Questions? </span>
          <span>
            Call <i>1-844-505-2993</i>
          </span>
        </p>

        <div className="footer__container__lists">
          <ul className="footer__list footer__grid--2x4">
            <li className="footer__list-item">FAQ</li>
            <li className="footer__list-item">Help Center</li>
            <li className="footer__list-item">Netflix Shop</li>
            <li className="footer__list-item">Terms of Use</li>
            <li className="footer__list-item">Privacy</li>
            <li className="footer__list-item">Cookie Preferences</li>
            <li className="footer__list-item">Corporate Information</li>
            <li className="footer__list-item">
              Do Not Sell or Share My Personal Information
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
