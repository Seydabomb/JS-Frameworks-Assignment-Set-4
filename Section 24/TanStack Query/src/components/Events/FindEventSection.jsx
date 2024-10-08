import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchEvents } from "../../util/http";
import LoadingIndicator from "../UI/LoadingIndicator";
import ErrorBlock from "../UI/ErrorBlock";
import EventItem from "./EventItem";

export default function FindEventSection() {
	const searchElement = useRef();
	// Figures out what the user is inputting into the "Find your next event!" search-bar
	const [searchTerm, setSearchTerm] = useState();

	// Managing the query
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["events", { searchTerm: searchTerm }],
		queryFn: ({ signal, queryKey }) => fetchEvents({ signal, ...queryKey[1] }),
		enabled: searchTerm !== undefined,
	});

	function handleSubmit(event) {
		event.preventDefault();
		setSearchTerm(searchElement.current.value);
	}

	let content = <p>Please enter a search term and to find events.</p>;

	if (isLoading) {
		content = <LoadingIndicator></LoadingIndicator>;
	}

	if (isError) {
		content = (
			<ErrorBlock
				title="An error occurred"
				message={error.info?.message || "Failed to fetch events."}
			></ErrorBlock>
		);
	}

	if (data) {
		content = (
			<ul className="events-list">
				{data.map((event) => (
					<li key={event.id}>
						<EventItem event={event}></EventItem>
					</li>
				))}
			</ul>
		);
	}

	return (
		<section className="content-section" id="all-events-section">
			<header>
				<h2>Find your next event!</h2>
				<form onSubmit={handleSubmit} id="search-form">
					<input type="search" placeholder="Search events" ref={searchElement} />
					<button>Search</button>
				</form>
			</header>
			{content}
		</section>
	);
}
