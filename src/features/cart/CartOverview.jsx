import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-slate-700 text-slate-200 flex justify-between items-center text-sm md:text-base uppercase px-4 py-1">
      <p className="font-semibold p-4 space-x-4">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      
      <Link to="/cart"><Button variant="link" className="text-slate-100 text-lg font-medium">Open Cart &rarr;</Button></Link>
    </div>
  );
}

export default CartOverview;
