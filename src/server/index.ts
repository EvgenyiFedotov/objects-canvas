import express from 'express';

const PORT = 5001;
const app = express();

app.get('/', (req, res) => res.send('Test2'));

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!\n`);
});
