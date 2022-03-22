const express = require('express');
const bodyParse = require('body-parser');

const PORT = '3000';
const app = express();

app.listen(PORT, () => {
  console.log(`App rodando na porta ${3000}`);
});