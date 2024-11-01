import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import CartCard from './CartCard';

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.items);

  const calculateTotalPrice = (cart: any) => {
    return cart.reduce((total: any, item: any) => {
      const price = Number(item?.discountPercentage) || Number(item?.price);
      const quantity = Number(item?.quantity);
      return total + (isNaN(price) || isNaN(quantity) ? 0 : price * quantity);
    }, 0);
  };

  const totalPrice = calculateTotalPrice(cart);

  return (
    <div className='w-10/12 lg:w-5/12 mx-auto flex flex-col my-10'>
      {cart?.map((item) => <CartCard cartItem={item} key={item?.id} />)}
      {cart.length === 0 ? <h1 className='text-center text-[28px] text-red-600 font-bold'>No Products In Cart</h1> : <div className='flex justify-between items-center'>
        <p className=' font-bold'>Total</p>
        <p className='font-bold'>{totalPrice.toFixed(2)}</p>
      </div>}
    </div>
  )
}

export default Cart
export { }