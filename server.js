const express = require('express');
const myApp = require('./myApp');


const app = express();

app.use(express.json());

app.use(myApp);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});