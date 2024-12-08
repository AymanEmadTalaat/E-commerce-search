import "../styles/Nav.css";
import logo from "../assets/logo.png";
import sneakers from "../assets/sneakers.png";

function Nav({ handleChange, search }) {
  return (
    <nav>
      <div>
        <img src={logo} alt="WebApp logo" />
        <img src={sneakers} alt="WebApp second logo" />
      </div>

      <div>
        <label htmlFor="form-input">Search</label>
        <input
          id="form-input"
          onChange={handleChange}
          value={search}
          type="search"
        />
      </div>
    </nav>
  );
}

export default Nav;
