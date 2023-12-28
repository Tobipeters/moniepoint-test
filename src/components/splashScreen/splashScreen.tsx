import "./splash.styles.css";
import { PiArrowRightLight, PiTooth } from "react-icons/pi";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";


export const SplashScreen = () => {
  const itemsContainerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { opacity: 1, ease: "Power1.inOut" },
      delay: 0.5,
      onStart: () => {
        disableBodyScroll(document.body);
      },
      onComplete: () => {
        enableBodyScroll(document.body);
      },
    });

    if (!itemsContainerRef.current) return;

    const textItem1 = itemsContainerRef.current.querySelector(
      ".icon_text_item_1 .item_text"
    );
    const textItem2 = itemsContainerRef.current.querySelector(
      ".icon_text_item_2 .item_text"
    );

    tl.fromTo(
      textItem1,
      { opacity: 0, width: "fit-content", duration: 0.5 },
      { width: 0, opacity: 0, display: "none", duration: 0.5 },
      "+=0.25"
    );
    tl.fromTo(
      textItem2,
      { opacity: 0, width: "fit-content", duration: 0.5 },
      { width: 0, opacity: 0, display: "none", duration: 0.5 },
      "-=0.25"
    );

    tl.fromTo(".icon_item_1", { y: -26 }, { rotate: 90, y: 0, duration: 0.5 });
    tl.fromTo(
      ".icon_text_item_1",
      { y: -26, width: "fit-content" },
      { rotate: 90, y: 0, duration: 0.5 },
      "-=0.25"
    );

    tl.fromTo(".icon_item_2", { y: 26 }, { y: 0, duration: 0.5 });
    tl.fromTo(
      ".icon_text_item_2",
      { rotate: 180, y: 26, width: "fit-content" },
      { rotate: 270, y: 0, duration: 0.5 },
      "-=0.25"
    );

    tl.to(".icon_item_1", { rotate: 0, duration: 0.1 });
    tl.to(".icon_text_item_1", { rotate: 0, duration: 0.1 });

    tl.to(".icon_item_1", { x: 78, duration: 0.1 });
    tl.to(".icon_text_item_1", { x: 26, duration: 0.1 });
    tl.to(".icon_text_item_2", { x: -26, duration: 0.1 });
    tl.to(".icon_item_2", { x: -78, duration: 0.05, zIndex: 3 });

    tl.to(".icon_item_1", { opacity: 0, duration: 0.25 });
    tl.to(".icon_text_item_1", { opacity: 0, duration: 0.25 });
    tl.to(".icon_text_item_2", { opacity: 0, duration: 0.25 });
    tl.to(".icon_item_2", { y: -26, duration: 0.25, zIndex: 3 });

    tl.fromTo(
      ".logo_text_item",
      { opacity: 0, bottom: "40%" },
      { opacity: 1, bottom: "44%", duration: 0.25 }
    );

    tl.to(".splash_section", { opacity: 0, display: "none", duration: 0.25 });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="splash_section">
      <div className="items_container" ref={itemsContainerRef as any}>
        <div className="icon_item_1">
          <PiArrowRightLight />
        </div>
        <div className="icon_text_item_1">
          <span className="item_text">Dental</span>
          <PiArrowRightLight />
        </div>
        <div className="icon_text_item_2">
          <span className="item_text">Assistance</span>
          <PiArrowRightLight />
        </div>
        <div className="icon_item_2">
          <PiTooth />
        </div>

        <div className="logo_text_item">DentyTech</div>
      </div>
    </section>
  );
};
