import "./footer.styles.css";
import {
  PiYoutubeLogo,
  PiInstagramLogo,
  PiFacebookLogo,
  PiArrowDownLight,
} from "react-icons/pi";

export const Footer = () => {
  return (
    <footer className="_footer">
      <div className="container">
        <div className="text_container fadeUp">Your Smile, Our Passion</div>

        <div className="down_icon fadeUp">
          <PiArrowDownLight />
        </div>

        <div className="icon_container fadeUp">
          <div className="icons">
            <PiInstagramLogo />
            <PiYoutubeLogo />
            <PiFacebookLogo />
          </div>

          <div className="text">Best Start Up of 2023</div>
        </div>
      </div>
    </footer>
  );
};
