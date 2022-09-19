import { fetchStrategyInventory } from "../inventory/StategyInventory";
import { fetchDiceGameInventory } from "../inventory/DiceGameInventory";
import { fetchPartyGameInventory } from "../inventory/PartyGameInventory";
import { fetchOfficialInventory } from "../inventory/OfficialInventory";
import { useDispatch } from "react-redux";
import { fetchInventory } from "../inventory/InventorySlice";
import { useEffect } from "react";

const Importer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInventory());
    dispatch(fetchStrategyInventory());
    dispatch(fetchPartyGameInventory());
    dispatch(fetchDiceGameInventory());
    dispatch(fetchOfficialInventory());
  }, [dispatch]);
};
export default Importer;
