import "./App.css";
import "./Styles/Header.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import History from "./Components/History";
import GifUploader from "./Components/GifUploader";
import { createBrowserRouter , RouterProvider } from "react-router-dom";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/GifUploader",
			element: <GifUploader />,
		},
		{
			path: "/History",
			element: <History />,
		},
	]);

	return (
		<div className="App">
      <Header title="Flip Books"/>
      <RouterProvider router = {router}/>
		</div>
	);
}

export default App;
