import React from 'react';
import PropTypes from "prop-types"

function Video({src,width,height,border,allow,title,className}) {
    return (
			<>
				{/* <video controls muted>
					<source src={src} type={type} />
				</video> */}
				<iframe
				  className={className}
                    title={title}
					width={width}
					height={height}
					src={src}
					frameBorder={border}
					allow={allow}
					allowFullScreen></iframe>
				;
			</>
		);
}

Video.propTypes = {
	src: PropTypes.string.isRequired,
	title: PropTypes.string,
	width: PropTypes.string.isRequired,
	height: PropTypes.string.isRequired,
	allow: PropTypes.string.isRequired,
	frameborder: PropTypes.string.isRequired,
	className:PropTypes.string,

};


export default Video


