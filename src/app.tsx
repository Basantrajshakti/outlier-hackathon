import AnimateOnLoad from "./components/AnimateOnLoad";
import GSAPTimelineProvider from "./components/GSAPTimelineProvider";
import Header from "./components/Header";
import Pricings from "./components/PricingDetails";

export function App() {
  return (
    <>
      <GSAPTimelineProvider>
        <AnimateOnLoad />
        <Header />
        <main>
          <Pricings />
        </main>
      </GSAPTimelineProvider>
    </>
  );
}
