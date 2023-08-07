import React, { useState } from 'react';

interface Props {
	findUser: (username: string) => Promise<void>;
}

export const Search: React.FC<Props> = React.memo(({ findUser }) => {
	const [input, setInput] = useState('');

	return (
		<div className='search'>
			<input
				type='text'
				className='search-input'
				placeholder='Ex. torvalds'
				value={input}
				onChange={(event) => setInput(event.target.value)}
			/>

			<button
				type='button'
				className='search-btn'
				disabled={!input}
				onClick={() => {
					findUser(input);
				}}
			>
				Search
			</button>
		</div>
	);
});
