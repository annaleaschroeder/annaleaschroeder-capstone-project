export function loadLocally(key) {
  return new Promise((resolve, reject) => {
    try {
      const serializedData = localStorage.getItem(key)
      if (serializedData) {
        resolve(JSON.parse(serializedData))
      } else {
        resolve([])
      }
    } catch (error) {
      reject(error)
    }
  })
}

export function saveLocally(key, value) {
  return new Promise((resolve, reject) => {
    try {
      const serializedData = JSON.stringify(value)
      localStorage.setItem(key, serializedData)
      resolve(value)
    } catch (error) {
      reject(error)
    }
  })
}
