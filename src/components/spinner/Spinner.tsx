import { useEffect } from "preact/hooks";
import "./styles.css";
import { loadFont } from "../../utils/loadFonts";

let fontsFetched = false;

const Spinner = () => {
  useEffect(() => {
    if (fontsFetched) return;

    // When loader is complete
    const loadFontsAfterLoader = async () => {
      await Promise.all([
        loadFont("Manrope", "/fonts/Manrope-Regular.ttf", 400),
        loadFont("Manrope", "/fonts/Manrope-SemiBold.ttf", 600),
        loadFont("Manrope", "/fonts/Manrope-Bold.ttf", 700),
      ]);
      console.log("Fonts loaded");
    };

    loadFontsAfterLoader();
    fontsFetched = true;
  }, []);

  return (
    <div class="spinner">
      <div class="pyramid">
        <div class="glow"></div>
        <div>
          <span style="--i: 0"></span>
          <span style="--i: 1"></span>
          <span style="--i: 2"></span>
          <span style="--i: 3"></span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
