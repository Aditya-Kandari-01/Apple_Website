import gsap from "gsap";
import { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
//w-full: full width
//nav-height: which will make it come bellow the nav bar
//cta : call to action

//Firstly videoSrc will call const[videoSrc,setVideroSrc] for the first rendering
//Secondly the video will be processed
//Thirdly the useffect will work just after the video plays
//Then gsap function will work
const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );
  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 1.5 });
    gsap.to("#cta", { opacity: 1, y: -50, delay: 3 });
  }, []);
  return (
    <>
      <section className="w-full nav-height bg-black relative">
        <div className="h-5/6 w-full flex-center flex-col mt-10">
          <p id="hero" className="hero-title">
            iPhone 17 Pro
          </p>
          <div className="md:w-10/12 w-9/12 mt-1">
            <video
              className="pointer-events-none"
              autoPlay
              muted
              playsInline={true}
              key={videoSrc}>
              <source src={videoSrc} type="video/mp4"></source>
            </video>
          </div>
          <div
            id="cta"
            className="flex flex-col items-center opacity-0 translate-y-20 -mt-5">
            <a href="#highlights" className="btn">
              Buy
            </a>
            <p className="font-normal text-xl">From $199/month or $999</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
