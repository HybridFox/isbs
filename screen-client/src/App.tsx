import React from 'react';

import logo from './logo.svg';
import './App.css';
import useSocketEmitter from './hooks/useSocketEmitter';

function App() {
	const [solarOutput] = useSocketEmitter('set_solaroutput');

	return <h1>Solar Output: {solarOutput}</h1>;
}

export default App;
