import express from 'express';

const app = express();

app.get('/api/', (_req, res) => {
  res.status(200).send('Hello Word! How are you my friend?')
})

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
