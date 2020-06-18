import React from 'react';
import axios from 'axios';
import { QuoteButton, QuoteLoader, Card } from './utils';

import './App.css';

class App extends React.Component {
	state = { advice: '', isLoading: true };
	//since we want to get data as soon as compnent renders we are calling fetchAdvice here
	componentDidMount() {
		this.fetchAdvice();
	}

	//when a function belongs to a class you don't need to declare it as const e.g fetchAdvice below
	fetchAdvice = async () => {
		try {
			//while awaiting response set isLoading true
			this.setState({ isLoading: true });
			const response = await axios.get('https://api.adviceslip.com/advice');
			//once response is received, retrieve random advice slip
			const { advice } = response.data.slip;
			//set state of advice with data from slip
			this.setState({ advice });
			//once state is set, then set loading to true after 1.5 second timeout so data can fully render
			setTimeout(() => this.setState({ isLoading: false }), 1500);
		} catch (error) {
			alert(error);
		}
	};

	render() {
		const { advice, isLoading } = this.state;
		return (
			<div className="app">
				<Card>
					{/*if loading is true then show spinner else show button and advice */}
					{isLoading ? (
						<QuoteLoader />
					) : (
						<QuoteButton advice={advice} fetchAdvice={this.fetchAdvice} />
					)}
				</Card>
			</div>
		);
	}
}

export default App;