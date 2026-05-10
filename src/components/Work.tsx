import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    const padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>NIKA — AI Analytics Platform</h4>
                  <p>Full-Stack AI Platform</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, Gemini AI, Flask, Pandas, React, REST API, SQLite</p>
            </div>
            <WorkImage 
              image="/images/nika.png" 
              alt="NIKA AI Analytics Platform" 
              link="https://github.com/jaijaijai353/NIKA--main"
            />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>Blinkit Regional Sales Dashboard</h4>
                  <p>Business Intelligence</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Power BI, DAX, Power Query, Star Schema, Excel</p>
            </div>
            <WorkImage 
              image="/images/blinkit.png" 
              alt="Blinkit Sales Dashboard" 
              link="https://github.com/jaijaijai353/Blinkit-Sales-Dashboard"
            />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>Netflix Content EDA Pipeline</h4>
                  <p>Data Analysis</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, Pandas, NumPy, Matplotlib, Seaborn, scikit-learn</p>
            </div>
            <WorkImage 
              image="/images/netflix.png" 
              alt="Netflix EDA Pipeline" 
              link="https://github.com/jaijaijai353/Netflix-EDA-Analysis"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
