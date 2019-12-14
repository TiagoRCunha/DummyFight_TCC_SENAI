import cors from "cors";

const options:cors.CorsOptions = {
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: `http://localhost:3000`,
  preflightContinue: false
};

const Cors = cors(options);

export default Cors;