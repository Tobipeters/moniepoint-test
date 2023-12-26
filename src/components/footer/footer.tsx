import "./footer.styles.css";
import {
  PiYoutubeLogo,
  PiInstagramLogo,
  PiFacebookLogo,
  PiArrowDownLight,
} from "react-icons/pi";
import React from "react";

interface IProps {
  position?: "left" | "between" | "right";
}

export const Footer: React.FC<IProps> = ({ position = "between" }) => {
  return (
    <footer className="_footer">
      <div className="container">
        <div className="text_container fadeUp">Your Smile, Our Passion</div>

        {position === "between" && (
          <div className="down_icon fadeUp">
            <PiArrowDownLight />
          </div>
        )}

        <div className="icon_container fadeUp">
          <div className="footer_icons">
            <PiInstagramLogo />
            <PiYoutubeLogo />
            <PiFacebookLogo />
          </div>

          <div className="footer_text">Best Start Up of 2023</div>
        </div>

        {position !== "between" && <div>&nbsp;</div>}
      </div>
    </footer>
  );
};
