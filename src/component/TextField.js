import React from 'react';
import Input from "./Input"

function TextField() {
    return (
			<form
				action=""
				className=" hidden sm:py-0  sm:-mr-24 sm:flex sm:items-center relative sm:w-24">
				<Input
					type="text"
					name=""
					value=""
					placeholder="search..."
					onChange={() => console.log("onchange")}
					className="py-3 px-3 outline-none sm:pr-14  border-none text-black "
				/>
				<i className="fas fa-search fa-2x absolute text-gray-300 sm:-right-36 z-10"></i>
			</form>
		);
}

export default TextField
