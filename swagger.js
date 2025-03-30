const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'users API',
    description: 'users API'
  },
  host: 'localhost:3001',
  schemes: ['https', 'http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/users.js'];

// this will generate swagger.json 
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('./server.js'); // Your project's root file
});