import { render } from "preact";
import { App } from "./app.tsx";
import Spinner from "./components/spinner/Spinner.tsx";
import { Suspense } from "preact/compat";
import "./index.css";

render(
  <Suspense fallback={<Spinner />}>
    <App />
  </Suspense>,

  document.getElementById("app")!,
);
