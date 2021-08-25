declare global {
	interface Window {
		Scan: typeof Scan;
	}
}
declare class Scan {
	readonly sessionId: string | null;
	readonly environmentKey?: "Prod" | "Dev" | "Edge" | "Local" | undefined;
	private socket;
	private readonly pingInterval;
	private readonly events;
	constructor(sessionId: string | null, environmentKey?: "Prod" | "Dev" | "Edge" | "Local" | undefined);
	/**
	 * Send a relay message to all clients (broadcast)
	 */
	send(data: any, action?: "message" | "ping"): void;
	/**
	 * On Open
	 */
	onOpen(cb: () => void): Scan;
	/**
	 * On Close
	 */
	onClose(cb: (code: number) => void): Scan;
	/**
	 * listener for messages
	 */
	onMessage(cb: (message: string) => void): Scan;
	/**
	 * the item has finshed, manually close the WS connection for the client (runs automatically when page closes)
	 */
	destroy(): void;
	/**
	 * get query string param
	 */
	static urlParam(query?: string): string | null;
}
export default Scan;

export {};
