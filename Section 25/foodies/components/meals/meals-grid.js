import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

export default function MealsGrid({ meals }) {
	return (
		<ul className={classes.meals}>
			{meals.map((meal) => (
				<li key={meal.id}>
					{/* Spreads out all the meal properties as props onto the end*/}
					<MealItem {...meal}></MealItem>
				</li>
			))}
		</ul>
	);
}
