'use strict'

const express = require('express')
const router = express.Router()

module.exports = (dbHelper) => {
  router.post('/activity', async (req, res, next) => {
    try {
      const response = await dbHelper.addActivity(req.connection.remoteAddress)
      res.json(response[0])
    } catch (err) {
      next(err)
    }
  })

  return router
}
