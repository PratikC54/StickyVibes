import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faTags } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="link">
          <FontAwesomeIcon icon={faTags} className="fa-icon" />
          <span className="brand-title">StickyVibes</span>
        </a>
        <nav className="nav">
          <ul>
            <li className="nav-link">
              <a href="/">Home</a>
            </li>
            <li className="nav-link">
              <a href="/products">Products</a>
            </li>
            <li className="nav-link">
              <a href="/about">About</a>
            </li>
            <li className="nav-link">
              <a href="/contact">Contact</a>
            </li>
            <li className="nav-link">
              <a href="/login">login</a>
            </li>
            <li className="nav-link">
              <a href="/cart">
                <FontAwesomeIcon icon={faShoppingBasket} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
