import { Fragment } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
	return (
		<Fragment>
			<Head>
				<title>React Meetups</title>
				<meta
					name="description"
					content="Browse a huge list of highly active React meetups!"
				></meta>
			</Head>
			<MeetupList meetups={props.meetups}></MeetupList>
		</Fragment>
	);
};

// // Only if you need it for data that changes frequently
// export async function getServerSideProps(context) {
// 	// request object
// 	const req = context.req;
// 	// response object
// 	const res = context.res;

// 	// fetch data form an API
// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUPS,
// 		},
// 	};
// }

export async function getStaticProps() {
	// fetch data from an API (our MONGODB, backend database)
	// process.env.MONGO_URI is from the .env file
	const client = await MongoClient.connect(process.env.MONGO_URI);
	const db = client.db();

	const meetupsCollection = db.collection("meetups");

	const meetups = await meetupsCollection.find().toArray();

	client.close();

	return {
		props: {
			meetups: meetups.map((meetup) => ({
				title: meetup.title,
				address: meetup.address,
				image: meetup.image,
				id: meetup._id.toString(),
			})),
		},
		// regenerated every 1 second if there are requests coming in from this page
		revalidate: 1,
	};
}

export default HomePage;
