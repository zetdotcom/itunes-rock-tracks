import React from 'react';
import { useParams, Route } from 'react-router-dom';

export default function TrackDetailsPage() {
	const { trackId } = useParams();

	return (
		<>
			<div>Track details Page: {trackId}</div>
		</>
	);
}
