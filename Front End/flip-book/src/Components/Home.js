import React from "react";
import "../Styles/Home.css";
import flipbookArt from '../assets/flipbookart.png';


function Home(props) {
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
        <img src={flipbookArt} alt="Flipbook Art" width="1500"/>
			</div>
		</div>
	);
}

export default Home;
