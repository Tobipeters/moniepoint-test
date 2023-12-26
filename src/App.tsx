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

  useEffect(() => {
    // const bodyElement: HTMLBodyElement = document.querySelector("body");
    // disableBodyScroll(bodyElement);
    const trackedElement = exploreSectionRef.current;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Log the scrollY value of the body
      console.log("Body ScrollY:", scrollY);

      if (trackedElement) {
        const elementRect = trackedElement.getBoundingClientRect();
        const elementTop = elementRect.top + scrollY;

        console.log("elementTop", elementTop);

        // Log the scrollY value when the tracked element is at a certain level
        if (elementTop >= scrollY) {
          console.log("Tracked Element reached scroll level 200");
          // Perform actions when the element reaches the specified scroll level
        }
      }
    };

    // Attach the scroll event listener to window
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove the scroll event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [exploreSectionRef]);

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

          <Footer />
        </header>

        <RevolutionalizeSection />

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
