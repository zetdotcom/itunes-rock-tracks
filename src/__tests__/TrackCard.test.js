import React from 'react';
import { createMemoryHistory } from 'history';
import { render, cleanup, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TrackCard from '../components/TrackCard';
import { Router } from 'react-router-dom';

const props = propsOverride => ({
	trackName: 'track name',
	artist: 'artist',
	price: '1.28',
	artworkUrl: '',
	id: 1,
	...propsOverride,
});

const history = createMemoryHistory();
const renderComponent = () =>
	render(
		<Router history={history}>
			<TrackCard {...props()} />
		</Router>
	);

afterEach(cleanup);

describe('TEST TrackCard', () => {
	test('should match snapshot', () => {
		const { asFragment } = renderComponent();
		expect(asFragment).toMatchSnapshot();
	});

	test('should format time, price and date correctly', async () => {
		const { findByText } = renderComponent();
		const price = await waitForElement(() => findByText('$1.28'));

		expect(price).toBeInTheDocument();
	});
});
