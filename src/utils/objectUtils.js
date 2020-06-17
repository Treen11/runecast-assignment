import * as _ from 'lodash'

export default { assignOnlyExistingProperties }

// works like Object.assign(), but only sets the value for properties, that already exist on the target
function assignOnlyExistingProperties (target, source) {
  if (!_.isObject(target) || !_.isObject(source)) {
    return target
  }

  Object.keys(source).forEach(key => key in target && (target[key] = source[key]))
}
