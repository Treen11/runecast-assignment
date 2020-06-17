import PicsumPhotosPhoto from '../domain/PicsumPhotosPhoto.js'
import commonClientParser from '../../common/client/commonClientParser.js'
import { isArray } from 'lodash'

export default { parsePicsumPhotosCollectionResponse }

function parsePicsumPhotosCollectionResponse (response) {
  if (!isArray(response)) {
    return []
  }

  return response.map(img => new PicsumPhotosPhoto({
    author: commonClientParser.parseString(img.author),
    downloadUrl: commonClientParser.parseString(img.download_url)
  }))
}
