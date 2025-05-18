import { navItems } from "../constants";
import Button from "../UI/Button/Button";

const navItemClasses =
  "opacity-90 transition-opacity duration-300 group-hover:opacity-50 hover:!opacity-100 px-1 mx-2";

const Header = () => {
  return (
    <header className="sticky top-0 z-100 container flex items-center justify-between bg-transparent px-8 py-2 backdrop-blur-2xl md:py-5">
      <a
        href="https://www.linkedin.com/in/basantrajshakti/"
        className="appear-onload relative scale-[0.8] font-bold md:scale-100"
        target="_blank"
      >
        <span className="absolute top-0.5 inline-block text-[10px]">by</span>
        <span className="ml-3.5 text-xl text-gray-100">Basantraj Shakti</span>
      </a>

      <div className="appear-onload group hidden text-sm sm:block">
        {navItems.map((nav, key) => {
          return (
            <a href="#" key={key} className={navItemClasses}>
              {nav}
            </a>
          );
        })}
      </div>

      <div className="appear-onload scale-[0.8] md:scale-100">
        <Button text="Contact" active />
      </div>
    </header>
  );
};

export default Header;
