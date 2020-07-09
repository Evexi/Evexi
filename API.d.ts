/**
 * Actions that can be sent to and from player
 */
export enum Actions {
    INFO = 'info',
    LOG = 'log',
    STORAGE_GET = 'storage.get',
    STORAGE_PUT = 'storage.put',
    STORAGE_DELETE = 'storage.delete',
    STORAGE_LIST = 'storage.list',
    STORAGE_CLEAR = 'storage.clear',
    STORAGE_DOWNLOAD = 'storage.download',
    STORAGE_EXISTS = 'storage.exists',
    PIP_SHOW = 'pip.show',
    PIP_HIDE = 'pip.hide',
}

/**
 * Use this named functions for lifecycle events
 */
export enum LifeCycleEvent {
    PLAYING = 'playing',
    STOPPING = 'stopping'
}

/**
 * Base structure for API messages to and from the API
 */
interface APIMessageBase {
    action: Actions
    name?: string
    url?: string
}

/**
 * Callback response structure for 'info' call
 */
interface InfoCB {
    deviceId: string
    version: string
    provider: string
}

/**
 * storage.get response structure
 */
export type mediaType = 'image' | 'text' | 'web'
export interface GetResponse {
    name: string | undefined
    error: string | null
    type: mediaType | null
    data: null | object | string
}

/**
 * Download response structure
 */
export interface DownloadResponse {
    url: string | null | undefined
    data: string | null
    error: string | null
}

/**
 * pip.show request structure
 */
export type PIPSource = 'HDMI' | 'DVI' | 'DP'
export interface PIPSettings {
    source: PIPSource
    num: number
    x: string
    y: string
    width: string
    height: string
}

/**
 * Messages going from the player the the content
 */
export interface OutboundMessage extends APIMessageBase {
    response: InfoCB | DownloadResponse | GetResponse | boolean | string[] | number
}

/**
 * Messages going from the content to the player
 */
export interface InboundMessage extends APIMessageBase {
    data: any
}
