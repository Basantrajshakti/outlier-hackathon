import { useState } from "preact/hooks";
import { pricings } from "../constants";
import ButtonSwitch from "../UI/ButtonSwitch";

const Pricings = () => {
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <section className="container min-h-screen py-12">
      <h1 className="gradient-text tracking- text-center leading-snug font-bold">
        Choose your pricing
      </h1>
      <p className="text-para font-ligh text-[#A19BBE mx-auto mt-3 max-w-xl text-center text-gray-300">
        Find the perfect plan to fit your business needs. We provide flexible
        solutions for startups, growing businesses, and enterprises.
      </p>

      <ButtonSwitch isMonthly={isMonthly} setIsMonthly={setIsMonthly} />

      <div className="mx-auto grid max-w-[80vw] grid-cols-3 gap-6">
        {pricings.map((card, key) => {
          return (
            <div
              key={key}
              className="flex flex-col gap-3 rounded-sm border p-4"
            >
              <span>{card.title}</span>
              <span>{isMonthly ? card.monthly : card.yearly}</span>
              <span>{card.desc}</span>
              <ul className="">
                {card.features.map((feat, key) => {
                  return <li key={key}>{feat}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricings;
