
// import header.css
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Component Corner</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;