import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/utils/helpers";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrize, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  const totalCartQuantity=useSelector(getTotalCartQuantity)
  const totalCartPrize = useSelector(getTotalCartPrize)
  if(!totalCartQuantity) return null
  return (
    <div className="bg-slate-700 text-slate-200 flex justify-between items-center text-sm md:text-base uppercase px-4 py-1">
      <p className="font-semibold p-4 space-x-4">
        <span>{totalCartQuantity} pizzas</span>
        <span>{ formatCurrency(totalCartPrize)}</span>
      </p>
      
      <Link to="/cart"><Button variant="link" className="text-slate-100 text-lg font-medium">Open Cart &rarr;</Button></Link>
    </div>
  );
}

export default CartOverview;
