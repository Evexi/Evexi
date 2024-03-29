import { log } from './../../common'
import Evexi from 'evexi'

/**
 * Info events
 */
const info = new class {

  async info() {
    try {
      const info = await Evexi.info()

      log.success('INFO success:' + JSON.stringify(info))

      info.deviceId.length > 5 ? log.success('INFO device ID success') : log.error('INFO device ID error')
      info.provider && info.provider.length > 2 ? log.success('INFO provider success') : log.error('INFO provider error')
      info.version.length > 2 ? log.success('INFO version success') : log.error('INFO version error')

    } catch (e) {
      log.error('INFO struct error')
    }
  }

}

/**s
 * Storage Events
 */
const storage = new class {

  async put() {
    try {
      const res = await Evexi.fs.put('text2.json', 'my text file')

      try {
        if (res) log.success('PUT: success')
        else throw new Error()
      } catch (e) {
        log.error('PUT struct error')
      }

    } catch (e) {
      log.error('PUT: caught')
    }
  }

  async get() {
    try {
      const res = await Evexi.fs.get('text2.json')

      try {
        if (res.data === 'my text file') log.success('GET: success')
        else throw new Error()
      } catch (e) {
        log.error('GET: failed')
      }

    } catch (e) {
      log.error('GET: caught')
    }
  }

  async exists() {
    try {
      const exists = await Evexi.fs.exists('Evexi_logo_whitered.png')

      try {
        if (!exists) log.success('EXISTS: success - item should not exist')
        else throw new Error()
      } catch (e) {
        log.error('EXISTS .. the item already exists when it shouldnt')
      }

    } catch (e) {
      log.error('EXISTS: caught')
    }
  }

  async download() {
    try {
      const download = await Evexi.fs.download('https://admin.evexi.technology/img/logo/Evexi_logo_whitered.png')

      try {
        if (download.url === 'https://admin.evexi.technology/img/logo/Evexi_logo_whitered.png') log.success(`DOWNLOAD: success: Stored: ${download.data}`)
        else throw new Error()
      } catch (e) {
        log.error('DOWNLOAD: struct issue')
      }

    } catch (e) {
      log.error('DOWNLOAD: error')
    }
  }

  async existsB() {
    try {
      const exists = await Evexi.fs.exists('Evexi_logo_whitered.png')

      try {
        if (exists) log.success('EXISTS: success')
        else throw new Error()
      } catch (e) {
        log.error('Exists: ERROR')
      }

    } catch (e) {
      log.error('EXISTS: caught')
    }
  }

  async list() {
    try {
      const listA = await Evexi.fs.list()
      try {
        if (listA && listA[0] === 'Evexi_logo_whitered.png' && listA[1] === 'text2.json') log.success('LIST A: success')
        else throw new Error()
      } catch (e) {
        log.error('listA: ERROR' + JSON.stringify(e))
      }
    } catch (e) {
      log.error('listA: caught')
    }
  }

  async deletes() {
    try {
      const del = await Evexi.fs.del('Evexi_logo_whitered.png')

      try {
        if (del) log.success('DELETE: success')
        else throw new Error()
      } catch (e) {
        log.error('DELETE: ERROR')
      }

    } catch (e) {
      log.error('DELETE: caught')
    }
  }

  async existsC() {
    try {
      const exists = await Evexi.fs.exists('Evexi_logo_whitered.png')

      try {
        if (!exists) log.success('EXISTS C: success - should not exist')
        else throw new Error()
      } catch (e) {
        log.error('ExistsC: ERROR')
      }

    } catch (e) {
      log.error('EXISTS: caught')
    }
  }

  async clear() {
    try {
      const cleared = await Evexi.fs.clear()
      log.success(`CLEARED: success ${cleared}`)
    } catch (e) {
      log.error('CLEARED: caught')
    }
  }

  async listB() {
    try {
      const listB = await Evexi.fs.list()
      try {
        if (!listB || listB === null || listB.length === 0) log.success('LIST B: success')
        else throw new Error()
      } catch (e) {
        log.error('listB: ERROR' + JSON.stringify(e))
      }
    } catch (e) {
      log.error('listB: caught')
    }
  }

}

/**
 * Lifecycle event to indicate the item has started to play
 */
window.playing = async (item) => {

  log.info('playing item ...' + JSON.stringify(item))

  try {

    Evexi ? log.success('API Found') : log.error('API ERROR - doesnt exist')

    if (Evexi) {

      log.info('')

      log.info(' -- TESTING INFO -- ')
      await info.info()

      log.info('')

      log.info(' -- TESTING STORAGE -- ')
      await storage.clear()
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

  } catch (e) {
    log.error('API ERROR - caught')
  }

}

/**
 * Lifecycle event to indicate the item has stopped playing
 */
window.stopping = () => {
  log.clear()
  log.info(' -- STOPPING -- ')
}