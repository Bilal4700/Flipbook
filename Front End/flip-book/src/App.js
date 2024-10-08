import "./App.css";
import "./Styles/Header.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import GifUploader from "./Components/GifUploader";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<>
					<Header title="Flip Books" />
					<Home />
				</>
			),
		},
		{
			path: "/GifUploader",
			element: (
				<>
					<Header title="Flip Books" />
					<GifUploader />
				</>
			),
		},
	]);

	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
