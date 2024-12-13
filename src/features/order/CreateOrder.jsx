// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

import { Button } from "@/components/ui/button";
import { createOrder } from "@/services/apiRestaurant";
import { LoaderPinwheel } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
   const username=useSelector(state=>state.user.username)
  const [withPriority, setWithPriority] = useState(false);
  const formErrors = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const cart = fakeCart;

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

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input type="text" name="address" required
              className="input w-full" />
          </div>
        </div>

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
          <Button variant="default" type="submit" disabled={isSubmitting}
            className="bg-slate-600 hover:bg-slate-700 transition-all uppercase tracking-wide 
            rounded-full focus:outline-none focus:ring focus:ring-teal-500 focus:ring-offset-2 disabled:cursor-not-allowed">
            {isSubmitting && <LoaderPinwheel className="h-4 w-4 animate-spin" />}
            Order Now
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

  const createdOrder = await createOrder(order);
  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = "Please Enter the valid Phone Number";
  if (Object.keys(errors).length > 0) return errors;

  //when there is no Error
  return redirect(`/order/${createdOrder.id}`);
}
export default CreateOrder;
