function CartOverview() {
  return (
    <div className="bg-slate-700 text-slate-200 flex justify-between items-center text-sm md:text-base uppercase">
      <p className="font-semibold p-4 space-x-4">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <a href="/cart">Open cart &rarr;</a>
    </div>
  );
}

export default CartOverview;
