import axios from 'axios';
// for android studio emulator use ip 10.0.2.2
// for genymotion use 10.0.3.2
// for usb connection use your ip address 192.0000
const api = axios.create({
  baseURL: 'http://192.168.15.101:3333'
})

export default api;