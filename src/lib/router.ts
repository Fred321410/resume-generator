import express from 'express';

const router = express.Router();
const { knex } = require('./knex/knex');

router.get('/users', async (_req, res) => {
  const users = await knex('users').select();
  res.status(200).json(users);
});

router.post('/users', async (_req, res) => {
  const users = await knex('users').insert(_req.body).returning('*');
  const user = users[0];
  res.status(200).json(user);
});

export default router;
