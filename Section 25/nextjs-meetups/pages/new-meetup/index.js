import NewMeetupForm from "../../components/meetups/NewMeetupForm";

// our-domain.com/new-meetup

const NewMeetupPage = () => {
	function addMeetupHandler(enteredMeetupData) {}

	return <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>;
};

export default NewMeetupPage;
