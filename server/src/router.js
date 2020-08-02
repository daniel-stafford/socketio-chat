import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, server is up and running');
});

export default router;
