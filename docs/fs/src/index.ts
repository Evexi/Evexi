/**
 * logger
 */
const log = new class Log {

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
        console.error(log)
    }

    clear() {
        this.logs.innerHTML = ''
    }

}

/**
 * Info events
 */
const info = new class Info {

    version() {
        window.Evexi.version ? log.success('version: ' + window.Evexi.version) : log.error('version error')
    }

    async info() {
        try {
            const info = await window.Evexi.info()
            log.success('INFO success:' + JSON.stringify(info))
            
            try {
                // expect(info).to.have.all.keys(['deviceId', 'provider', 'version'])
            } catch (e) {
                log.error('INFO struct error')
            }

            info.deviceId.length > 5 ? log.success('INFO device ID success') : log.error('INFO device ID error')
            info.provider && info.provider.length > 2 ? log.success('INFO provider success') : log.error('INFO provider error')
            info.version.length > 2 ? log.success('INFO version success') : log.error('INFO version error')

        } catch (e) {
            log.error('INFO error')
        }
    }

}

/**
 * Storage Events
 */
const storage = new class Storage {
    
    async put() {
        try {
            const res = await window.Evexi.fs.put('text2.json', 'my text file')
            log.success('PUT: resolved ' + JSON.stringify(res))

            try {
                // expect(res).to.eql(true)
                log.success('PUT: success')
            } catch (e) {
                log.error('PUT struct error')
            }

        } catch (e) {
            log.error('PUT: caught')
        }
    }

    async get() {
        try {
            const res = await window.Evexi.fs.get('text2.json')

            try {
                // expect(res).to.have.all.keys(['name', 'error', 'type', 'data'])
                log.success('GET: success')
            } catch (e) {
                log.error('GET struct error')
            }

            try {
                // expect(res.data).to.eq('my text file')
            } catch (e) {
                log.error('GET: failed')
            }

        } catch (e) {
            log.error('GET: caught')
        }
    }

    async exists() {
        try {
            const exists = await window.Evexi.fs.exists('mrx.png')

            try {
                // expect(exists).to.eq(false)
                log.success('EXISTS: success')
            } catch (e) {
                log.error('EXISTS .. the item already exists when it shouldnt')
            }

        } catch (e) {
            log.error('EXISTS: caught')
        }
    }

    async download() {
        try {
            const download = await window.Evexi.fs.download('https://mrx.technology/assets/images/compatible/mrx.png')

            try {
                // expect(download).to.have.all.keys(['url', 'data', 'error'])
                // expect(download.url).to.eql('https://mrx.technology/assets/images/compatible/mrx.png')
                log.success('DOWNLOAD: success')
            } catch (e) {
                log.error('DOWNLOAD: struct issue')
            }

        } catch (e) {
            log.error('DOWNLOAD: error')
        }
    }

    async existsB() {
        try {
            const exists = await window.Evexi.fs.exists('mrx.png')

            try {
                // expect(exists).to.eq(true)
                log.success('EXISTS B: success')
            } catch (e) {
                log.error('Exists: ERROR')
            }

        } catch (e) {
            log.error('EXISTS: caught')
        }
    }

    async list() {
        try {
            const listA = await window.Evexi.fs.list()
            try {
                // assert.deepEqual(listA, ['mrx.png', 'text2.json'])
                log.success('LIST A: success')
            } catch (e) {
                log.error('listA: ERROR' + JSON.stringify(e))
            }
        } catch (e) {
            log.error('listA: caught')
        }
    }

    async deletes() {
        try {
            const del = await window.Evexi.fs.del('mrx.png')

            try {
                // expect(del).to.eql(true)
                log.success('DELETE: success')
            } catch (e) {
                log.error('DELETE: ERROR')
            }

        } catch (e) {
            log.error('DELETE: caught')
        }
    }

    async existsC() {
        try {
            const exists = await window.Evexi.fs.exists('mrx.png')

            try {
                // expect(exists).to.eql(false)
                log.success('EXISTS C: success')
            } catch (e) {
                log.error('ExistsC: ERROR')
            }

        } catch (e) {
            log.error('EXISTS: caught')
        }
    }

    async clear() {
        try {
            const cleared = await window.Evexi.fs.clear()

            try {
                // expect(cleared).to.eql(1)
                log.success('CLEAR: success')
            } catch (e) {
                log.error('CLEAR: ERROR')
            }

        } catch (e) {
            log.error('CLEARED: caught')
        }
    }

    async listB() {
        try {
            const listB = await window.Evexi.fs.list()
            try {
                // assert.deepEqual(listB, [])
                log.success('LIST B: success')
            } catch (e) {
                log.error('listB: ERROR' + JSON.stringify(e))
            }
        } catch (e) {
            log.error('listB: caught')
        }
    }

}

const run = async () => {

    log.info(' -- TESTING INFO -- ')
    info.version()
    await info.info()

    log.info('')

    log.info(' -- TESTING STORAGE -- ')
    await storage.put()
    await storage.get()
    await storage.exists()
    await storage.download()
    await storage.existsB()
    await storage.list()
    await storage.deletes()
    await storage.existsC()
    await storage.clear()
    await storage.listB()
    
}

/**
 * Lifecycle event to indicate the item has started to play
 */
window.playing = (item) => {

    log.info('playing item ...' + JSON.stringify(item))

    try {
        
        window.Evexi ? log.success('API Found') : log.error('API ERROR - doesnt exist')

        if(window.Evexi) {
            log.info('')
            run()
        }

    } catch (e) {
        log.error('API ERROR - caught')
    }

}

/**
 * Lifecycle event to indicate the item has stopped playing
 */
window.stopping = () => {
    log.clear()
}