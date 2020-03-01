import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TracksList from './components/TracksList';
import TrackDetailsPage from './components/TrackDetailsPage';
import { fetchTracks } from './redux/tracksSlice';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import { HOME_ROUTE } from './constants';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTracks());
	}, [dispatch]);

	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route exact path={`/`}>
						<TracksList />
					</Route>
					{/* <Redirect exact from='/' to={`/${HOME_ROUTE}`} /> */}
					<Route path={`/:trackId`}>
						<TrackDetailsPage />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
