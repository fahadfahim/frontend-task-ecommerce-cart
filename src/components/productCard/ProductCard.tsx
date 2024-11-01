import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { FaRegTrashAlt } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { MdAddShoppingCart } from "react-icons/md";
import { BsEye } from "react-icons/bs";
import './productCard.css';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { addToCart, removeFromCart } from '../../store/cart/cartSlice';
import { useSelector } from 'react-redux';
import { toggleWishlist } from '../../store/wishlist/wishListSlice';

const ProductCard = ({ product }: any) => {
    const dispatch = useDispatch<AppDispatch>();
    const cart = useSelector((state: RootState) => state.cart.items);
    const wishlist = useSelector((state: RootState) => state.wishlist.items);

    const handleAddCart = (product: any) => {
        if (product.stock < 2) {
            alert('Out of stock');
        } else {
            dispatch(addToCart(product));

        }
    };

    const handleWishList = (product: any) => {
        dispatch(toggleWishlist(product));
    }

    const handleRemoveCart = (product: any) => {
        dispatch(removeFromCart(product));
    }
    const isInCart = cart.find((item) => item.id === product.id);
    const wishListItem = wishlist.find((item) => item.id === product.id);


    return (
        <div className='w-[209px] m-auto cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg p-[4px] bg-white rounded-lg relative'>
            {product?.discountPercentage < product.price && <span className=" absolute z-50 left-[-4px] rounded-tl-md rounded-bl-md top-[15px] ribbon py-[4px] pr-[6px] pl-[8px] text-white text-[12px] font-medium">- ৳ {(product?.price - product?.discountPercentage).toFixed(2)}</span>}
            <div className='card-img-box w-[200px] h-[210px] bg-[#ece7e9] rounded-lg m-auto relative'>
                <img src={product.thumbnail} alt={product.title} className="w-full h-full object-cover" />
                <div className="overlay-area w-full h-full  absolute top-0 rounded-lg flex flex-col items-end">
                    <div className='heart mt-[10px] mr-[10px]'>
                        <button className="heart " onClick={() => handleWishList(product)}>
                            {wishListItem ? <GoHeartFill color='#fff' size={23} /> : <GoHeart color='#fff' size={23} />}
                        </button>
                    </div>

                    <div className="bottom-btn flex flex-col w-11/12 mx-auto mt-[80px]">

                        {isInCart ? <div className='bg-[#03A629] rounded-md flex justify-between items-center px-2 py-[8px] mb-[8px]'>
                            <button onClick={() => handleRemoveCart(product)}>
                                <FaRegTrashAlt color='white' />
                            </button>
                            <p className='text-[12px] text-white'>{isInCart.quantity} added in cart
                            </p><button onClick={() => handleAddCart(product)}>
                                <GoPlus color='white' />
                            </button>
                        </div> : <button onClick={() => handleAddCart(product)} className='overlay-btn text-white px-[16px] py-[6px] border border-[#fff] rounded-md flex items-center justify-center font-semibold mb-2'>
                            <MdAddShoppingCart className='mr-1' />Add to Cart
                        </button>}

                        <button className='overlay-btn text-white px-[16px] py-[6px] border border-[#fff] rounded-md flex items-center justify-center font-semibold'>
                            <BsEye className='mr-1' />Quick View
                        </button>
                    </div>
                </div>
            </div>
            <div className='prduct-info p-2'>
                <p className='text-[#5A6573] text-[14px] leading-[20px] mb-1'>{product?.brand || product.category}</p>
                <p className='text-[#1A2B3D] text-[16px] leading-[22px] font-medium line-clamp-2'>{product?.title}</p>
                <div className="mt-3">
                    {product?.discountPercentage ? <div><span className='text-[#1882FF] text-[20px] leading-[22px] font-medium'>৳{product?.discountPercentage}</span><span className='ml-2 text-[#77818C] text-[14px] leading-[16px] line-through'>৳{product?.price}</span></div> : <div><span>{product?.price}</span></div>}
                </div>
            </div>
        </div>
    )
}

export default ProductCard
export { }