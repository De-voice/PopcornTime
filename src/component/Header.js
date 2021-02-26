import React from "react";
import Input from "./Input";
import Nav from "./Nav";



const Header = () => {
    return (
			<header className="bg-landingImage bg-no-repeat bg-center bg-cover pb-1 md:h-screen w-screen flex flex-col  mb-12">
				<Nav />
				<section className="section self-center text-center mt-48 md:mt-80 text-gray-400">
					<h1 className="mb-2 tracking-wider md:text-2xl">
						The Best Free Movie App
					</h1>
					<h3 className="tracking-wider text-sm md:text-xl">
						Watch & Enjoy Full-HD Movies and TV Shows for Free!
					</h3>
				</section>

				<form
					action=""
					className="mx-auto mt-11 md:mt-20 w-11/12 md:w-1/3 block md:flex md:px-3 overflow-hidden py-2 px-3 self-end ">
					<Input
						type="text"
						name=""
						value=""
						placeholder="search favourite movies and tv shows"
						onChange={() => console.log("onchange")}
						className="py-2 px-3 w-full outline-none border-none text-black "
					/>
					<Input
						className="bg-black text-gray-200 pb-2 pt-1 text-center px-3 mx-auto ml-28 mb-1 mt-2 md:ml-0  md:mb-0 md:mt-0 outline-none border-none cursor-pointer"
						type="submit"
						name=""
						value="Submit "
					/>
				</form>
			</header>
		);
}

export default Header