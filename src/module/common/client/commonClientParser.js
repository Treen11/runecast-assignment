import { isNil } from 'lodash'

export default { parseString }

function parseString (str) {
  if (isNil(str)) {
    return ''
  }

  return String(str)
}
