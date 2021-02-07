import axios from 'axios';

export default (props?: Object) => axios.create({
  baseURL: 'http://localhost:5001',
  ...props,
});
