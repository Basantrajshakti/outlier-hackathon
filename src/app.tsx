import { Suspense, lazy } from "preact/compat";
import Spinner from "./components/spinner/Spinner";

const AnimateOnLoad = lazy(() => import("./components/AnimateOnLoad"));
const GSAPTimelineProvider = lazy(
  () => import("./components/GSAPTimelineProvider"),
);
const Header = lazy(() => import("./components/Header"));
const Pricings = lazy(() => import("./components/PricingDetails"));

export function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <GSAPTimelineProvider>
        <AnimateOnLoad />
        <Header />
        <main>
          <Pricings />
        </main>
      </GSAPTimelineProvider>
    </Suspense>
  );
}
