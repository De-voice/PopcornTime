import React from 'react';
import Logo from '../assets/logo.png'

function Nav() {
    return (
			<>
				<nav className="bg-gray-800  flex justify-between items-center px-2 fixed w-screen">
					<ul className="flex items-center">
						<li className="text-sm 2xl:text-2xl hover:text-gray-300">
							<a href="!#">Movies</a>
						</li>
						<li className="ml-6 text-sm 2xl:text-2xl hover:text-gray-300">
							<a href="!#">Tv shows</a>
						</li>
					</ul>
					<a className="cursor-pointer mt-4" href="!#">
						<img className="w-24 2xl:w-40 " src={Logo} alt="" />
					</a>

					<a href="!#">
						<i className="  fas fa-heart pr-2 fa-md"></i>
					</a>
				</nav>
			</>
		);
}

export default Nav
