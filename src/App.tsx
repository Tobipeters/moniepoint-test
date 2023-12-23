import "./App.css";
import { NavBar, Footer, FlipCard, CardTiles } from "./components";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { PiDnaLight, PiTooth, PiAtomLight } from "react-icons/pi";

function App() {
  useEffect(() => {
    // Get the element to animate
    const elementToAnimate = document.querySelectorAll(".fadeUp");

    // Function to trigger the animation
    const animateElement = () => {
      // Animate the element using GSAP
      gsap.to(elementToAnimate, {
        duration: 0.5, // Animation duration in seconds
        y: -30, // Move the element up by 20 pixels
        onComplete: () => {
          // Add a delay before returning to the original position
          gsap.to(elementToAnimate, {
            duration: 0.5, // Animation duration in seconds
            y: 0, // Return the element to its original position
          });
        },
      });
    };

    // Call the function to start the animation
    animateElement();
  }, []);

  return (
    <main className="_home">
      <NavBar />

      <div className="main_view_spot">
        <header className="_header">
          <div className="container">
            <div className="text_container fadeUp">Our Adavantages</div>
            <FlipCard />
          </div>
        </header>

        <section className="_section">
          <div className="container">
            <div className="text_container fadeUp">
              Revolutionizing dental care with technology
            </div>
          </div>
        </section>

        <section className="_section">
          <div className="container">
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
        </section>
      </div>

      <Footer />
    </main>
  );
}

export default App;
