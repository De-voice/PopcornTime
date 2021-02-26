import React from "react";
import PropTypes from "prop-types"

function SubMain({ title, description, img, alt }) {
	return (
		<div className="flex items-center gap-x-7 gap-y-20 mb-12  sm:h-3/4 ">
			<img className="self-start -ml-6 md:mb-0 sm:w-56" src={img} alt={alt} />
			<div>
				<h1 className="text-black font-bold sm:text-2xl">{title}</h1>
				<h3 className="text-black text-xs sm:text-lg my-3">{description}</h3>
			</div>
		</div>
	);
}

SubMain.propTypes = {
    title: PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    img:PropTypes.string.isRequired,
    alt:PropTypes.string.isRequired,
};

export default SubMain;
