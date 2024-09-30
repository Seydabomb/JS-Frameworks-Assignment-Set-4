import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
	// Slows things down if you want a delay, typically you don't want a delay.
	await new Promise((resolve) => setTimeout(resolve, 5000));

	// throw new Error("Loading meals failed");

	// For a single row, use ".get()" instead of ".all()"
	return db.prepare("SELECT * FROM meals").all();
}

// Doesn't return a promise since we don't have the "async" word
export function getMeal(slug) {
	// Prevents from sql injection attacks
	return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

// pulling the data from the form
export async function saveMeal(meal) {
	// lower: true, makes all characters lowercase
	meal.slug = slugify(meal.title, { lower: true });

	// sanitizes and cleans the instructions
	meal.instructions = xss(meal.instructions);

	// Outputs the file extension (jpg or png)
	const extension = meal.image.name.split(".").pop();

	const fileName = `${meal.slug}.${extension}`;
	const stream = fs.createWriteStream(`public/images/${fileName}`);

	const bufferedImage = await meal.image.arrayBuffer();

	stream.write(Buffer.from(bufferedImage), (error) => {
		if (error) {
			throw new Error("Saving image failed!");
		}
	});

	// removed the "public" from the front since when it is deployed the "public" folder will end up just being the root
	meal.image = `/images/${fileName}`;

	// prettier-ignore
	db.prepare(`
        INSERT INTO meals
            (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (
            @title, 
            @summary, 
            @instructions, 
            @creator, 
            @creator_email,
            @image, 
            @slug
        )
    `).run(meal);
}
