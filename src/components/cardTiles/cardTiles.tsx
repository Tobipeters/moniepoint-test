import "./cardTiles.styles.css";
import { PiHeart, PiArrowUpRight } from "react-icons/pi";
import { tilesData } from "../../mock-data";
import { useEffect } from "react";
import gsap from "gsap";

export const CardTiles = () => {
  useEffect(() => {
    // Get the card_tile elements
    const cardTiles = document.querySelectorAll(".card_tile");

    // Create a GSAP timeline for odd elements
    const oddTimeline = gsap.timeline({ repeat: -1 });

    // Create a GSAP timeline for even elements
    const evenTimeline = gsap.timeline({ repeat: -1 });

    // Iterate through card_tiles and add animations to the timelines
    cardTiles.forEach((cardTile, index) => {
      const isEven = index % 2 === 0;

      // Set the initial position based on odd or even index
      gsap.set(cardTile, { y: isEven ? 400 : -400 });

      // Add the animation to the timelines
      if (isEven) {
        // Even elements scroll down
        evenTimeline
          .to(cardTile, {
            duration: 1,
            y: 400,
            ease: "power3.out",
          })
          .to({}, { duration: 0.5 }) // Delay for 0.5s
          .to(cardTile, {
            duration: 1,
            y: 0,
            ease: "power3.out",
          });
      } else {
        // Odd elements scroll up
        oddTimeline
          .to(cardTile, {
            duration: 1,
            y: -400,
            ease: "power3.out",
          })
          .to({}, { duration: 0.5 }) // Delay for 0.5s
          .to(cardTile, {
            duration: 1,
            y: 0,
            ease: "power3.out",
          });
      }
    });

    return () => {
      // Cleanup or interrupt the animations if needed
      oddTimeline.kill();
      evenTimeline.kill();
    };
  }, [tilesData]);

  return (
    <section className="_card_tiles_container">
      {tilesData.map((item, index) => (
        <div
          style={{ backgroundImage: `url(${item.bgImg})` }}
          key={`${index}-${item}`}
          className="card_tile"
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
