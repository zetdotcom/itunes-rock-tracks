import React from 'react';
import { Link } from 'react-router-dom';

export default function TrackCard({ trackName, artist, price, artworkUrl, id }) {
	return (
		<div data-testid='track-card' style={{ border: '1px solid red', height: '100%' }}>
			<div>
				<img width='100%' height='100%' src={artworkUrl} alt={trackName} />
			</div>
			<div>{trackName}</div>
			<div>{artist}</div>
			<div>{price}</div>
			<button>
				<Link to={`/${id}`}>More details</Link>
			</button>
		</div>
	);
}
