import "./navbar.styles.css";
import { PiTooth } from "react-icons/pi";
import { CgMenuRight } from "react-icons/cg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { flipCardAnimnation } from "..";
// import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";


export const NavBar = () => {
  const menuRef = useRef(null);
  const logoRef = useRef(null);
  const btnContainerRef = useRef(null);

  useEffect(() => {

    const menu = menuRef.current;
    const logo = logoRef.current;
    const btnContainer = btnContainerRef.current;

    const tl = gsap.timeline({
      defaults: { opacity: 1, y: "-90%", ease: "power3.out" },
      onComplete: () => {
        // Enable body scrolling when all animations are done
        // enableBodyScroll(bodyElement);
      },
    });

    // Animation for menu, logo, and btnContainer
    tl.fromTo(menu, { y: "-100%" }, { opacity: 1, y: "0%", duration: 1 }, 0);
    tl.fromTo(logo, { y: "-100%" }, { opacity: 1, y: "0%", duration: 1 }, 0);
    tl.fromTo(
      btnContainer,
      { y: "-100%" },
      { opacity: 1, y: "0%", duration: 1 },
      0
    );

    // Additional animation for the logo
    // tl.to(logo, { display: 'block' }); // Show the logo initially

    // Animation for the logo icon and text
    tl.fromTo(
      ".icon",
      { opacity: 1, x: "100%", y: "0%" }, // Initial state for the icon
      { opacity: 1, x: "0%", y: "0%", duration: 1, zIndex: 2 },
      "+=0.5" // Start the text animation after 0.5 seconds
    );

    tl.fromTo(
      ".logo_text",
      { opacity: 0, x: "-100%", y: "0%" }, // Initial state for the text
      { opacity: 1, x: "0%", y: "0%", duration: 1 },
      "-=0.5" // Overlap with the icon animation
    );

    // Run the FlipCard animation after the NavBar animation completes
    tl.eventCallback("onComplete", () => {
      // You can customize the delay before running the FlipCard animation
      gsap.delayedCall(0.5, () => {
        flipCardAnimnation(); // Call the FlipCard component or its animation function here
      });
    });

    return () => {
      // Cleanup or interrupt the animation if needed
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
