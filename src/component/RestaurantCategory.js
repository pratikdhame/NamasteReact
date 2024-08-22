import ItemList from './ItemList.js';
import { useState } from 'react';

const RestaurantCategory = ({data}) => {

    const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowItems(!showItems);
    }
    return (
    <div>
        <div className="mx-auto bg-gray-50 shadow-lg p-4 border-gray-200 border-b-2 text-left">
        <div className='flex justify-between cursor-pointer' onClick={handleClick}>
            <span className="font-bold text">{data.title}({data.itemCards.length})</span>
            <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data.itemCards}/>}      
        </div>
    </div>
    );
}

export default RestaurantCategory;

