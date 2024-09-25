import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// To import the BlogPage lazily we must remove this import (the import is eagerly being imported)
// import BlogPage, { loader as postsLoader } from './pages/Blog';
import HomePage from "./pages/Home";
// Going to import PostPage lazily
// import PostPage, { loader as postLoader } from "./pages/Post";
import RootLayout from "./pages/Root";

const BlogPage = lazy(() => import("./pages/Blog"));
const PostPage = lazy(() => import("./pages/Post"));

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "posts",
				children: [
					{
						index: true,
						element: (
							<Suspense fallback={<p>Loading...</p>}>
								<BlogPage />
							</Suspense>
						),
						// Importing the loading function lazily because it won't load until the Blog page is loaded.
						loader: () => import("./pages/Blog").then((module) => module.loader()),
					},
					{
						path: ":id",
						element: (
							<Suspense fallback={<p>Loading...</p>}>
								<PostPage />
							</Suspense>
						),
						loader: (meta) =>
							import("./pages/Post").then((module) => module.loader(meta)),
					},
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
