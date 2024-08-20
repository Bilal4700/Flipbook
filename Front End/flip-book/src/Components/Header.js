import React from "react";
import "../Styles/Header.css";

export default function Header(props) {
	return (
		<header className="App-header">
			<nav className="navbar">
				<div className="nav-title">
					<h1>{props.title}</h1>
				</div>
				<div className="nav-links">
					<a href="/" className="Home">
						Home
					</a>
          <a href="#" className="Make your own">
						Make your own
					</a>
					<a href="#" className="History">
						History
					</a>
				</div>
			</nav>
		</header>
	);
}
