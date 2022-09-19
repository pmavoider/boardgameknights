import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { add } from "./shoppingCart/ShoppingCartSlice";
import { Button } from "bootstrap";
import { useDispatch } from "react-redux";

const ProductBreakout = (props) => {
  const dispatch = useDispatch();
  let product = useParams();
  const category = useSelector((state) => state);
  let color = "";
  switch (props.cat) {
    case "classic":
      color = category.inventory.inventoryArray;
      break;
    case "strategy":
      color = category.strategy.strategyArray;
      break;
    case "diceGames":
      color = category.diceGames.diceGameArray;
      break;
    case "partyGames":
      color = category.partyGames.partyGamesArray;
      break;
    case "officialGames":
      color = category.officialGames.officialGamesArray;
      break;
  }

  for (let i = 0; i < color.length; i++) {
    if (color[i].name === product.name) {
      let product = color[i];
      return (
        <>
          <img
            class="col-8 d-block mx-auto mt-5"
            style={{ maxWidth: "600px" }}
            src={color[i].image}
          />
          <h1 class="mt-5 text-center textColor display-3">{color[i].name}</h1>
          <p class="col-8 col-md-6 mx-auto mt-5">{color[i].description}</p>
          <h5 class="text-center mt-5">${color[i].price}</h5>
          <button
            onClick={() => dispatch(add({ product }))}
            className="mx-auto d-block rounded mt-2"
          >
            Add to Cart
          </button>
        </>
      );
    }
  }
};
export default ProductBreakout;
