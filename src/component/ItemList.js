import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="text-xl font-semibold">{item.card.info.name} -</span>
              <span className="text-l font-bold bg-black text-white rounded-lg p-1">
                 ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-l">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 flex flex-col items-center justify-between">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-full rounded-lg mb-2"
            />
            <div className="flex items-center">
              <button
                className="p-2 rounded-lg shadow-lg bg-red-500 text-white mx-2"
                onClick={() => handleRemoveItem(item)}
              >
                Remove -
              </button>
              <span className="mx-2">{item.quantity}</span>
              <button
                className="p-2 rounded-lg shadow-lg bg-green-500 text-white mx-2"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
