import { useEffect } from "react";
import Intro from "./Intro";
import "../../newStyles/homePage/home.css";
import { useLogoContext } from "../LogoContext";
import AboutUsCard from "./AboutUsCard";
import ServicesCard from "./ServicesCard";
import PortfolioCards from "./PortfolioCards";
import LetsCreate from "./LetsCreate";

const BACKGROUND_VIDEO = `${process.env.PUBLIC_URL}/website_video.mp4`;

function HomePage() {
  const { logoShrunk } = useLogoContext();

  const handleScroll = (e: Event) => {
    if (logoShrunk) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (logoShrunk) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [logoShrunk]);

  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <div className="video" style={{ position: "fixed" }}>
            <video autoPlay loop muted>
              <source src={BACKGROUND_VIDEO} type="video/mp4"></source>
            </video>
          </div>
          <div className="cards">
            <div className="intro-card">
              <Intro />
            </div>
            <div className="about-us-card">
              <AboutUsCard />
            </div>
            <div className="services-card">
              <ServicesCard />
            </div>
            <div className="portfolio-card">
              <PortfolioCards />
            </div>
            <div className="lets-create-card">
              <LetsCreate />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
