import { useFetcher } from "react-router-dom";

import classes from "./NewsletterSignup.module.css";
import { useEffect } from "react";

function NewsletterSignup() {
	// triggers an action without navigating to a page where the action belongs
	const fetcher = useFetcher();
	const { data, state } = fetcher;

	// Updating the UI
	useEffect(() => {
		if (state === "idle" && data && data.message) {
			window.alert(data.message);
		}
	}, [data, state]);

	// Using the "Form" tag instead will make us navigate to the newsletter tab after clicking signup in the navbar. Which is not good! So we use fetcher.
	return (
		<fetcher.Form method="post" action="/newsletter" className={classes.newsletter}>
			<input
				type="email"
				placeholder="Sign up for newsletter..."
				aria-label="Sign up for newsletter"
			/>
			<button>Sign up</button>
		</fetcher.Form>
	);
}

export default NewsletterSignup;
