import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import TextField from "./TextField";

function Nav() {
	return (
		<>
			<nav className="bg-gray-800  flex sm:justify-around justify-between items-center sm:px-2 py-2 fixed w-screen">
				<ul className="flex items-center">
					<li className="text-sm sm:text-2xl hover:text-gray-300">
						<Link to="/movies">Movies</Link>
					</li>
					<li className="ml-6 text-sm sm:text-2xl sm:ml-12 hover:text-gray-300">
						<Link to="/shows">Tv shows</Link>
					</li>
				</ul>
				<span className="cursor-pointer mt-4 sm:-mr-16 self-center">
					<Link to="/">
						<img className="w-24 2xl:w-40 " src={Logo} alt="" />
					</Link>
				</span>

				<TextField/>
				<Link to="favourite">
					<i className="  fas fa-heart pr-2 fa-md"></i>
				</Link>
			</nav>
		</>
	);
}

export default Nav;
