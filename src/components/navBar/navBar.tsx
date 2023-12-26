import "./navbar.styles.css";
import { PiTooth } from "react-icons/pi";
import { CgMenuRight } from "react-icons/cg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { flipCardAnimnation } from "..";


export const NavBar = () => {
  const menuRef = useRef(null);
  const logoRef = useRef(null);
  const btnContainerRef = useRef(null);

  useEffect(() => {

    const tl = gsap.timeline({
      defaults: { opacity: 1, y: "-90%", ease: "power3.out" },
      onComplete: () => {},
      delay: 5,
    });
    
    tl.fromTo("._nav", { y: "-100%" }, { opacity: 1, y: 0, duration: 0.5 }, "+=0.1");

    tl.fromTo(
      ".icon",
      { opacity: 1, x: "100%", y: "0%" },
      { opacity: 1, x: "0%", y: "0%", duration: 1, zIndex: 2 },
      "-=0.25"
    );

    tl.fromTo(
      ".logo_text",
      { opacity: 0, x: "-100%", y: "0%" },
      { opacity: 1, x: "0%", y: "0%", duration: 1 },
      "-=0.25"
    );

    tl.eventCallback("onComplete", () => {
      gsap.delayedCall(0.5, () => {
        flipCardAnimnation();
      });
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <nav className="_nav">
      <div className="container">
        <div className="menu_container d-flex align-items-center" ref={menuRef}>
          <button className="btn _btn btn_secondary">Menu</button>
          <button className="btn _btn btn_secondary menu_icon">
            <CgMenuRight />
          </button>
        </div>

        <div className="logo_container" ref={logoRef}>
          <div className="icon">
            <PiTooth />
          </div>
          <div className="logo_text">DENTYTECH</div>
        </div>

        <div className="btn_container" ref={btnContainerRef}>
          <button className="btn _btn btn_secondary">Log in</button>
          <button className="btn _btn btn_primary">Sign up</button>
        </div>
      </div>
    </nav>
  );
};
