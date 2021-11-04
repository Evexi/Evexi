// Version: 2.4.0-alpha.5
enum TransitionIn {
	SLIDE_LEFT = "slide-in-from-left",
	SLIDE_TOP = "slide-in-from-top",
	SLIDE_BOTTOM = "slide-in-from-bottom",
	SLIDE_RIGHT = "slide-in-from-right",
	FADE = "fade-in",
	ZOOM = "zoom-in"
}
enum TransitionOUT {
	SLIDE_LEFT = "slide-out-to-left",
	SLIDE_TOP = "slide-out-to-top",
	SLIDE_BOTTOM = "slide-out-to-bottom",
	SLIDE_RIGHT = "slide-out-to-right",
	FADE = "fade-out",
	ZOOM = "zoom-out"
}
export type TransitionDuration = 500 | 1000 | 2000 | 3000 | 4000 | 5000 | 6000 | 7000 | 8000 | 9000 | 10000;
export interface MediaInterface {
	id: string;
	media?: string; // not used for interactive
	duration: number | 0; // 0 duration is indefinite item
	type: MediaType;
	// Transition
	transitionDuration?: TransitionDuration;
	transitionIn?: TransitionIn;
	transitionOut?: TransitionOUT;
}
export type MediaType = "WEB" | "IMAGE" | "VIDEO" | "ZIP";
export declare namespace b2bSerialPrint {
	export enum PrinterPort {
		PRINTERPORT0 = "PRINTERPORT0",
		PRINTERPORT1 = "PRINTERPORT1",
		PRINTERPORT2 = "PRINTERPORT2"
	}
	export enum PrinterParity {
		NONE = "NONE",
		ODD = "ODD",
		EVEN = "EVEN"
	}
	export enum PrinterDataBits {
		BITS5 = "BITS5",
		BITS6 = "BITS6",
		BITS7 = "BITS7",
		BITS8 = "BITS8"
	}
	type PrinterStopBits = "1" | "1.5" | "2";
	export interface PrinterOptions {
		baudRate: 9600 | 115200;
		parity: keyof typeof PrinterParity;
		dataBits: keyof typeof PrinterDataBits;
		stopBits: PrinterStopBits;
	}
	export interface PrintSerialDataResult {
		data: string;
		result: number;
	}
	export interface b2bSerialPrint {
		open: (port: keyof typeof PrinterPort, options: PrinterOptions, onListener: (printSerialData: PrintSerialDataResult) => void) => boolean;
		close: (port: keyof typeof PrinterPort) => boolean;
		writeData: (port: keyof typeof PrinterPort, data: string, length: number) => number;
	}
	export {};
}
export interface PrinterSettings extends b2bSerialPrint.PrinterOptions {
	port: keyof typeof b2bSerialPrint.PrinterPort;
}
declare enum EnvironmentType {
	SSSP2 = "SSSP2",
	HTML = "HTML",
	TIZEN = "TIZEN",
	KIOSK = "KIOSK"
}
export interface MediaInterfaceLocal extends MediaInterface {
	playlistHash: string;
	localMedia: string | undefined;
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
	INTERACT_KICK = "interact.kick",
	KIOSK_BARCODE = "kiosk.barcode",
	KIOSK_PRINTER = "kiosk.printer",
	PROXY = "proxy",
	ENV_VAR = "envVar"
}
export interface InfoCB {
	deviceId: string;
	version: string;
	provider: keyof typeof EnvironmentType | false;
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
export interface ProxyResponse {
	status: Response["status"];
	statusText: Response["statusText"];
	url: Response["url"];
	ok: Response["ok"];
	json: any;
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
export declare type PlayerProxyResponse = ProxyResponse | false;
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
		del: (name: string) => Promise<boolean>;
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
	readonly tizen: {
		barcode: () => Promise<string | false>;
		printer: (data: string, printerSettings?: Partial<PrinterSettings> | undefined) => Promise<boolean>;
	};
	readonly proxy: (url: string, request?: RequestInit | undefined) => Promise<PlayerProxyResponse>;
	readonly env: (name: string) => Promise<string | undefined>;
	readonly log: (data: LogMessage["data"]) => void;
	readonly info: () => Promise<InfoCB>;
}
export declare type EvexiInterface = Evexi;

export {};
