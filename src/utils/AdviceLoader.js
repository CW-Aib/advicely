import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function Advice() {
	return (
		<Loader
			type="ThreeDots"
			color="#164ca7"
			height={80}
			width={80}
			timeout={4300} //3 secs
		/>
	);
}
