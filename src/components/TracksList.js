import React from 'react';
import { useSelector } from 'react-redux';
import TrackCard from './TrackCard';

import './TrackList.scss';

export default function TracksList() {
	const { tracksList, loading, error } = useSelector(state => state.tracks);
	console.log(error);

	function renderContent() {
		if (error) {
			return <div>Sorry, there was an error</div>;
		}
		if (loading) {
			return <div>Loading ...</div>;
		}
		return (
			<ul className='track-list-grid'>
				{tracksList.map(track => (
					<li className='track-list-grid__item' key={track.trackId}>
						<TrackCard
							id={track.trackId}
							trackName={track.trackName}
							artist={track.artistName}
							price={track.trackPrice}
							artworkUrl={track.artworkUrl100}
						/>
					</li>
				))}
			</ul>
		);
	}

	return <div>{renderContent()}</div>;
}
