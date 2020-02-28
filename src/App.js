import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TracksList from './components/TracksList';
import './App.css';
// import { getTracks } from './api/tracksApiCall';
import { fetchTracks } from './redux/tracksSlice';

function App() {
	const [tracks, setTracks] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		// // fetch('https://itunes.apple.com/search?term=rock&media=music')

		// async function getSampleText() {
		// 	// console.log((await fetch('https://itunes.apple.com/search?term=rock&media=music')).blob());
		// 	const res = await fetch(
		// 		'https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=rock&media=music'
		// 	);
		// 	const json = await res.json();
		// 	const { results } = await json;
		// 	console.log(json.results);
		// 	// const response = await res;
		// 	setTracks(results);
		// }
		// getSampleText();
		// // console.log( (await fetch('sample2.txt')).text() );

		dispatch(fetchTracks());
		console.log('mounted');
	}, [dispatch]);

	return (
		<div className='App'>
			<TracksList />
		</div>
	);
}

export default App;
