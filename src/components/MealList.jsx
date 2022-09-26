import React from 'react'
import Meal from '../components/Meal'


export default  function MealList(props) {
    const {meals} = props
  return (
    <div className='list' >
        {meals.map(meal => (
            <Meal key={meal.idMeal} {...meal}  />
        ))}
    </div>
  )
}
