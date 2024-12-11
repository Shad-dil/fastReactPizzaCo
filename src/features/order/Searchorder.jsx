import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchorder = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order... #IIDSAT "
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-full px-4 py-2 bg-teal-200 placeholder:text-sm 
         placeholder:text-slate-700 sm:focus:w-72 transition-all 
          duration-300 focus:outline-none focus:ring focus:ring-teal-200"

      />
    </form>
  );
};

export default Searchorder;
