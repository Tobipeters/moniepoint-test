import "./cardTiles.styles.css";
import { PiHeart, PiArrowUpRight } from "react-icons/pi";
import { tilesData } from "../../mock-data";
// import { useEffect } from "react";
// import gsap from "gsap";

export const CardTiles = () => {


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
