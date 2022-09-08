import { EventEmitter } from 'events';

export class SocketEmitter extends EventEmitter {
	constructor() {
		super();

		const ws = new WebSocket('ws://localhost:3001');

		ws.addEventListener('open', () => {
			console.log('ws connected');
		});

		ws.addEventListener('message', (eventData) => {
			console.log('got message', eventData.data);
			try {
				const { event, data } = JSON.parse(eventData.data);
				this.emit(event, data);
			} catch (e) {
				console.error('Failed parsing websocket event', e);
			}
		});

		ws.addEventListener('close', () => {
			console.log('ws disconnected');
		});
	}
}

export const socketEmitter = new SocketEmitter();
