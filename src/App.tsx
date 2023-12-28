import "./App.css";
import {
  NavBar,
  Footer,
  FlipCard,
  CardTiles,
  SplashScreen,
  RevolutionalizeSection,
} from "./components";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { PiDnaLight, PiTooth, PiAtomLight } from "react-icons/pi";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const App = () => {
  const revoSectionRef = useRef<HTMLDivElement>(null);
  const exploreSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elementToAnimate = document.querySelectorAll(".fadeUp");

    const animateElement = () => {
      gsap.to(elementToAnimate, {
        duration: 0.5,
        y: -30,
        onComplete: () => {
          gsap.to(elementToAnimate, {
            duration: 0.5,
            y: 0,
          });
        },
      });
    };

    animateElement();
  }, []);


  return (
    <>
      <SplashScreen />

      <main className="_home">
        <NavBar />

        <header className="_header">
          <div className="container">
            <div className="text_container section_text fadeUp">
              Our Advantages
            </div>
            <FlipCard />
          </div>

          <Footer scrollRef={revoSectionRef} />
        </header>

        <RevolutionalizeSection revoSectionRef={revoSectionRef} />

        <section className="_section explore_section" ref={exploreSectionRef}>
          <div className="container">
            <div className="explore_view_spot">
              <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                  <div>
                    <div className="d-flex align-items-center gap-3">
                      <div className="icon_tag">
                        <PiDnaLight />
                      </div>
                      <div className="icon_tag">
                        <PiTooth />
                      </div>
                      <div className="icon_tag">
                        <PiAtomLight />
                      </div>
                    </div>

                    <div className="sub_title fadeUp mt-4 mb-5">
                      Explore our service, Make your smile shine
                    </div>

                    <div className="d-flex align-items-center gap-3">
                      <button className="btn _btn btn_primary">
                        Get The App
                      </button>
                      <button className="btn _btn btn_secondary">
                        Meet The Team
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 card_tiles_container">
                  <CardTiles />
                </div>
              </div>
            </div>
          </div>

          <Footer position={"left"} />
        </section>
      </main>
    </>
  );
};

// export default App;
