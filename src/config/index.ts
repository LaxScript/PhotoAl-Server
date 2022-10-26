require('dotenv').config()

export default {
  server: {
    port: process.env.PORT || 1337,
    host: 'localhost'
  },
  database: {
    url: 'mongodb://127.0.0.1:27017/photoal',
    options: {
      useUnifiedTopology: true,
      wtimeoutMS: 50000,
      maxPoolSize: 50
    }
  },
  token: {
    login: 'IOLETEMPLANZA'
  }
}
