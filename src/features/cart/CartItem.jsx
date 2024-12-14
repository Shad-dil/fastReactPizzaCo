import { formatCurrency } from "@/utils/helpers";
import { useDispatch } from "react-redux";
import DeleteItem from "./DeleteItem";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrize } = item;
const dispatch=useDispatch()
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrize)}</p>
        <DeleteItem pizzaId={pizzaId}>Delete</DeleteItem>
      </div>
    </li>
  );
}

export default CartItem;
