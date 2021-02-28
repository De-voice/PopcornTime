import React from "react";
import Input from "./Input";





const Header = () => {
    return (
			<header className="bg-landingImage bg-no-repeat bg-center bg-cover  md:h-1/2 w-screen flex flex-col  mb-12">
				<form className="block absolute top-32 left-20 sm:hidden" action="">
					<Input
						type="text"
						className="py-1 px-3 outline-none sm:pr-14  border-none text-black"
						name=""
						value=""
						onChange={() => console.log("ello")}
						placeholder="search..."
					/>
				</form>
				<section className="section self-center text-center mt-48 sm:mt-80 text-gray-400">
					<h1 className="mb-2 -mt-2 sm:m-0 tracking-wider sm:text-4xl">
						The Best Free Movie App
					</h1>
					<h3 className="tracking-wider text-sm md:text-xl">
						Watch & Enjoy Full-HD Movies and TV Shows for Free!
					</h3>
				</section>
			</header>
		);
}

export default Header