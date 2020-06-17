import objectUtils from '../../../utils/objectUtils.js'

export default class {
  author
  downloadUrl
  size

  constructor (data) {
    objectUtils.assignOnlyExistingProperties(this, data)
  }

  get imgSrc () {
    const urlParts = this.downloadUrl.split('/')
    urlParts.splice(-2, 2)

    return `${urlParts.join('/')}/${this.size}`
  }
}
