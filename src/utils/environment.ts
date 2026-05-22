import Evexi from "evexi"

class Environment {

  async retrieve() {
    return {
      type: await Evexi.env('type'),
      docs: (await Evexi.env('docs') === 'true')
    }
  }

  listen() {

  }
}

export default new Environment()
