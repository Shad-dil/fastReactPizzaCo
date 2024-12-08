import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./features/cart/Cart";
import Menu from "./features/menu/Menu";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import Home from "./ui/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/menu",
      element: <Menu />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/order/new",
      element: <CreateOrder />,
    },
    {
      path: "/order/:orderId",
      element: <Order />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
