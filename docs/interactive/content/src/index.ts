import { expect } from 'chai'

// list of client id's connected
const clientsIds: string[] = []

/**
 * Logger
 */
const Log = new class Log {

    // Add to div
    private logs = document.getElementById('logs') as HTMLDivElement

    info(log: string) {
        this.logs.innerHTML += '<span style=\'background-color: gray\'>' + log + '</span><br/>'
        console.log(log)
    }

    success(log: string) {
        this.logs.innerHTML += '<span style=\'background-color: darkgreen\'>' + log + '</span><br/>'
        console.log(log)
    }

    error(log: string) {
        this.logs.innerHTML += '<span style=\'background-color: darkred\'>' + log + '</span><br/>'
        console.log(log)
    }

    clear() {
        this.logs.innerHTML = ''
    }

}

const Interactive = new class Interactive {

    async create() {
        try {
            const res = await window.Evexi.interactive.create(180000, 'https://57d2-178-17-44-81.ngrok.io', 2)
            expect(res).to.have.all.keys(['qr', 'url', 'sessionId'])
            Log.success(`CREATE success: ${JSON.stringify(res)}`)
            return res
        } catch (e) {
            Log.error('CREATE error')
        }
    }

    start() {
        try {
            window.Evexi.interactive.start()
            Log.success('START success')
        } catch (e) {
            Log.error('START error')
        }
    }

    destroy() {
        try {
            window.Evexi.interactive.destroy()
            Log.success('DESTROY success')
        } catch (e) {
            Log.error('DESTROY error')
        }
    }

}

window.playing = async function playing(item) {

    window.Evexi ? Log.success('API Found') : Log.error('API ERROR')

    Log.info('')

    Log.info(' -- TESTING INFO -- ')
    const create = await Interactive.create()
    
    if (create) (document.getElementById('qr') as HTMLImageElement).src = create.qr

    window.Evexi.interactive.onConnect((clientId) => {
        Log.info(`client connected: ${clientId}`)
        clientsIds.push(clientId)
        Interactive.start()
            ; (document.getElementById('qr') as HTMLImageElement).src = ''
    })

    window.Evexi.interactive.onDisconnect((clientId) => {
        Log.info(`client disconnected: ${clientId} .. running destroy in 5 seconds`)
        window.setTimeout(Interactive.destroy, 5000)
    })

    window.Evexi.interactive.onKick((clientId) => {
        Log.info(`client kicked: ${clientId}`)
    })

    window.Evexi.interactive.onMessage((message) => {
        Log.info(`message: ${JSON.stringify(message)}`)
    })

}

window.stopping = async function stopping() {
    Log.clear()
}

// @ts-ignore
window.kick = () => {
    Log.info(`kicking client ${clientsIds[0]}`)
    window.Evexi.interactive.kick(clientsIds[0])
    clientsIds.shift()
}

// @ts-ignore
window.broadcast = () => {
    Log.info(`sending broadcast`)
    window.Evexi.interactive.message('broadcast message')
}

// @ts-ignore
window.message = (who: 'oldest' | 'newest') => {
    Log.info(`sending message to ${clientsIds[who === 'oldest' ? 0 : clientsIds.length]}`)
    window.Evexi.interactive.message('direct message', clientsIds[who === 'oldest' ? 0 : clientsIds.length])
}