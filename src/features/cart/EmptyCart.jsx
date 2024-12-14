import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className='space-y-4'>
      <Link to="/menu">&larr; Back to menu</Link>

      <p className='font-semibold'>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
