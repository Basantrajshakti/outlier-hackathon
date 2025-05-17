import Stars from "../Stars";
import "./styles.css";

type ButtonProps = {
  // clickHandler?: () => void;
  text: string;
  extraClasses?: string;
  active?: boolean;
  showStars?: boolean;
  showPathAnim?: boolean;
};

const Button = ({
  // clickHandler,
  text,
  extraClasses,
  active,
  showStars,
  showPathAnim,
}: ButtonProps) => {
  return (
    <button
      // onClick={clickHandler}
      className={
        `button flex justify-center text-base ${active ? "active " : ""}` +
        extraClasses
      }
    >
      {showPathAnim && <div className="anim_borders"></div>}
      {showStars && <Stars />}
      <span className="text_button">{text}</span>
    </button>
  );
};

export default Button;
