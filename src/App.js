import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TracksList from './components/TracksList';
import TrackDetailsPage from './components/TrackDetailsPage';
import { fetchTracks } from './redux/tracksSlice';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTracks());
		console.log('mounted');
	}, [dispatch]);

	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route exact path='/'>
						<TracksList />
					</Route>
					<Route path='/:trackId' children={<TrackDetailsPage />}></Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
