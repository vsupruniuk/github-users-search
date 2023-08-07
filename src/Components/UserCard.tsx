import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../Store/store';
import { Spinner } from './Spinner';

interface Props {
	isLoading: boolean;
}

export const UserCard: React.FC<Props> = React.memo(({ isLoading }) => {
	const user = useSelector((state: RootState) => state.user.user);
	const isNotFound = useSelector((state: RootState) => state.user.isNotFound);

	if (!user && !isNotFound) {
		return <h2>Enter username and click on &quot;Search&quot; to find user Github account</h2>;
	}

	if (!user && isNotFound) {
		return <h2>No user with this nickname was found</h2>;
	}

	return (
		<div>
			{isLoading ? (
				<Spinner />
			) : (
				<div className='user-card'>
					<img src={user?.avatar_url} alt='user-photo' className='user-card-img' />

					<h3>{user?.name}</h3>

					{user?.bio ? <p>{user.bio}</p> : <p>User does not have bio</p>}

					<a href={user?.html_url} target='_blank' rel='noreferrer' className='user-card-link'>
						Profile
					</a>
				</div>
			)}
		</div>
	);
});
