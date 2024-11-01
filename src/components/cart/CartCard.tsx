import React from 'react'
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/cart/cartSlice';

const CartCard = ({ cartItem }: any) => {
    const dispatch = useDispatch<AppDispatch>();
    const handleRemoveCart = (product: any) => {
        dispatch(removeFromCart(product));
    }

    return (
        <React.Fragment key={cartItem?.id}>
            <div key={cartItem.id} className='flex cartItems-center justify-between my-2'>
                <div className="cart-img-box w-[50px] h-[50px] mr-[50px] bg-[#ece7e9] rounded">
                    <img src={cartItem.thumbnail} alt={cartItem.title} className="w-full h-full object-cover" />
                </div>
                <div className=' flex-1'>
                    <p>{cartItem.title}</p>
                    <button onClick={() => handleRemoveCart(cartItem)} className='bg-[#9591E5] px-[10px] text-[12px] mt-2 text-white font-semibold py-[4px] rounded-lg'>Remove</button>

                </div>
                <div className='text-end'>
                    <p>Quantity : {cartItem.quantity}</p>
                    <p>Price : {cartItem?.discountPercentage ? <span>৳{cartItem?.discountPercentage}</span> : <span>{cartItem.price}</span>}</p>
                </div>

            </div>
            <hr className='w-full h-[2px] bg-[#808080]' />
        </React.Fragment>
    )
}

export default CartCard
export { }