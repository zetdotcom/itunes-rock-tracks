import React from 'react';
import ButtonLink from './atoms/ButtonLink';
import Paper from './atoms/Paper';
import { getUSD } from '../utils';
import './TrackCard.scss';

export default function TrackCard({ trackName, artist, price, artworkUrl, id }) {
	return (
		<Paper data-testid='track-card'>
			<div>
				<img width='100%' height='100%' src={artworkUrl} alt={trackName} />
			</div>
			<div>{trackName}</div>
			<div>{artist}</div>
			<div>{getUSD(price)}</div>
			<div>
				<ButtonLink element='Link' to={`/${id}`}>
					See more
				</ButtonLink>
			</div>
		</Paper>
	);
}