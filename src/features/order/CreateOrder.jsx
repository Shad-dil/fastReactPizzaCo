// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

import { Button } from "@/components/ui/button";
import { createOrder } from "@/services/apiRestaurant";
import store from "@/store";
import { formatCurrency } from "@/utils/helpers";
import { LoaderPinwheel, MapPinHouse } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { clearCart, getTotalCartPrize } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import { fetchAddress } from "../user/userSlice";


function CreateOrder() {
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);
  const isLoadingAddress = addressStatus === "loading"
  const [withPriority, setWithPriority] = useState(false);
  const formErrors = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.cart);
  const totalCartPrize = useSelector(getTotalCartPrize)
  const priorityPrize = withPriority ? totalCartPrize * 0.2 : 0
  const totalPrize = totalCartPrize + priorityPrize

  const handleAddress = (e) => {
    e.preventDefault()
    dispatch(fetchAddress())
  }
  if (!cart.length) return <EmptyCart />


  return (
    <div className="px-4 py-6">

      <h2 className="text-xl font-semibold mb-8">Ready to order? lets go!</h2>

      <Form method="POST">
        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input type="text" name="customer" required
            className="input grow" defaultValue={username} />
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40" >Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required
              className="input w-full" />
            {formErrors?.phone && (
              <span className="text-xs text-red-700  p-2 rounded-md mt-10 ">{formErrors?.phone}</span>
            )}
          </div>

        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center relative">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input type="text" name="address" required
              className="input w-full" defaultValue={address} disabled={isLoadingAddress} />
          </div>
          {!position.latitude && !position.longitude && <Button onClick={handleAddress} variant="outline" className="rounded-full absolute right-0 z-1"
            disabled={isLoadingAddress}><MapPinHouse className="h-4 w-4 text-teal-700" /></Button>}
        </div>
        {addressStatus === "error" && <span className="text-xs text-red-700  p-2 rounded-md  ml-40">{errorAddress}</span>}

        <div className="flex items-center  gap-5 mb-12">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
            className=" h-6 w-6 accent-teal-500"
          />
          <label htmlFor="priority" className="text-sm">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input type="hidden" name="position" value={position.longitude && position.latitude ? `${position.latitude},${position.longitude}` : ""} />


          <Button variant="default" type="submit" disabled={isSubmitting}
            className="bg-slate-600 hover:bg-slate-700 transition-all uppercase tracking-wide 
            rounded-full focus:outline-none focus:ring focus:ring-teal-500 focus:ring-offset-2 disabled:cursor-not-allowed">
            {isSubmitting && <LoaderPinwheel className="h-4 w-4 animate-spin" />}
            {`Order Now ${formatCurrency(totalPrize)}`}
          </Button>
        </div>
      </Form>

    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = "Please Enter the valid Phone Number";
  if (Object.keys(errors).length > 0) return errors;
  console.log(order)

  const createdOrder = await createOrder(order);
  store.dispatch(clearCart())

  //when there is no Error
  return redirect(`/order/${createdOrder.id}`); 
  

}
export default CreateOrder;
