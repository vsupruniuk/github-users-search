import React, { useCallback, useState } from 'react';
import { Search } from './Components/Search';
import { useDispatch } from 'react-redux';
import { getUser } from './Api/getUser';
import { setIsNotFound, setUser } from './Store/User/userSlice';
import { UserCard } from './Components/UserCard';

const App: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();

	const findUser = useCallback(async (username: string): Promise<void> => {
		try {
			setIsLoading(true);

			const userResponse = await getUser(username);

			dispatch(setUser(userResponse.data));
			dispatch(setIsNotFound(false));
		} catch (err) {
			dispatch(setUser(null));
			dispatch(setIsNotFound(true));
		} finally {
			setIsLoading(false);
		}
	}, []);

	return (
		<main className='app'>
			<Search findUser={findUser} />
			<UserCard isLoading={isLoading} />
		</main>
	);
};

export default App;
