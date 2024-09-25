import {
	Form,
	useNavigate,
	useNavigation,
	useActionData,
	json,
	redirect,
} from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
	// pulls the action data from events.js in routes in the backend
	const data = useActionData();

	const navigate = useNavigate();
	const navigation = useNavigation();

	const isSubmitting = navigation.state === "submitting";
	function cancelHandler() {
		navigate("..");
	}

	return (
		<Form method={method} className={classes.form}>
			{/* Outputting the errors on the top of the form */}
			{data && data.errors && (
				<ul>
					{Object.values(data.errors).map((err) => (
						<li key={err}>{err}</li>
					))}
				</ul>
			)}
			<p>
				<label htmlFor="title">Title</label>
				<input
					id="title"
					type="text"
					name="title"
					required
					defaultValue={event ? event.title : ""}
				/>
			</p>
			<p>
				<label htmlFor="image">Image</label>
				<input
					id="image"
					type="url"
					name="image"
					required
					defaultValue={event ? event.image : ""}
				/>
			</p>
			<p>
				<label htmlFor="date">Date</label>
				<input
					id="date"
					type="date"
					name="date"
					required
					defaultValue={event ? event.date : ""}
				/>
			</p>
			<p>
				<label htmlFor="description">Description</label>
				<textarea
					id="description"
					name="description"
					rows="5"
					required
					defaultValue={event ? event.description : ""}
				/>
			</p>
			<div className={classes.actions}>
				<button type="button" onClick={cancelHandler} disabled={isSubmitting}>
					Cancel
				</button>
				<button disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Save"}</button>
			</div>
		</Form>
	);
}

export default EventForm;

// action function that is a prop on NewEvent in App.js
export async function action({ request, params }) {
	const method = request.method;
	const data = await request.formData();

	// the name attributes in App.js have to match the strings we put in
	const eventData = {
		title: data.get("title"),
		image: data.get("image"),
		date: data.get("date"),
		description: data.get("description"),
	};

	let url = "http://localhost:8080/events";

	if (method === "PATCH") {
		const eventId = params.eventId;
		url = "http://localhost:8080/events/" + eventId;
	}

	const response = await fetch(url, {
		method: method,
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(eventData),
	});

	// Our backend has a 422 error response
	if (response.status === 422) {
		return response;
	}

	// Error response
	if (!response.ok) {
		throw json({ message: "Could not save event." }, { status: 500 });
	}

	// Redirects the user to another page
	return redirect("/events");
}
