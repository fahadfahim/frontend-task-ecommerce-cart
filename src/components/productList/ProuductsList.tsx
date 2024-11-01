import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { fetchProducts } from '../../features/products/productsSlice';
import ProductCard from '../productCard/ProductCard';

const ProductList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const products = useSelector((state: RootState) => state.products.items);
    const status = useSelector((state: RootState) => state.products.status);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [dispatch, status]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {products.map(product => (
                <ProductCard product={product} key={product.id} />
            ))}
        </div>
    );
};

export default ProductList;
export { }
