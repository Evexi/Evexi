export interface GetResponse {
    name: string;
    error: (string | null);
    type: string; // image | text | web
    data: (null | object | string);
}

export interface DownloadResponse {
    url: string;
    data: (string | null);
    error: (string | null);
}

interface APIMessageBase {
    action: 'info' | 'log' | 'storage.get' | 'storage.put' | 'storage.delete' | 'storage.list' | 'storage.clear' | 'storage.download' | 'storage.exists'
    name?: string
}

export interface APIMessage extends APIMessageBase {
    response?: any
    url?: string
}

export interface APIMessageInbound extends APIMessageBase {
    data?: any
    url?: string
}

export interface InfoCB {
    deviceId: string
    version: string
    provider: string
}
