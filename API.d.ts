export enum Actions {
    INFO = 'info',
    LOG = 'log',
    STORAGE_GET = 'storage.get',
    STORAGE_PUT = 'storage.put',
    STORAGE_DELETE = 'storage.delete',
    STORAGE_LIST = 'storage.list',
    STORAGE_CLEAR = 'storage.clear',
    STORAGE_DOWNLOAD = 'storage.download',
    STORAGE_EXISTS = 'storage.exists'
}

export type mediaType = 'image' | 'text' | 'web'

interface APIMessageBase {
    action: Actions
    name?: string
    url?: string
}

interface InfoCB {
    deviceId: string
    version: string
    provider: string
}

export interface GetResponse {
    name: string | undefined
    error: string | null
    type: mediaType | null
    data: null | object | string
}

export interface DownloadResponse {
    url: string | null | undefined
    data: string | null
    error: string | null
}

export interface OutboundMessage extends APIMessageBase {
    response: InfoCB | DownloadResponse | GetResponse | boolean | string[] | number
}

export interface InboundMessage extends APIMessageBase {
    data: any
}
