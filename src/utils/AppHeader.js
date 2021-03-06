import React from 'react';
import styled from 'styled-components';
import { FcIdea } from 'react-icons/fc';
import { IconContext } from 'react-icons';

export default function AppHeader() {
	return (
		<AppHeaderWrapper>
			{' '}
			<div>
				{' '}
				<IconContext.Provider value={{ size: '1em' }}>
					<h1>
						Advicely{' '}
						<sup>
							<FcIdea />
						</sup>
					</h1>
				</IconContext.Provider>
			</div>
		</AppHeaderWrapper>
	);
}

const AppHeaderWrapper = styled.div`
	background-color: #000000;
	color: #ffffff;
	font-family: 'Spartan', Roboto, sans-serif;
	font-weight: bolder;
	@media only screen and (max-width: 960px) {
	}
	@media only screen and (max-width: 768px) {
		font-size: 14px;
	}
	@media only screen and (max-width: 400px) {
		font-size: 12px;
	}
`;

AppHeader.defaultProps = {
	title: 'default title',
};
