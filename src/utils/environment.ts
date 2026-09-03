import Evexi from "evexi"

class Environment {

  async retrieve() {
    return {
      docs: (await Evexi.env('docs') === 'true'),
      helper: (await Evexi.env('helper') === 'true'),
      run: await Evexi.env('run'),
      reset: await Evexi.env('reset'),
      filter: await Evexi.env('filter'),
      results: (await Evexi.env('results') === 'true'),
      reportsUrl: await Evexi.env('reports_url'),
    }
  }

  listen<T extends string>(items: T[], cb: (item: T, value: string | undefined) => void) {
    for (const item of items) {
      Evexi.envChange(item, async (value) => {
        cb(item, value)
      })
    }
  }
}

export default new Environment()
