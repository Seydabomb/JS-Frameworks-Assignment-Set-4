// /api/new-meetup

import { MongoClient } from "mongodb";
// require("dotenv").config();

// req = request, res = response
async function handler(req, res) {
	// POST /api/new-meetup
	if (req.method === "POST") {
		// the data of the request
		const data = req.body;

		const client = await MongoClient.connect(process.env.MONGO_URI);
		const db = client.db();

		const meetupsCollection = db.collection("meetups");

		const result = await meetupsCollection.insertOne(data);

		console.log(result);

		client.close();

		res.status(201).json({ message: "Meetup inserted!" });
	}
}

export default handler;
