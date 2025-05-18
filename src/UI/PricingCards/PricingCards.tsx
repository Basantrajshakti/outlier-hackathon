import { useEffect, useRef } from "preact/hooks";
import Button from "../Button/Button";
import check from "../../assets/check.svg";
import { pricings } from "../../constants";
import "./styles.css";
import Stars from "../Stars";

interface PricingCardProps {
  card: {
    title: string;
    monthly: number;
    yearly: number;
    desc: string;
    features: string[];
    recommended: boolean;
  };
  isMonthly: boolean;
  index: number;
  setRef: (el: HTMLDivElement | null, index: number) => void;
}

const PricingCards = ({ isMonthly }: { isMonthly: boolean }) => {
  const cardsContainerRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const cardsContainer = cardsContainerRef.current;
    const overlay = overlayRef.current;
    const cards = cardRefs.current;

    if (!cardsContainer || !overlay) return;

    setTimeout(() => {
      overlay.style.visibility = "visible";
    }, 2000);

    const applyOverlayMask = (e: PointerEvent) => {
      if (window.innerWidth < 1024) {
        overlay.style.opacity = "0";
      } else {
        overlay.style.opacity = "1";
      }

      const x = e.pageX - cardsContainer.offsetLeft;
      const y = e.pageY - cardsContainer.offsetTop;
      overlay.style.setProperty("--opacity", "1");
      overlay.style.setProperty("--x", `${x - 150}px`);
      overlay.style.setProperty("--y", `${y - 80}px`);
    };

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const index = cards.findIndex((el) => el === entry.target);
        if (index < 0 || !overlay.children[index]) continue;

        const box = Array.isArray(entry.borderBoxSize)
          ? entry.borderBoxSize[0]
          : entry.borderBoxSize;

        const width = box.inlineSize;
        const height = box.blockSize;

        const overlayCard = overlay.children[index] as HTMLElement;
        overlayCard.style.width = `${width}px`;
        overlayCard.style.height = `${height}px`;

        if (index !== 1) {
          overlayCard.style.marginTop = `4rem`;
        }
      }
    });

    const initOverlayCard = (cardEl: HTMLDivElement | null) => {
      if (!cardEl) return;
      const overlayCard = document.createElement("div");
      overlayCard.classList.add("card");
      overlay.appendChild(overlayCard);
      observer.observe(cardEl);
    };

    cards.forEach(initOverlayCard);
    document.body.addEventListener("pointermove", applyOverlayMask);

    return () => {
      document.body.removeEventListener("pointermove", applyOverlayMask);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="cards cards__container" ref={cardsContainerRef}>
      {pricings.map((card, index) => (
        <PricingCard
          key={index}
          card={card}
          isMonthly={isMonthly}
          index={index}
          setRef={(el, idx) => (cardRefs.current[idx] = el)}
        />
      ))}
      <div
        className="overlay cards__container invisible hidden lg:block"
        ref={overlayRef}
      />
    </div>
  );
};

export default PricingCards;

const PricingCard = ({ card, isMonthly, index, setRef }: PricingCardProps) => {
  return (
    <div
      ref={(el) => setRef(el, index)}
      className={`appear-onload cards__card card rounded-2xl ${card.recommended ? "lg:mb-16" : "lg:mt-16"}`}
    >
      <div
        role="presentation"
        className={`absolute top-0 left-0 h-full w-full rounded-2xl ${card.recommended ? "gradient-shadow" : "gradient-shadow-light"}`}
      />
      {card.recommended && (
        <div
          role="presentation"
          className="appear-onload recommended-gradient absolute -top-[60%] left-1/2 h-full w-full -translate-x-1/2"
        />
      )}
      {/* Headings */}
      <div className="mb-3 flex items-center justify-between">
        <p className="font-semibold tracking-wide">{card.title}</p>
        {card.recommended && <Badge />}
      </div>
      {/* Pricings */}
      <div className="flex items-baseline gap-3 lg:w-[166px] lg:justify-between lg:gap-2">
        <h1 className="gradient-text card__price scale-110 font-sans font-bold">
          ${isMonthly ? card.monthly : card.yearly}
        </h1>
        <p className="text-[15px] text-gray-300">
          per {isMonthly ? " month" : " year"}
        </p>
      </div>
      {/* Descriptions */}
      <p className="mt-4 mb-7 text-base text-gray-400">{card.desc}</p>
      <Button
        text="Get Started"
        active={card.recommended}
        showStars={card.recommended}
        extraClasses="mb-7"
      />
      {/* Features */}
      <ul role="list" className="list-none">
        {card.features.map((feat: string, i: number) => (
          <li className="mt-3.5 flex gap-3 text-sm opacity-90" key={i}>
            <img className="mt-0.5 size-4" src={check} role="presentation" />
            {feat}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Badge = () => {
  return (
    <div
      style={{
        "box-shadow": "rgba(149, 157, 165, 0.2) 0px 1px 24px",
      }}
      className="flex w-fit gap-1 rounded-full bg-[#363354] px-3 py-1 text-[11px] text-white"
    >
      <Stars extraClasses="size-4 fill-white text-white" /> Popular
    </div>
  );
};
