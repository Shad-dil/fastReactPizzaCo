import Searchorder from "@/features/order/Searchorder";
import Username from "@/features/user/username";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-teal-500 flex justify-between w-full items-center px-4 py-3 border-b border-slate-400">
      <Link href="/" className="uppercase tracking-wider text-slate-900">
        FAST REACT PIZZA CO..
      </Link>
      <div >
        <Searchorder />
        <Username />
      </div>
    </header>
  );
};

export default Header;
