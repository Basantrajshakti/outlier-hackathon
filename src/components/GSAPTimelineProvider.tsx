import { createContext } from "preact";
import { useContext, useState } from "preact/hooks";
// import gsap from "gsap";

interface GSAPContextType {
  killTimeline: () => void;
}

const GSAPContext = createContext<GSAPContextType>({ killTimeline: () => {} });

export const useGSAPContext = () => useContext(GSAPContext);

const GSAPTimelineProvider = ({
  children,
}: {
  children: preact.ComponentChildren;
}) => {
  const [timeline, setTimeline] = useState<gsap.core.Timeline | null>(null);

  const killTimeline = () => {
    if (timeline) {
      timeline.kill();
      setTimeline(null);
    }
  };

  return (
    <GSAPContext.Provider value={{ killTimeline }}>
      {children}
    </GSAPContext.Provider>
  );
};

export default GSAPTimelineProvider;
