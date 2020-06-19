import React from 'react';
import styled from 'styled-components';

export default function Card({ children }) {
	return <CardWrapper>{children}</CardWrapper>;
}

const CardWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
	background-color: whitesmoke;
	width: 60%;
	height: 35%;
	display: inline-block
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	padding: 20px;
	box-shadow: 10px 10px;
	@media only screen and (max-width: 960px) {
		width: 60%;
		height: 45%;
	}
	@media only screen and (max-width: 768px) {
		width: 60%;
		height: 55%;
	}
	@media only screen and (max-width: 320px) {
		width: 60%;
		height: 50%;
	}
`;
