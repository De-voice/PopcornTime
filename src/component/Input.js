import React from 'react';
import PropTypes from "prop-types";

function Input({ type, placeholder, name, value, onChange, className }) {
	return (
		<>
			<input
				type={type}
				value={value}
				placeholder={placeholder}
				name={name}
				onChange={onChange}
				className={className}
			/>
		</>
	);
}

Input.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.any,
	value: PropTypes.string.isRequired,
	onChange:PropTypes.func,
    className:PropTypes.string,
};
export default Input
