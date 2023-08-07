import axios, { AxiosResponse } from 'axios';
import { IUser } from '../Types/IUser';

export const getUser = (username: string): Promise<AxiosResponse<IUser>> => {
	const apiUrl = 'https://api.github.com';

	return axios.get(`${apiUrl}/users/${username}`);
};
