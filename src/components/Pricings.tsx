import { useState } from "preact/hooks";
import { pricings } from "../constants";

const Pricings = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section>
      <h1 className="text-center leading-snug">Choose your pricing</h1>
      <p className="text-para mt-3 text-center">
        Find the perfect plan to fit your business needs. We provide flexible
        solutions for startups, growing businesses, and enterprises.
      </p>

      <div className="mx-auto my-12 flex w-fit gap-4">
        <button onClick={() => setIsMonthly(false)}>Annual</button>
        <button onClick={() => setIsMonthly(true)}>Monthly</button>
      </div>

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
