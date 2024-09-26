import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { createNewEvent } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import { queryClient } from "../../util/http.js";

export default function NewEvent() {
	const navigate = useNavigate();

	// Sends request to the backend whenever we tell it to, so when we mention mutate we are sending the info to the backend
	const { mutate, isPending, isError, error } = useMutation({
		mutationFn: createNewEvent,
		onSuccess: () => {
			// It in the end tells React Query that the data fetched by certain queries is outdated now, that it should be marked as stale and that an immediate refetch should be triggered. Invalidates all events that have the 'events' key
			queryClient.invalidateQueries({ queryKey: ["events"] });
			navigate("/events");
		},
	});

	// Actually sends the data to the backend when the form is submitted
	function handleSubmit(formData) {
		mutate({ event: formData });
	}

	return (
		<Modal onClose={() => navigate("../")}>
			<EventForm onSubmit={handleSubmit}>
				{isPending && "Submitting..."}
				{!isPending && (
					<>
						<Link to="../" className="button-text">
							Cancel
						</Link>
						<button type="submit" className="button">
							Create
						</button>
					</>
				)}
			</EventForm>
			{isError && (
				<ErrorBlock
					title="Failed to create event"
					message={
						error.info?.message ||
						"Failed to create event. Please check your inputs and try again later!"
					}
				></ErrorBlock>
			)}
		</Modal>
	);
}
