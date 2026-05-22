// Returns the promise result, or null if it does not resolve within the given number of milliseconds
const withTimeout = <T>(promise: Promise<T>, ms: number): Promise<T | null> => {
  let timer: ReturnType<typeof setTimeout>

  const timeout = new Promise<null>((resolve) => {
    timer = setTimeout(() => resolve(null), ms)
  })

  return Promise.race([
    promise.then((result) => {
      clearTimeout(timer)
      return result
    }),
    timeout,
  ])
}

export default withTimeout
