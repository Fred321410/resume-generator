import express from 'express';

const router = express.Router();
const { knex } = require('./knex/knex');

router.get('/hello', async (_req, res) => {
  const users = await knex('users').select();
  res.status(200).json({ users });
});

export default router;
