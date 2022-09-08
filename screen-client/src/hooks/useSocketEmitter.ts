import { useState } from 'react';

import { socketEmitter } from '../helpers/socketEmitter';

const useSocketEmitter = (event: string) => {
	const [data, setData] = useState(null);

	socketEmitter.on(event, (eventData) => setData(eventData));

	return [data];
};

export default useSocketEmitter;
