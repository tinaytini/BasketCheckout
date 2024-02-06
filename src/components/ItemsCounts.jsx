import React from "react"

const ItemsCount = ({ title, count }) => (
    <nav className="flex flex-row justify-end p-4 border-b text-base">
        <div className="mr-4">{title} {count}</div>
    </nav>
)

export default ItemsCount
