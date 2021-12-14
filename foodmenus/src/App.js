import React, { useState } from 'react';
import FoodsData from './data';
import Categories from './FoodCategories';
import FoodMenus from './FoodMenus';

//Filter and return unique categories
const allCategories = [
  'all',
  ...new Set(
    FoodsData.map((item) => {
      return item.category;
    })
  ),
];
console.log(allCategories);

function App() {
  const [foodItems, setFoodItems] = useState(FoodsData);
  const [foodCategories, setFoodCategories] = useState(allCategories);

  // filter the category from the food item data and return the foods
  const filteredCategoryFoods = (category) => {
    if (category === 'all') {
      setFoodItems(FoodsData);
      return;
    }
    const filteredCategories = FoodsData.filter((food) => {
      return food.category === category;
    });
    setFoodItems(filteredCategories);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories
          foodCategories={foodCategories}
          filteredCategoryFoods={filteredCategoryFoods}
        />
        <FoodMenus foodItems={foodItems} />
      </section>
    </main>
  );
}

export default App;
