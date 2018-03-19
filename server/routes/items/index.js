import express from 'express'

import handleGet from './get'

const router = express.Router({mergeParams: true})

router
  .get('/:id', (req, res) => handleGet(req, res))

export default router
