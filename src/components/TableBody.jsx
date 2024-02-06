import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { removeAllItem } from "../redux/basketSlice";
import Button from './Button';

const TableBody = () => {
    const basket = useSelector((state) => state.basket);
    const dispatch = useDispatch()

    const handleRemoveItem = (product) => {
        dispatch(removeAllItem(product))
    }

    return(
        <tbody className="text-xs">
        {basket.map((product) => {
            console.log(product)
            return (
                <tr>
                    <td className='py-4 w-1/6'>{product.name}</td>
                    <td className='w-1/8'>
                        <select name="choice">
                            {Array.from({ length: product.quantity }).map((_, id) => (
                                <option value={id} selected={id + 1 === product.quantity}>{id + 1}</option>
                            ))}
                        </select>
                    </td>
                    <td className='w-1/8'>£{product.price}</td>
                    <td className='w-1/8'>£1.01</td>
                    <td>
                        <Button onClick={() => handleRemoveItem(product)} color='red'>Remove All</Button>
                    </td>
                </tr>
            )
        })}
    </tbody>
    )
}

export default TableBody;