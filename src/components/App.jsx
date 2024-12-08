import "../styles/App.css";
import { useEffect, useState } from "react";
import Nav from "./Nav.jsx";
import Main from "./Main.jsx";
import data from "./data.js";
import NorthIcon from "@mui/icons-material/North";

function App() {
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      document.documentElement.scrollTop > 300 && setVisible(true);
      document.documentElement.scrollTop <= 300 && setVisible(false);
    };
  }, []);

  function handleSearch(e) {
    const { value } = e.currentTarget;

    setSearch(value);
  }

  const filteredData = data.filter((card) => {
    if (search === "") {
      return card;
    } else {
      return card.title.toLowerCase().includes(search.toLowerCase());
    }
  });

  const newData = filteredData.map((data, index) => (
    <Main key={index} {...data} />
  ));

  return (
    <>
      <Nav handleChange={handleSearch} search={search} />
      <div className="container">{newData}</div>

      <button
        id="btn"
        type="submit"
        style={{ display: visible ? "inline" : "none" }}
        onClick={() => window.scrollTo(top)}
      >
        <NorthIcon />
      </button>
    </>
  );
}

export default App;
