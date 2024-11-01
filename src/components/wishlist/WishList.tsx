import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const WishList = () => {
    const wishlist = useSelector((state: RootState) => state.wishlist.items);

    return (
        <div className='w-5/12 mx-auto cursor-pointer'>
            {wishlist.length === 0 ? <h1 className='text-red-600 font-bold text-[28px] text-center my-10'>No Wishlist Added</h1> : wishlist?.map((item: any) => <>
                <div className='flex my-3 items-center'>
                    <div className="img-box  w-[40px] h-[40px] bg-[#ece7e9] rounded-lg">
                        <img src={item.thumbnail} alt={item.name} className='w-full h-full object-cover' />
                    </div>
                    <div className='ml-[40px]'>
                        <p>Price : <span className='text-[#1882FF] text-[20px] leading-[22px] font-medium'>৳{item?.discountPercentage}</span> <span className='ml-2 text-[#77818C] text-[14px] leading-[16px] line-through'>৳{item?.price}</span></p>
                        <p>{item?.title}</p>
                    </div>
                </div>
                <hr />
            </>)}
        </div>
    )
}

export default WishList
export { }