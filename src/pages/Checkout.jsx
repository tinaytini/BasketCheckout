import React from 'react';
// import { useSelector } from 'react-redux';
import ItemsCount from '../components/ItemsCounts';
import TableTitle from '../components/TableTitle';
import TableBody from  '../components/TableBody';
import CardNumField from '../components/CardNumField';
import Button from '../components/Button';
// import { removeProduct } from '../redux/basketSlice';


const Checkout = () => {
    // const basket = useSelector((state) => state.basket);
    return (
        <div>
            <div className='w-full p-16 text-sm'>
                <ItemsCount title='Basket Items:' count={3} />
                <div className='flex w-full justify-center m-4'>
                    <table className="w-3/4 text-center table-fixed">
                        <TableTitle />
                        <TableBody />
                    </table>
                </div>
                <ItemsCount title='Total Price:' count='£18.87' />
                <CardNumField />
                <div className='flex flex-row justify-end mt-6 px-8'>
                    <a href='/example_html/products' className='text-s p-2 rounded border border-gray-200 hover:bg-gray-200 hover:bg-gray-300'>Continue Shopping</a>
                    <Button color='blue'>Checkout</Button>
                </div>
            </div>
        </div>
    )
}

export default Checkout;