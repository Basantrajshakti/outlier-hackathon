const Header = () => {
  return (
    <header className="sticky top-0 flex w-full justify-between px-8 py-6 bg-transparent">
      <div>
        <sup>by</sup> Basantraj
      </div>

      <ul className="flex list-none gap-6">
        <li>Home</li>
        <li>Pricing</li>
        <li>Products</li>
        <li>About Us</li>
      </ul>

      <button>Contact</button>
    </header>
  );
};

export default Header;
