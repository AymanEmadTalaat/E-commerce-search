import "../styles/Main.css";
import StarRateSharpIcon from "@mui/icons-material/StarRateSharp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Main({ img, title, reviews, prevPrice }) {
  return (
    <div className="card">
      <img src={img} alt="product" />

      <div>
        <h2>{title}</h2>
        <span className="star-reviews">
          <div>
            <StarRateSharpIcon className="star" />
            <StarRateSharpIcon className="star" />
            <StarRateSharpIcon className="star" />
          </div>

          {reviews}
        </span>
        <div className="price-cart">
          <span>{prevPrice}</span>
          <ShoppingCartIcon></ShoppingCartIcon>
        </div>
      </div>
    </div>
  );
}

export default Main;
