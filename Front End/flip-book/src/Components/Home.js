import React from "react";
import "../Styles/Home.css";
import flipbookArt from "../assets/flipbookart.png";
import { NavLink } from "react-router-dom";

function Home() {
	return (
		<div className="Home">
			<div className="Home-body">
				<h2>Welcome to the Flip Book Generator</h2>
				<p>
					Turn your favorite GIFs into a real-life flipbook experience! Upload
					your GIFs, watch as they come to life in a beautifully crafted PDF
					ready to be printed and transformed into your own physical flipbook.
					It’s fun, simple, and a perfect way to bring your digital memories
					into the real world. Whether it’s a memorable moment, a fun animation,
					or just something cool you found online, Flipbook Creator makes it
					easy to hold those moments in your hands. Start creating today!
				</p>
				<img src={flipbookArt} alt="Flipbook Art" width="1500" />
				<p>
					When you upload a GIF, the website breaks it down into frames, From
					these frames, it generates a series of images, which are then compiled
					into a PDF file. This PDF contains all the images in a sequence, ready
					for printing. Once printed, you can cut out the images, stack them in
					order, and flip through them to recreate the original animation in a
					physical format. It's a simple and fun way to bring your digital
					moments into the real world as a flipbook!
				</p>

				<NavLink to="/GifUploader">
					<button>Get Started</button>
				</NavLink>
			</div>
		</div>
	);
}

export default Home;
