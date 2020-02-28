import React from 'react';
// import { Provider } from 'react-redux';
import { Provider } from 'react-redux';
import { render, cleanup, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import store from '../redux/store';
import TracksList from '../components/TracksList';

// const props = propsOverride => ({
// 	player: {
// 		first_name: 'John',
// 		last_name: 'Doe',
// 		id: 123,
// 		fppg: 100,
// 		images: {
// 			default: {
// 				url: 'testurl',
// 			},
// 		},
// 	},
// 	showFppg: false,
// 	handleCardClick: jest.fn(),
// 	maxFppgId: () => 123,
// 	...propsOverride,
// });

const renderComponent = newStore =>
	render(
		<Provider store={store(newStore)}>
			<TracksList />
		</Provider>
	);

afterEach(cleanup);

describe('TEST PlayerCard', () => {
	test('should match snapshot', () => {
		const { asFragment } = renderComponent();
		expect(asFragment).toMatchSnapshot();
	});

	test('should show error message on error', async () => {
		const newState = {
			tracks: {
				error: 'some error',
			},
		};
		const { getAllByTestId, getByText } = renderComponent(newState);

		const errorMessage = await waitForElement(() => getByText(/ there was an error/i));
		expect(errorMessage).toBeInTheDocument();
	});
	test('should render n tracks', async () => {
		const tracksArr = () =>
			new Array(10)
				.fill()
				.map((x, i) => ({ trackName: 'track name', artist: 'artist', price: '1.00', artworkUrl: 'img', id: i }));
		const mockTracksList = tracksArr();
		const newState = {
			tracks: {
				error: null,
				tracksList: mockTracksList,
			},
		};
		const { getAllByTestId } = renderComponent(newState);
		const tracks = await waitForElement(() => getAllByTestId('track-card'));
		expect(tracks).toHaveLength(10);
	});
});
