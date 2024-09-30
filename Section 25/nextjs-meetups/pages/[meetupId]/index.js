import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
	return (
		<MeetupDetail
			image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Lehesten_2012_x14.JPG/1024px-Lehesten_2012_x14.JPG"
			title="First Meetup"
			address="Some Street 5, Some City"
			description="This is a first meetup"
		/>
	);
}

export async function getStaticPaths() {
	return {
		// fallback: false means all the paths we put down is all the dynamic paths for this website. So if a use puts a url that doesn't lead to any of those dynamic paths, they'll get a 404 error.
		fallback: false,
		paths: [
			{
				params: {
					meetupId: "m1",
				},
			},
			{
				params: {
					meetupId: "m2",
				},
			},
		],
	};
}

export async function getStaticProps(context) {
	// fetch data for a single meetup

	const meetupId = context.params.meetupId;

	console.log(meetupId);

	return {
		props: {
			meetupData: {
				image:
					"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Lehesten_2012_x14.JPG/1024px-Lehesten_2012_x14.JPG",
				id: { meetupId },
				title: "First Meetup",
				address: "Some Street 5, Some City",
				description: "This is a first meetup",
			},
		},
	};
}

export default MeetupDetails;
