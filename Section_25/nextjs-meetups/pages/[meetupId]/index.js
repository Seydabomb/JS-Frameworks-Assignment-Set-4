import { Fragment } from "react";
import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";

import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
	return (
		<Fragment>
			<Head>
				<title>{props.meetupData.title}</title>
				<meta name="description" content={props.meetupData.description}></meta>
			</Head>

			<MeetupDetail
				image={props.meetupData.image}
				title={props.meetupData.title}
				address={props.meetupData.address}
				description={props.meetupData.description}
			/>
		</Fragment>
	);
}

export async function getStaticPaths() {
	// connect to our database
	const client = await MongoClient.connect(process.env.MONGO_URI);
	const db = client.db();

	const meetupsCollection = db.collection("meetups");

	// fetching the document objects but only their id's
	const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

	client.close();

	return {
		// fallback: false means all the paths we put down is all the dynamic paths for this website. So if a use puts a url that doesn't lead to any of those dynamic paths, they'll get a 404 error.
		fallback: false,
		paths: meetups.map((meetup) => ({
			params: {
				meetupId: meetup._id.toString(),
			},
		})),
	};
}

export async function getStaticProps(context) {
	// fetch data for a single meetup

	// Grabbing the id from the url
	const meetupId = context.params.meetupId;

	// connect to our database
	const client = await MongoClient.connect(process.env.MONGO_URI);
	const db = client.db();

	const meetupsCollection = db.collection("meetups");

	// fetching one document with the id of meetupId that we defined above
	const selectedMeetup = await meetupsCollection.findOne({ _id: new ObjectId(meetupId) });

	client.close();

	return {
		props: {
			meetupData: {
				id: selectedMeetup._id.toString(),
				title: selectedMeetup.title,
				address: selectedMeetup.address,
				image: selectedMeetup.image,
				description: selectedMeetup.description,
			},
		},
	};
}

export default MeetupDetails;
