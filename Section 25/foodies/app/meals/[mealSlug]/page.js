import Image from "next/image";
import { notFound } from "next/navigation";

import { getMeal } from "@/lib/meals";
import classes from "./page.module.css";
import NotFound from "../not-found";

export async function generateMetadata({ params }) {
	const meal = getMeal(params.mealSlug);

	if (!meal) {
		NotFound();
	}

	return {
		title: meal.title,
		description: meal.summary,
	};
}

export default function MealDetailsPage({ params }) {
	// fetching our meal form our database
	const meal = getMeal(params.mealSlug);

	// if the meal isn't found, it will find the closest error page
	if (!meal) {
		notFound();
	}

	// Look for all line breaks globally and replace them with our br tag so then they are separated out
	meal.instructions = meal.instructions.replace(/\n/g, "<br />");

	return (
		<>
			<header className={classes.header}>
				<div className={classes.image}>
					{/* Don't know the dimensions of the image so we will use the fill prop */}
					<Image src={meal.image} alt={meal.title} fill></Image>
				</div>
				<div className={classes.headerText}>
					<h1>{meal.title}</h1>
					<p className={classes.creator}>
						{/* User clicks the name to send an email to the person */}
						by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
					</p>
					<p className={classes.summary}>{meal.summary}</p>
				</div>
			</header>
			<main>
				<p
					className={classes.instructions}
					dangerouslySetInnerHTML={{
						__html: meal.instructions,
					}}
				></p>
			</main>
		</>
	);
}
