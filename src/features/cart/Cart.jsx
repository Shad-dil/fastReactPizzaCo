import { Button } from "@/components/ui/button";
import LinkButton from "@/ui/LinkButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import { clearCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";



function Cart() {
  const username=useSelector(state=>state.user.username)
  const cart = useSelector(state => state.cart.cart);
const dispatch=useDispatch()
  const navigate = useNavigate();
 
  if(cart.length<=0) return <EmptyCart/>
  return (
    <div className="px-4 py-3">
     <LinkButton to={"/menu"} > &larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, { username}</h2>
      <ul className="divide-y divide-stone-200 border-b mt-3">

      {cart.map((item) => <CartItem item={item} key={item.pizzaId}/>)}
</ul>
      <div className="mt-6 space-x-2">
        
        <Button className="bg-slate-600 hover:bg-slate-700 transition-all uppercase tracking-wide 
            rounded-full focus:outline-none focus:ring focus:ring-teal-500
            focus:ring-offset-2 disabled:cursor-not-allowed" onClick={()=>navigate("/order/new")}>Order Pizzas</Button>
        <Button variant="outline" className="transition-all uppercase tracking-wide 
            rounded-full mx-3" onClick={()=>dispatch(clearCart())}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
