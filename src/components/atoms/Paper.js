import React from 'react';
import './Paper.scss';

export default function Paper({ children, ...rest }) {
	return (
		<div className='mz-paper' {...rest}>
			{children}
		</div>
	);
}
