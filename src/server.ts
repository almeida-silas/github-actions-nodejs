import express from 'express';

const app = express();

app.get('/api/', (_req, res) => {
  res.status(200).json('Hello Word!')
})

app.post('/api/v1/', async (_req, res) => {
  res.status(200).json({
    message: 'Success!',
  })
})

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
