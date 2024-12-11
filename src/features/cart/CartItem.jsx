import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 ">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between">
        <p>{formatCurrency(totalPrice)}</p>
        <Button size="sm" variant="destructive">Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
