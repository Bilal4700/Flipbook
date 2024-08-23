import React from "react";
import "../Styles/Header.css";
import { NavLink } from "react-router-dom";
export default function Header(props) {
	return (
		<header className="App-header">
			<nav className="navbar">
				<div className="nav-title">
					<h1>{props.title}</h1>
				</div>
				<div className="nav-links">
					<NavLink to="/" style={({ isActive }) => ({color: isActive ? "red" : "",})}>
						Home
					</NavLink>
					<NavLink to="/GifUploader" style={({ isActive }) => ({color: isActive ? "red" : "",})}>
						Make your own
					</NavLink>
				</div>
			</nav>
		</header>
	);
}
