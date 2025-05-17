import { navItems } from "../constants";
import Button from "../UI/Button/Button";

const navItemClasses =
  "opacity-90 transition-opacity duration-300 group-hover:opacity-50 hover:!opacity-100 px-1 mx-2";

const Header = () => {
  return (
    <header className="sticky top-0 container flex w-full items-center justify-between bg-transparent px-8 py-5">
      <a
        href="https://www.linkedin.com/in/basantrajshakti/"
        className="relative font-bold"
      >
        <span className="absolute top-0.5 inline-block text-[10px]">by</span>
        <span className="ml-3.5 text-xl text-gray-100">Basantraj</span>
      </a>

      <div className="group hidden text-sm sm:block">
        {navItems.map((nav, key) => {
          return (
            <a href="#" key={key} className={navItemClasses}>
              {nav}
            </a>
          );
        })}
      </div>

      <Button text="Contact" clickHandler={() => {}} active />
    </header>
  );
};

export default Header;
