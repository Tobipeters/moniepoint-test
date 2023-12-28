import { Footer } from "..";
import { useEffect } from "react";
import {
  PiDnaThin,
  PiToothThin,
  PiAtomThin,
  PiStarFill,
  PiPlus,
  PiPlayFill,
} from "react-icons/pi";
import "./revo.styles.css";
import LadyImg from "../../assets/card-img-3.avif";
import StackImg1 from "../../assets/card-img-1.jpeg";
import StackImg2 from "../../assets/card-img-2.webp";
import StackImg3 from "../../assets/card-img-4.jpeg";
import gsap from "gsap";

interface IProps {
  revoSectionRef: React.RefObject<HTMLDivElement>;
}

export const RevolutionalizeSection: React.FC<IProps> = ({
  revoSectionRef,
}) => {
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

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { opacity: 1, x: 0, ease: "Power3.inOut", duration: 0.5 },
      onComplete: () => {
        console.log("Revo section animation completed");
      },
      delay: 3,
    });

    tl.fromTo(".mmt_1", { x: "40%" }, { x: 0 }, "-=0.5");
    tl.fromTo(".mmt_2", { x: 0 }, { x: "20%" }, "-=0.5");
    tl.fromTo(".mmt_3", { x: "30%" }, { x: 0 }, "-=0.5");
    tl.fromTo(
      ".get_started_container",
      { opacity: 0, zoom: 3 },
      { opacity: 1, x: 0, zoom: 1 },
      "+=0.5"
    );

    tl.to(
      ".assistance_container",
      { display: "inline-flex", opacity: 1, zoom: 1 },
      "-=0.75"
    );
    tl.to(".mmt_2", { x: 0 }, "-=0.5");
    tl.fromTo(
      ".rounded_img_container",
      { display: "inline-flex", opacity: 0 },
      { opacity: 1 },
      "-=0.1"
    );
    tl.fromTo(
      ".modern_solution",
      { display: "inline-flex", opacity: 0, zoom: 0 },
      { opacity: 1, zoom: 1 },
      "-=0.75"
    );
    tl.fromTo(
      ".img_stack_container",
      { display: "inline-flex", opacity: 0, zoom: 0 },
      { opacity: 1, zoom: 1 },
      "-=0.75"
    );
    tl.to(".video_overlay", { opacity: 1, zoom: 1 }, "-=0.75");

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

    if (revoSectionRef.current) {
      observer.observe(revoSectionRef.current);
    }

    tl.pause();

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="_section revo_section" ref={revoSectionRef}>
      <div className="container">
        <div className="revo_text_view">
          <div className="text_container section_text">
            <div className="m_main_text mmt_1">
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
            <div className="m_main_text mmt_2">
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
              </div>{" "}
              care
            </div>
            <div className="m_main_text mmt_3">
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

            <div className="m_main_text">
              <div className="video_overlay">
                <div className="vo_icon">
                  <PiPlayFill />
                </div>
              </div>
              <div className="get_started_container">Get Started</div>
            </div>
          </div>
        </div>
      </div>

      <Footer showGoDown={false} />
    </section>
  );
};
