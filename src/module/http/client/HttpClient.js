import axios from 'axios'

export default class {
  constructor (options) {
    const defaultOptions = {}

    return axios.create({ ...defaultOptions, ...options })
  }
};
