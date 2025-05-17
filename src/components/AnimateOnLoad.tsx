import { useEffect } from "preact/hooks";
import gsap from "gsap";
import { useGSAPContext } from "./GSAPTimelineProvider";

const AnimateOnLoad = () => {
  const { killTimeline } = useGSAPContext();

  useEffect(() => {
    const elements = document.querySelectorAll(".appear-onload");
    if (!elements.length) return;

    const animation = gsap.to(
      elements,
      // { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power3.out",
        stagger: {
          each: 0.08,
          from: "start",
        },
      },
    );

    return () => {
      animation.kill();
      killTimeline();
    };
  }, []);

  return null;
};

export default AnimateOnLoad;
