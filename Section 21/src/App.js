import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";

// '/' is the main page and we have us route to the HomePage page
const router = createBrowserRouter([{ path: "/", element: <HomePage></HomePage> }]);

function App() {
	return <RouterProvider router={router}></RouterProvider>;
}

export default App;
