import cors from 'cors'
// TODO testar se pode obter os dados de qualquer origem
const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: false,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: `*`,
  preflightContinue: false,
}

const CorsOptions = cors(options)

export default CorsOptions
