// import './App.css';
import React from 'react';
import { ChatEngine } from 'react-chat-engine';

export default function App() {
	return (
		<ChatEngine
			height='100vh'
			userName='sans'
			userSecret='123123'
			projectID='4061d5ab-42ed-484c-a6e5-c991f9dd0b95'
		/>
	);
}
