import React, {useState} from 'react'
import ItemList from './ItemList';


const RestaurantCategory = ({ data, showItems,setShowIndex, dummy }) => {


    // // console.log(data);
    // // // console.log(data.data.title);
    // console.log(data.data.itemCards);
    const handleClick = () => {
         setShowIndex();
};
  return (
    <div>
        {/* {Header section} */}

        <div className ="w-6/12 mx-auto my-4 bg-green-200 shadow-lg p-2 ">
            <div className='flex justify-between cursor-pointer' onClick={handleClick}>
            <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
            <span>⬇️</span>
            </div>
            {showItems && <ItemList items = {data.itemCards} dummy={dummy} />}
        </div>
        
        {/* Accordian Body (MENU) */}

        

    </div>
  )
}

export default RestaurantCategory;