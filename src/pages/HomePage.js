import { useEffect } from "react";
import Catagories from "../components/Catagories";

const HomePage = () => {
  return (
    <>
      <div className="hero">
        <h2 className="text-light text-center display-1 pt-5">
          Welcome to the World's <br></br>
          #1 Online GameStore
        </h2>
      </div>
      <Catagories />
    </>
  );
};

export default HomePage;
