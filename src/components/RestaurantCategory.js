import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({
  category,
  expandItems,
  handleExpandItemsList,
}) => {
  return (
    <div className="w-full">
      <div
        onClick={handleExpandItemsList}
        className="flex cursor-pointer justify-between w-full my-4 py-2"
      >
        <span>{`${category?.title} (${category?.itemCards?.length})`}</span>
        <span>🔽</span>
      </div>
      {expandItems && <ItemList items={category?.itemCards} />}
      <div className="w-full p-2 bg-slate-100"></div>
    </div>
  );
};

export default RestaurantCategory;
