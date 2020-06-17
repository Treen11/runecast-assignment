import objectUtils from '../../../utils/objectUtils.js'

export default class {
  title
  src

  constructor (data) {
    objectUtils.assignOnlyExistingProperties(this, data)
  }
}
