import { lazy } from "preact/compat";

const AnimateOnLoad = lazy(() => import("./components/AnimateOnLoad"));
const GSAPTimelineProvider = lazy(
  () => import("./components/GSAPTimelineProvider"),
);
const Header = lazy(() => import("./components/Header"));
const Pricings = lazy(() => import("./components/PricingDetails"));

import "./gradients.css";
import "./app.css";

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
