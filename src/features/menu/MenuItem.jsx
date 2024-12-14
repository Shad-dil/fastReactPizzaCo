/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/utils/helpers";
import { ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector(getCurrentQuantityById(id))
  const isIncart = currentQuantity > 0

  const handleAddToCart = () => {
    const newitem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrize: unitPrice * 1
    }
    dispatch(addItem(newitem))


  }
  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`} />
      <div className="flex flex-col grow">
        <p className="font-medium ">{name}</p>
        <p className="text-sm italic capitalize">{ingredients.join(", ")}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="font-medium text-sm text-slate-400">Sold out</p>}
          {isIncart ? (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity pizzaId={id} />
              <DeleteItem pizzaId={id}>Remove</DeleteItem>
            </div>) : (!soldOut && <Button className="bg-slate-600 hover:bg-slate-700 transition-all uppercase tracking-wide 
            
            rounded-full focus:outline-none focus:ring focus:ring-teal-500
            focus:ring-offset-2 disabled:cursor-not-allowed text-xs" size="sm" onClick={handleAddToCart}>Add to cart<ShoppingCart className="h-4 w-4" /></Button>)}

        </div>
      </div>
    </li>
  );
}

export default MenuItem;
