import { NavLink } from 'react-router-dom';
import './navbar.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Badge from '../badge/Badge';

const navLinks = [
    { name: 'Products', path: '/' },
    { name: 'Carts', path: '/cartlist' },
    { name: 'Wishlist', path: '/wishlist' }
];

const Navbar = () => {
    const cart = useSelector((state: RootState) => state.cart.items);
    const wishlist = useSelector((state: RootState) => state.wishlist.items);
    const totalProductCart = cart.reduce((total, item) => total + item?.quantity, 0)

    return (
        <nav className='bg-[#9591e5] sticky top-0 z-50'>
            <ul className='flex items-center justify-center py-4'>
                {navLinks.map((link) => (
                    <li key={link.path} className='mx-[20px]'>
                        <NavLink className='text-white text-[16px] font-bold relative' to={link.path}>
                            {link.name}
                            {link.name === 'Carts' && <Badge count={totalProductCart} />}
                            {link.name === 'Wishlist' && <Badge count={wishlist.length} />}                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
