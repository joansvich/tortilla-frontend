import axios from 'axios';

class TortillaService {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:5000/api/tortillas',
    });
  }

  getAll() {
    return this.api.get('/')
      .then(({data}) => data)
  }

  getTortilla(id) {
    return this.api.get(`/${id}`)
      .then(({data}) => data)
  }

  createTortilla(body) {
    return this.api.post('/', body)
      .then(({data}) => data)
  }

  deleteTortilla(id) {
    return this.api.delete(`/${id}`)
      .then(({data}) => data)
  }

  updateTortilla(id,body) {
    return this.api.put(`/${id}`,body)
    .then(({data}) => data)
  }

}

const tortillaService = new TortillaService();
export default tortillaService;