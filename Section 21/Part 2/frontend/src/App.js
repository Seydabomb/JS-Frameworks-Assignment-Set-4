// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import NewEventPage from "./pages/NewEvent";
import EventDetailPage, { loader as eventDetailLoader } from "./pages/EventDetail";
import EditEventPage from "./pages/EditEvent";
import EventsRootLayout from "./pages/EventsRoot";
import ErrorPage from "./pages/Error";

// '/' is the main page and we have us route to the HomePage page
const router = createBrowserRouter([
	// Relative Pathing. It appends the children paths to the parent "/" path
	{
		path: "/",
		element: <RootLayout></RootLayout>,
		// A root level error element will catch an error thrown anywhere from the lower levels.
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			// index:true means that route should be the default one displayed when in the parent
			{ index: true, element: <HomePage></HomePage> },
			{
				path: "events",
				element: <EventsRootLayout></EventsRootLayout>,
				children: [
					// Loader means that function will start rendering first before the page does. Only can access it within lower or the same hierarchy level. For example, the parent cannot access the loader data.
					{
						index: true,
						element: <EventsPage></EventsPage>,
						loader: eventsLoader,
					},
					{
						path: ":eventId",
						id: "event-detail",
						loader: eventDetailLoader,
						children: [
							{
								index: true,
								element: <EventDetailPage></EventDetailPage>,
							},
							{ path: ":eventId/edit", element: <EditEventPage></EditEventPage> },
						],
					},
					{ path: "new", element: <NewEventPage></NewEventPage> },
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router}></RouterProvider>;
}

export default App;
