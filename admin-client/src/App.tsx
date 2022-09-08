import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import './App.css';
import useSocketEmitter from './hooks/useSocketEmitter';

function App() {
	const [solarOutput] = useSocketEmitter('set_solaroutput');

	return <h1>Solar Output: {solarOutput}</h1>;
}

export default App;
