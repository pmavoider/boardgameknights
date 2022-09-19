import ProductPageBuilder from "../components/ProdcutPageBuilder";
import { Col, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Products = (props) => {
  let name = useParams();
  const print = useSelector((state) => state);
  let color = "";
  let heading = "";
  console.log(print);
  switch (name.category) {
    case "classic":
      color = print.inventory.inventoryArray;
      heading = "Classic";
      break;
    case "strategy":
      color = print.strategy.strategyArray;
      heading = "Strategy";
      break;
    case "diceGames":
      color = print.diceGames.diceGameArray;
      heading = "Dice";
      break;
    case "partyGames":
      color = print.partyGames.partyGamesArray;
      heading = "Party";
      break;
    case "official":
      color = print.officialGames.officialGamesArray;
      heading = "Officially Licensed";
      break;
  }

  fetch(
    "https://api.boardgameatlas.com/api/lists?username=Pmavoider&client_id=4HT2KbcdyO"
  )
    .then((res) => res.json())
    .then((data) => console.log(data.lists));

  //const [inventoryObj , setInventoryObj] = useState([]);
  //const categoryArray = ["lRL8hqWo", "strategy", "CardGames", "diceGames", "partyGames"];

  return (
    <>
      <h1
        className=" text-center brand display-2 p-5"
        style={{ marginTop: "50px" }}
      >
        {heading} Games
      </h1>
      <Row className="mt-5 col-10 mx-auto">
        {color.map((x) => {
          return (
            <Col className="col-12 mt-4 col-md-6 col-xl-4">
              <ProductPageBuilder key={x.name} name={x}></ProductPageBuilder>
            </Col>
          );
        })}
      </Row>
    </>
  );
};
export default Products;
