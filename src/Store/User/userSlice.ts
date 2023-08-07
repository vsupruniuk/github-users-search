import { IUser } from '../../Types/IUser';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
	user: IUser | null;
	isNotFound: boolean;
}

const initialState: UserState = {
	user: null,
	isNotFound: false,
};

export const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<IUser | null>) => {
			state.user = action.payload;
		},
		setIsNotFound: (state, action: PayloadAction<boolean>) => {
			state.isNotFound = action.payload;
		},
	},
});

export const { setUser, setIsNotFound } = userSlice.actions;
export default userSlice.reducer;
