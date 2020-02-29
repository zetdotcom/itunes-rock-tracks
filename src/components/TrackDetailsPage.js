import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUSD, msToTime } from '../utils';
import { format } from 'date-fns';
import ButtonLink from './atoms/ButtonLink';
import Paper from './atoms/Paper';
import './TrackDetailsPage.scss';

export default function TrackDetailsPage() {
	const { trackId } = useParams();
	const track = useSelector(state => state.tracks.tracksList.find(track => track.trackId === Number(trackId)) || {});

	const { artworkUrl100, trackName, artistName, trackPrice, trackTimeMillis, releaseDate } = track;
	const trackReleaseDate =
		!isNaN(new Date(releaseDate).getTime()) && format(new Date(releaseDate), 'EEEE k:mm, dd MMMM yyyy');
	return (
		<div className='track-details-page'>
			<Paper>
				<div>
					<img width='100%' height='100%' src={artworkUrl100} alt={trackName} />
				</div>
				<div>{trackName}</div>
				<div>{artistName}</div>
				<div>Price: {getUSD(trackPrice)}</div>
				<div>Duration: {msToTime(trackTimeMillis)}</div>
				<div>Release Date: {trackReleaseDate}</div>
				<ButtonLink element='a' href={track.trackViewUrl} target='blank' rel='noopoener noreferrer'>
					More details
				</ButtonLink>
			</Paper>
		</div>
	);
}
