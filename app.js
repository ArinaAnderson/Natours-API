import express from 'express';

const app = express();

// http://127.0.0.1:3000/
app.get('/', (req, res) => {
  res.status(200).send('Priver from the server!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
