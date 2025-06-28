import Searchorder from "@/features/order/Searchorder";
import Username from "@/features/user/Username";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-teal-500  flex justify-between w-full items-center px-4 py-3 border-b border-slate-400">
      <Link href="/"  className="text-2xl font-bold tracking-tight text-slate-600 dark:text-blue-400"
          aria-label="Home"
          style={{ fontFamily: "monospace" }}>
      
          
      
          &lt; Pizza /&gt;
        
      </Link>
      <div className="flex gap-2">
        <div>

        <Searchorder />
        </div>
        <div className="my-2">

        <Username />
        </div>
      </div>
    </header>
  );
};

export default Header;
