"use server";

import { redirect } from "next/navigation";

import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
	if (!text || text.trim() === "") {
	}
}

// information to be sent to our database from the form
export async function shareMeal(prevState, formData) {
	const meal = {
		title: formData.get("title"),
		summary: formData.get("summary"),
		instructions: formData.get("instructions"),
		image: formData.get("image"),
		creator: formData.get("name"),
		creator_email: formData.get("email"),
	};

	if (
		isInvalidText(meal.title) ||
		isInvalidText(meal.summary) ||
		isInvalidText(meal.instructions) ||
		isInvalidText(meal.creator) ||
		isInvalidText(meal.creator_email) ||
		!meal.creator_email.includes("@") ||
		!meal.image ||
		meal.image.size === 0
	) {
		return {
			message: "Invalidate input.",
		};
	}

	await saveMeal(meal);
	// the second argument of "layout" means all nested pages under /meals will also be revalidated. But I don't need that here so I will delete it
	revalidatePath("/meals");
	redirect("/meals");
}
