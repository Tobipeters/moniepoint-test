// import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./flip.styles.css";
import { PiHandTap, PiGitFork, PiUserFocus, PiGearSix } from "react-icons/pi";
import BgImg1 from "../../assets/card-img-1.jpeg";
import BgImg2 from "../../assets/card-img-2.webp";
import BgImg3 from "../../assets/card-img-3.avif";
import BgImg4 from "../../assets/card-img-4.jpeg";

export const flipCardAnimnation = () => {
  const elementsToAnimate = document.querySelectorAll(".card");

  const tl = gsap.timeline();

  elementsToAnimate.forEach((card, index) => {
    tl.to(card, {
      duration: 0.15,
      rotate:
        index === 0
          ? -12
          : index === 1
          ? -20
          : index === 2
          ? -28
          : index === 3
          ? -30
          : -10,
      ease: "power3.out",
    });

    tl.to({}, { duration: 0.05 });

    tl.to(card, {
      duration: 1,
      y: "-100vh",
      ease: "power3.out",
    });

    if (index < elementsToAnimate.length - 1) {
      tl.to({}, { duration: 0.5 });
    }
  });
};

export const FlipCard = () => {
  const allCards = [
    {
      tag_name: "Advanced Technology",
      tag_icon: <PiGearSix />,
      bgImg: BgImg1,
    },
    {
      tag_name: "Convenience",
      tag_icon: <PiHandTap />,
      bgImg: BgImg2,
    },
    {
      tag_name: "Modern Solutions",
      tag_icon: <PiGitFork />,
      bgImg: BgImg3,
    },
    {
      tag_name: "Personalized Care",
      tag_icon: <PiUserFocus />,
      bgImg: BgImg4,
    },
  ];

  return (
    <div className="_card_container fadeUp">
      {allCards.map((item, id) => (
        <div
          key={`${id}-${item.tag_name}`}
          className="card"
          style={{ backgroundImage: `url(${item.bgImg})` }}
        >
          <div className="d-flex align-items-end mx-auto tag">
            <div className="tag_icon">{item.tag_icon}</div>
            <div className="tag_text">{item.tag_name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
