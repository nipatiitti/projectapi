import express from 'express'

import items from './items'

import handleGet from './get'
import handlePost from './post'

const router = express.Router({mergeParams: true})

router.use('/items', items)

router
  .get('/', (req, res) => handleGet(req, res))
  .post('/', (req, res) => handlePost(req, res))

export default router
