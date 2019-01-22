import { Request, Response } from 'express';
import express = require('express');
import { answers } from './answers';

const app = express();

app.get('/', (request: Request, response: Response) => {
  const query = request.query.q;
  console.log('A request has arrived:');
  console.log(query);

  const answer = answers(query);
  response.end(answer);
});

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`Typescript Extreme Startup Server running on port ${PORT}`);
});
