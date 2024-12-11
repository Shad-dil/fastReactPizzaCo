import CartOverview from "@/features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "./Loader";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  // const isLoading=true 

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="overflow-scroll">
        
      <main className=" max-w-3xl mx-auto my-auto">{isLoading ? <Loader /> : <Outlet />}</main>
      </div>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
