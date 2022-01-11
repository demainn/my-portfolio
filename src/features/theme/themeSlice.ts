import { createSlice } from '@reduxjs/toolkit';

export type ThemeType = 'light' | 'dark';

export interface ThemeState {
	value: ThemeType;
}

const initialState: ThemeState = {
	value: 'light',
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleTheme: (state) => {
			state.value === 'light' ? (state.value = 'dark') : (state.value = 'light');
		},
	},
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
