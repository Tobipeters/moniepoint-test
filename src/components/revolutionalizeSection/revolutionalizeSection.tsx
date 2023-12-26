import { Footer } from "..";
import { useEffect, useRef } from "react";
import {
  PiDnaThin,
  PiToothThin,
  PiAtomThin,
  PiStarFill,
  PiPlus,
} from "react-icons/pi";
import "./revo.styles.css";
import LadyImg from "../../assets/card-img-3.avif";
import StackImg1 from "../../assets/card-img-1.jpeg";
import StackImg2 from "../../assets/card-img-2.webp";
import StackImg3 from "../../assets/card-img-4.jpeg";

export const RevolutionalizeSection = () => {
  const revoSectionRef = useRef<HTMLDivElement>(null);

  const imgStacks = [
    {
      photoSrc: StackImg1,
      alt: "stack img 1",
    },
    {
      photoSrc: StackImg2,
      alt: "stack img 2",
    },
    {
      photoSrc: StackImg3,
      alt: "stack img 3",
    },
    {
      photoSrc: LadyImg,
      alt: "stack img 4",
    },
  ];

  useEffect(() => {}, []);

  return (
    <section className="_section revo_section" ref={revoSectionRef}>
      <div className="container">
        <div className="revo_text_view">
          <div className="text_container section_text fadeUp">
            <div className="m_main_text">
              Revolutionizing
              <div className="modern_solution">
                <div className="icons_container">
                  <div className="m_icon">
                    <PiDnaThin />
                  </div>
                  <div className="m_icon">
                    <PiToothThin />
                  </div>
                  <div className="m_icon">
                    <PiAtomThin />
                  </div>
                </div>
                <div className="m_text">
                  Modern Solutions,
                  <br />
                  Timeless Smiles
                </div>
              </div>
            </div>
            <div className="m_main_text">
              <div className="assistance_container">
                <div className="assistance_holder">Assistance </div>
                <div className="ass_icon">
                  <PiToothThin />
                </div>
              </div>
              dental
              <div className="rounded_img_container">
                <img src={LadyImg} alt="lady img" />
                <div className="r_icon">
                  <PiStarFill />
                </div>
              </div>
              care
            </div>
            <div className="m_main_text">
              with technology
              <div className="img_stack_container">
                {imgStacks.map((item, id: number) => (
                  <img key={id} src={item.photoSrc} alt={item.alt} />
                ))}
                <div className="is_icon">
                  <PiPlus />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};
