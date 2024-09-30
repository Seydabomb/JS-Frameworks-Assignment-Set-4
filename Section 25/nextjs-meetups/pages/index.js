import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
	{
		id: "m1",
		title: "A first Meetup",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Lehesten_2012_x14.JPG/1024px-Lehesten_2012_x14.JPG",
		address: "Some Address 5, 12345 Some City",
		description: "This is a first meetup!",
	},
	{
		id: "m2",
		title: "A Second Meetup",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Lehesten_2012_x14.JPG/1024px-Lehesten_2012_x14.JPG",
		address: "Some Address 10, 12345 Some City",
		description: "This is a second meetup!",
	},
];

const HomePage = (props) => {
	return <MeetupList meetups={props.meetups}></MeetupList>;
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
	// fetch data from an API
	return {
		props: {
			meetups: DUMMY_MEETUPS,
		},
		// regenerated every 1 second if there are requests coming in from this page
		revalidate: 1,
	};
}

export default HomePage;
