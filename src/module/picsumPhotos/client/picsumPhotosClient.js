import HttpClient from '../../http/client/HttpClient.js'
import picsumPhotosClientParser from './picsumPhotosClientParser.js'

const client = new HttpClient({ baseURL: 'https://picsum.photos/v2' })

export default { getPhotos }

function getPhotos (page, numOfPhotos) {
  return client
    .get(`/list?page=${page}&limit=${numOfPhotos}`)
    .then((res) => picsumPhotosClientParser.parsePicsumPhotosCollectionResponse(res.data))
}
