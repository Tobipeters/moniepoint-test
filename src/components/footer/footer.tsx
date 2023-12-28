import "./footer.styles.css";
import {
  PiYoutubeLogo,
  PiInstagramLogo,
  PiFacebookLogo,
  PiArrowDownLight,
} from "react-icons/pi";
import React, { useEffect } from "react";
import gsap from "gsap";

interface IProps {
  position?: "left" | "between" | "right";
  showGoDown?: boolean;
  scrollRef?: React.RefObject<HTMLDivElement>;
}

export const Footer: React.FC<IProps> = ({
  position = "between",
  showGoDown = true,
  scrollRef,
}) => {
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "Power3.inOut", duration: 0.5 },
    });

    tl.fromTo(
      "._footer",
      { y: "50vh", x: 0, opacity: 0 },
      { y: 0, x: 0, opacity: 1 }
    );

    return () => {
      tl.kill();
    };
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="_footer">
      <div className="container">
        <div className="text_container fadeUp">Your Smile, Our Passion</div>

        {position === "between" && showGoDown && (
          <div
            className="down_icon fadeUp"
            onClick={() =>
              scrollToSection(scrollRef as React.RefObject<HTMLDivElement>)
            }
          >
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

        {position !== "between" && <div style={{ width: "250px" }}>&nbsp;</div>}
      </div>
    </footer>
  );
};
