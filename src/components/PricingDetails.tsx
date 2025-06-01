import { useState } from "preact/hooks";
import ButtonSwitch from "../UI/ButtonSwitch";
import PricingCards from "../UI/PricingCards/PricingCards";

const Pricings = () => {
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <>
      <section className="relative container min-h-screen pt-10 pb-20">
        <h1 className="appear-onload gradient-text text-center leading-snug font-bold">
          Choose your pricing
        </h1>
        <p className="appear-onload text-para font-ligh text-[#A19BBE mx-auto mt-3 max-w-xl text-center text-gray-300">
          Find the perfect plan to fit your business needs. We provide flexible
          solutions for startups, growing businesses, and enterprises.
        </p>

        <ButtonSwitch isMonthly={isMonthly} setIsMonthly={setIsMonthly} />

        <PricingCards isMonthly={isMonthly} />
      </section>
      <div
        className={"bg-shaded-boxes absolute -top-1/2 left-0 h-full w-full"}
        role="presentation"
      />
    </>
  );
};

export default Pricings;
