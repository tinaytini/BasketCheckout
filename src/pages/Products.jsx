import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productSamples } from '../fixtures/productSamples';
import { addProduct, removeProduct } from '../redux/basketSlice'
import { Link } from 'react-router-dom';
import ItemsCount from '../components/ItemsCounts';
import Button from '../components/Button';

const Products = () => {
    const products = useSelector((state) => state.basket)
    const dispatch = useDispatch()

    let productCount = 0
    let totalPrice = 0

    products.forEach(({ quantity, price }) => {
        productCount += quantity
        totalPrice += price * quantity
    })
    console.log(productCount, totalPrice)

    const handleAdd = (product) => {
        console.log('CHECK')
        dispatch(addProduct(product))
        
    }

    const handleRemove = (product) => {
        dispatch(removeProduct(product))
    }

    return (
        <>
            <div className='flex'>
                <ItemsCount title='Basket Items:' count={productCount} />
                <ItemsCount title='Total Price:' count={`£${Number(totalPrice).toFixed(2)}`} />
            </div>
            <div className='flex flex-col'>
                {
                    productSamples.map(product => (
                        <div key={product.sku} className='flex flex-row justify-between items-center mt-4'>
                            <div className='w-1/6 font-bold'>{product.name}</div>
                            <div className='w-1/4'>{product.description}</div>
                            <div className='w-1/8'>£{product.price}</div>
                            <Button onClick={() => handleAdd(product)} color='grey'>Add to Basket</Button>
                            <Button onClick={() => handleRemove(product)} color='red'>Remove from Basket</Button>
                        </div>
                    ))
                }
            </div>
            <div className='flex flex-row justify-end mt-6'>
                <Link to='/checkout' className='text-s p-2 rounded border border-blue-600 bg-blue-500 hover:bg-blue-600 hover:bg-blue-700 text-white'>Proceed to Checkout</Link>
            </div>
        </>
    )
}

export default Products
