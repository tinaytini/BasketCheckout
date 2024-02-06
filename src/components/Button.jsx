import React from 'react';

const Button = ({ color, onClick, children }) => {
    let className = ''

    switch (color) {
        case 'grey': className = 'text-xs p-2 rounded border border-gray-300 bg-gray-200 hover:bg-gray-300 hover:bg-gray-400';
            break;
        case 'red': className = 'text-xs p-2 rounded border border-red-600 bg-red-500 hover:bg-red-600 hover:bg-red-700 text-white';
            break
        case 'blue': className = 'ml-4 text-s p-2 rounded border border-blue-600 bg-blue-500 hover:bg-blue-600 hover:bg-blue-700 text-white';
            break
        default: className = '';
    };

    return (
        <button className={className} onClick={onClick}>{children}</button>
    )


}

export default Button