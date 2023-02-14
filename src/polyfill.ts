import _FormData from 'miniprogram-formdata'
import _Blob from 'miniprogram-blob'

if (typeof globalThis === 'undefined') {
  Object.defineProperty(Object.prototype, 'globalThis', {
    get() {
      return this
    }
  })
}

function polyfill() {
  if (typeof FormData === 'undefined') {
    // @ts-ignore
    Object.defineProperties(globalThis, { FormData: _FormData })
  }
  if (typeof Blob === 'undefined') {
    // @ts-ignore
    Object.defineProperties(globalThis, { Blob: _Blob })
  }
}
polyfill()

export default polyfill