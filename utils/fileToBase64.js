export const getBase64 = (file) => {
  if (!file) return { error: true }
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      const [, fileToBase64] = reader.result.split(',')
      resolve({ error: null, fileToBase64 })
    }

    reader.onerror = error => resolve({ error })
  })
}
