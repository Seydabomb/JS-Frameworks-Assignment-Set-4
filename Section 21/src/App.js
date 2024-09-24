import {
	createBrowserRouter,
	// createRoutesFromElements,
	RouterProvider,
	// Route,
} from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import ProductDetailPage from "./pages/ProductDetail";
import ErrorPage from "./pages/Error";

// '/' is the main page and we have us route to the HomePage page
const router = createBrowserRouter([
	// Relative Pathing. It appends the children paths to the parent "/" path
	{
		path: "/",
		element: <RootLayout></RootLayout>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			// index:true means that route should be the default one displayed when in the parent
			{ index: true, element: <HomePage></HomePage> },
			{ path: "products", element: <ProductsPage></ProductsPage> },
			{ path: "products/:productId", element: <ProductDetailPage></ProductDetailPage> },
		],
	},
	// { Absolute Pathing
	// 	path: "/",
	// 	element: <RootLayout></RootLayout>,
	// 	errorElement: <ErrorPage></ErrorPage>,
	// 	children: [
	// 		{ path: "/", element: <HomePage></HomePage> },
	// 		{ path: "/products", element: <ProductsPage></ProductsPage> },
	// 		{ path: "/products/:productId", element: <ProductDetailPage></ProductDetailPage> },
	// 	],
	// },
]);

// const routeDefinitions = createRoutesFromElements(
// 	<Route>
// 		<Route path="/" element={<HomePage></HomePage>}></Route>
// 		<Route path="/products" element={<ProductsPage></ProductsPage>}></Route>
// 	</Route>,
// );

// const router = createBrowserRouter(routeDefinitions);

function App() {
	return <RouterProvider router={router}></RouterProvider>;
}

export default App;
