import "./cardTiles.styles.css";
import { PiHeart, PiArrowUpRight } from "react-icons/pi";
import { tilesData } from "../../mock-data";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const CardTiles = () => {
  const cardTilesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { opacity: 1, duration: 0.75, ease: "Power3.inOut" },
      delay: 3
    });

    tl.fromTo(".ct_odd", { y: 0, duration: 1.5 }, { y: -250 }, "+=0.25");
    tl.fromTo(".ct_even", { y: -150, duration: 1.5 }, { y: 100 }, "-=0.25");

    tl.fromTo(".ct_odd", { y: -250, duration: 1.5 }, { y: -100 }, "+=0.1");
    tl.fromTo(".ct_even", { y: 100, duration: 1.5 }, { y: -150 }, "-=0.1");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tl.play();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (cardTilesRef.current) {
      observer.observe(cardTilesRef.current);
    }

    tl.pause();

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="_card_tiles_container" ref={cardTilesRef}>
      {tilesData.map((item, index) => (
        <div
          style={{ backgroundImage: `url(${item.bgImg})` }}
          key={`${index}-${item}`}
          className={`card_tile ${
            (index + 1) % 2 === 0 ? "ct_even" : "ct_odd"
          }`}
        >
          <div className="c_t_icon_container">
            <div className="icon">
              <PiHeart />
            </div>
            <div className="icon">
              <PiArrowUpRight />
            </div>
          </div>

          <button className="_btn btn_secondary">{item.title}</button>
        </div>
      ))}
    </section>
  );
};
