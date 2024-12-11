// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

import { Button } from "@/components/ui/button";
import { createOrder } from "@/services/apiRestaurant";
import { Loader } from "lucide-react";
import { useState } from "react";
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
  const [withPriority, setWithPriority] = useState(false);
  const formErrors = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? lets go!</h2>

      <Form method="POST">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required
          className="rounded-full border border-slate-300 transition-all text-sm duration-300
               px-4 py-2 focus:outline-none focus:ring focus:ring-slate-200 w-full" />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required
              className="rounded-full border border-slate-300 transition-all text-sm duration-300
               px-4 py-2 focus:outline-none focus:ring focus:ring-slate-200 w-full"/>
          </div>
          {formErrors?.phone && (
            <span className="text-sm text-red-700  ">{formErrors?.phone}</span>
          )}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required
              className="rounded-full border border-slate-300 transition-all text-sm duration-300
               px-4 py-2 focus:outline-none focus:ring focus:ring-slate-200 w-full" />
          </div>
        </div>

        <div className="flex items-center justify-start gap-2">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
            className=" h-6 w-6 accent-teal-500"
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button variant="default" type="submit" disabled={isSubmitting}
            className="bg-slate-600 hover:bg-slate-700 transition-all uppercase tracking-wide 
            rounded-full focus:outline-none focus:ring focus:ring-teal-500 focus:ring-offset-2 disabled:cursor-not-allowed">
            {isSubmitting && <Loader className="h-4 w-4 animate-spin" />}
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
