import React from 'react';

function FoodCategories({ foodCategories, filteredCategoryFoods }) {
  return (
    <div className='btn-container'>
      {foodCategories.map((foodCat, index) => {
        return (
          <button
            type='button'
            className='filter-btn'
            key={index}
            onClick={() => filteredCategoryFoods(foodCat)}
          >
            {foodCat}
          </button>
        );
      })}
    </div>
  );
}

export default FoodCategories;
