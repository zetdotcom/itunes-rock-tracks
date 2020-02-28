import { createSlice } from '@reduxjs/toolkit';
import { getTracks } from '../api/tracksApi';

const tracksSlice = createSlice({
	name: 'tracks',
	initialState: {
		tracksList: [],
		loading: false,
		error: null,
	},
	reducers: {
		requestTracks(state) {
			state.loading = true;
		},
		receiveTracks(state, action) {
			// const  = action.payload;
			state.tracksList = action.payload;
			state.loading = false;
		},
		failedReceiveTracks(state, action) {
			state.error = action.payload;
		},
	},
});

const { actions, reducer } = tracksSlice;
export const { requestTracks, receiveTracks, failedReceiveTracks } = actions;
export default reducer;

export function fetchTracks() {
	return function(dispatch) {
		dispatch(requestTracks());
		return getTracks()
			.then(data => dispatch(receiveTracks(data)))
			.catch(err => dispatch(failedReceiveTracks(err)));
	};
}
