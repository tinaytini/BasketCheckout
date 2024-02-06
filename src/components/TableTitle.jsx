const titles = [
    'Product Name', 'Selected Quantity', 'Unit Price', 'Total Price'
]


const TableTitle = () => {
    return (
        <thead>
            <tr className="bg-gray-100 border-b border-gray-200 uppercase">
                {titles.map(name => (<th className='w-1/5 py-2'>{name}</th>))}
                <th className='w-1/5 py-2'></th>
            </tr>
        </thead>
    )
}

export default TableTitle;