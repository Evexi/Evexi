// Version: 2.4.0-Alpha.0
declare enum TransitionIn {
	SLIDE_LEFT = "slide-in-from-left",
	SLIDE_TOP = "slide-in-from-top",
	SLIDE_BOTTOM = "slide-in-from-bottom",
	SLIDE_RIGHT = "slide-in-from-right",
	FADE = "fade-in",
	ZOOM = "zoom-in"
}
declare enum TransitionOUT {
	SLIDE_LEFT = "slide-out-to-left",
	SLIDE_TOP = "slide-out-to-top",
	SLIDE_BOTTOM = "slide-out-to-bottom",
	SLIDE_RIGHT = "slide-out-to-right",
	FADE = "fade-out",
	ZOOM = "zoom-out"
}
export declare type TransitionDuration = 500 | 1000 | 2000 | 3000 | 4000 | 5000 | 6000 | 7000 | 8000 | 9000 | 10000;
export interface MediaInterface {
	id: string;
	media?: string;
	duration: number;
	type: MediaType;
	transitionDuration?: TransitionDuration;
	transitionIn?: TransitionIn;
	transitionOut?: TransitionOUT;
}
export declare type MediaType = "WEB" | "IMAGE" | "VIDEO" | "ZIP";
declare enum EnviromentType {
	SSSP2 = "SSSP2",
	HTML = "HTML",
	TIZEN = "TIZEN"
}
export interface MediaInterfaceLocal extends MediaInterface {
	playlistHash: string;
	localmedia: string | undefined;
}
declare enum Actions {
	INFO = "info",
	LOG = "log",
	STORAGE_GET = "storage.get",
	STORAGE_PUT = "storage.put",
	STORAGE_DELETE = "storage.delete",
	STORAGE_LIST = "storage.list",
	STORAGE_CLEAR = "storage.clear",
	STORAGE_DOWNLOAD = "storage.download",
	STORAGE_EXISTS = "storage.exists",
	INTERACT_CREATE = "interact.create",
	INTERACT_START = "interact.start",
	INTERACT_DESTROY = "interact.destroy",
	INTERACT_MESSAGE = "interact.message",
	INTERACT_KICK = "interact.kick"
}
export interface InfoCB {
	deviceId: string;
	version: string;
	provider: keyof typeof EnviromentType | false;
}
export declare type mediaType = "image" | "text" | "web";
export interface GetResponse {
	name: string | undefined;
	error: string | null;
	type: mediaType | null;
	data: null | string;
}
export interface DownloadResponse {
	url: string | null | undefined;
	data: string | null;
	error: string | null;
}
export interface BaseMessage {
	action: Actions;
}
export declare type FileType = string[] | null | false;
export interface InteractiveCreateRes {
	qr: string;
	url: string;
	sessionId: string;
}
declare global {
	interface Window {
		playing?: (item: MediaInterfaceLocal) => void;
		stopping?: (item: MediaInterfaceLocal) => void;
		Evexi: EvexiInterface;
	}
}
export interface LogMessage extends BaseMessage {
	action: Actions.LOG;
	data: string;
}
declare class Evexi {
	readonly fs: {
		get: (name: string) => Promise<GetResponse>;
		put: (name: string, data: string | boolean | Record<string, unknown>) => Promise<boolean>;
		delete: (name: string) => Promise<boolean>;
		list: () => Promise<FileType>;
		clear: () => Promise<boolean>;
		download: (url: string, name?: string | undefined) => Promise<DownloadResponse>;
		exists: (name: string) => Promise<boolean>;
	};
	readonly interactive: {
		create: (maxRuntime: number, clientUrl?: string | undefined, maxClients?: number | undefined, noCommunicationTimeout?: number | undefined) => Promise<InteractiveCreateRes | undefined>;
		start: () => void;
		destroy: () => void;
		message: (data: string | Record<string, unknown>, client?: string | undefined) => void;
		kick: (client: string) => void;
		onMessage: (cb: (message: string | Record<string, unknown>, client?: string | undefined) => void) => void;
		onConnect: (cb: (client: string) => void) => void;
		onDisconnect: (cb: (client: string) => void) => void;
		onKick: (cb: (client: string) => void) => void;
	};
	readonly version: string;
	readonly log: (data: LogMessage["data"]) => void;
	readonly info: () => Promise<InfoCB>;
}
export declare type EvexiInterface = Evexi;

export {};
