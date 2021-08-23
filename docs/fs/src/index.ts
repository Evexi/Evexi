import {assert, expect} from 'chai'

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

/**
 * Info events
 */
const Info = new class Info {

    version() {
        window.Evexi.version ? Log.success('version: ' + window.Evexi.version) : Log.error('version error')
    }

    async info() {
        try {
            const info = await window.Evexi.info()
            Log.success('INFO success:' + JSON.stringify(info))
            
            try {
                expect(info).to.have.all.keys(['deviceId', 'provider', 'version'])
            } catch (e) {
                Log.error('INFO struct error')
            }

            info.deviceId.length > 5 ? Log.success('INFO device ID success') : Log.error('INFO device ID error')
            info.provider && info.provider.length > 2 ? Log.success('INFO provider success') : Log.error('INFO provider error')
            info.version.length > 2 ? Log.success('INFO version success') : Log.error('INFO version error')

        } catch (e) {
            Log.error('INFO error')
        }
    }

}

/**
 * Storage Events
 */
const Storage = new class Storage {
    
    async put() {
        try {
            const res = await window.Evexi.fs.put('text2.json', 'my text file')
            Log.success('PUT: resolved ' + JSON.stringify(res))

            try {
                expect(res).to.eql(true)
                Log.success('PUT: success')
            } catch (e) {
                Log.error('PUT struct error')
            }

        } catch (e) {
            Log.error('PUT: caught')
        }
    }

    async get() {
        try {
            const res = await window.Evexi.fs.get('text2.json')

            try {
                expect(res).to.have.all.keys(['name', 'error', 'type', 'data'])
                Log.success('GET: success')
            } catch (e) {
                Log.error('GET struct error')
            }

            try {
                expect(res.data).to.eq('my text file')
            } catch (e) {
                Log.error('GET: failed')
            }

        } catch (e) {
            Log.error('GET: caught')
        }
    }

    async exists() {
        try {
            const exists = await window.Evexi.fs.exists('mrx.png')

            try {
                expect(exists).to.eq(false)
                Log.success('EXISTS: success')
            } catch (e) {
                Log.error('EXISTS .. the item already exists when it shouldnt')
            }

        } catch (e) {
            Log.error('EXISTS: caught')
        }
    }

    async download() {
        try {
            const download = await window.Evexi.fs.download('https://mrx.technology/assets/images/compatible/mrx.png')

            try {
                expect(download).to.have.all.keys(['url', 'data', 'error'])
                expect(download.url).to.eql('https://mrx.technology/assets/images/compatible/mrx.png')
                Log.success('DOWNLOAD: success')
            } catch (e) {
                Log.error('DOWNLOAD: struct issue')
            }

        } catch (e) {
            Log.error('DOWNLOAD: error')
        }
    }

    async existsB() {
        try {
            const exists = await window.Evexi.fs.exists('mrx.png')

            try {
                expect(exists).to.eq(true)
                Log.success('EXISTS B: success')
            } catch (e) {
                Log.error('Exists: ERROR')
            }

        } catch (e) {
            Log.error('EXISTS: caught')
        }
    }

    async list() {
        try {
            const listA = await window.Evexi.fs.list()
            try {
                assert.deepEqual(listA, ['mrx.png', 'text2.json'])
                Log.success('LIST A: success')
            } catch (e) {
                Log.error('listA: ERROR' + JSON.stringify(e))
            }
        } catch (e) {
            Log.error('listA: caught')
        }
    }

    async delete() {
        try {
            const del = await window.Evexi.fs.delete('mrx.png')

            try {
                expect(del).to.eql(true)
                Log.success('DELETE: success')
            } catch (e) {
                Log.error('DELETE: ERROR')
            }

        } catch (e) {
            Log.error('DELETE: caught')
        }
    }

    async existsC() {
        try {
            const exists = await window.Evexi.fs.exists('mrx.png')

            try {
                expect(exists).to.eql(false)
                Log.success('EXISTS C: success')
            } catch (e) {
                Log.error('ExistsC: ERROR')
            }

        } catch (e) {
            Log.error('EXISTS: caught')
        }
    }

    async clear() {
        try {
            const cleared = await window.Evexi.fs.clear()

            try {
                expect(cleared).to.eql(1)
                Log.success('CLEAR: success')
            } catch (e) {
                Log.error('CLEAR: ERROR')
            }

        } catch (e) {
            Log.error('CLEARED: caught')
        }
    }

    async listB() {
        try {
            const listB = await window.Evexi.fs.list()
            try {
                assert.deepEqual(listB, [])
                Log.success('LIST B: success')
            } catch (e) {
                Log.error('listB: ERROR' + JSON.stringify(e))
            }
        } catch (e) {
            Log.error('listB: caught')
        }
    }

}

/**
 * Lifecycle event to indicate the item has started to play
 */
window.playing = async function playing(item) {

    Log.info('playing item ...' + JSON.stringify(item))

    window.Evexi ? Log.success('API Found') : Log.error('API ERROR')

    Log.info('')

    Log.info(' -- TESTING INFO -- ')
    Info.version()
    await Info.info()

    Log.info('')

    Log.info(' -- TESTING STORAGE -- ')
    await Storage.put()
    await Storage.get()
    await Storage.exists()
    await Storage.download()
    await Storage.existsB()
    await Storage.list()
    await Storage.delete()
    await Storage.existsC()
    await Storage.clear()
    await Storage.listB()

}

/**
 * Lifecycle event to indicate the item has stopped playing
 */
window.stopping = function stopping() {
    Log.clear()
}
