import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './ButtonLink.scss';

function ButtonLink(props) {
	const { element, children, className, ...rest } = props;

	function renderButtonLink() {
		if (element === 'a') {
			return (
				<a className={`mz-button-link ${className ? className : ''}`} {...rest}>
					{children}
				</a>
			);
		}
		if (element === 'Link') {
			return (
				<Link className={`mz-button-link ${className ? className : ''}`} {...rest}>
					{children}
				</Link>
			);
		}
	}

	return renderButtonLink();
}

ButtonLink.propTypes = {
	element: PropTypes.oneOf(['a', 'Link']).isRequired,
};

export default memo(ButtonLink);
