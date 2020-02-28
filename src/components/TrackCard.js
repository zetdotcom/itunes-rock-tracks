import React from 'react';

export default function TrackCard({ trackName, artist, price, artworkUrl, id }) {
	return (
		<div data-testid='track-card' style={{ border: '1px solid red', height: '100%' }}>
			<div>
				<img width='100%' height='100%' src={artworkUrl} alt={trackName} />
			</div>
			<div>{trackName}</div>
			<div>{artist}</div>
			<div>{price}</div>
		</div>
	);
}
