import { Button } from "@/components/ui/button";
import CreateUser from "@/features/user/CreateUser";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  const username = useSelector((state) => state.user.username)
  const navigate = useNavigate();
  return (
    <div className="my-10 md:my-16 text-center px-4">
      <h1 className="text-xl text-slate-600 font-semibold  mb-8 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-teal-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? <CreateUser /> : <Button onClick={ ()=>navigate("/menu")}  className="bg-slate-600 hover:bg-slate-700 transition-all uppercase tracking-wide 
            rounded-full focus:outline-none focus:ring focus:ring-teal-500
             focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4">Continue ordering, { username}</Button>}
    </div>
  );
}

export default Home;
