import React from 'react';

const CardNumField = ({digits}) => {
    return(
        <div className='flex flex-row justify-center items-center'>
        <label>Input Your Card Number</label>
        <input className='w-1/4 p-2 border rounded border-gray-400 ml-4' type='text' />
    </div>
    )
}

export default CardNumField;