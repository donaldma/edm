'use strict'

module.exports = (knex) => {
  return {
    addActivity: async (ipAddress) => {
      return knex('activity')
        .returning('*')
        .insert({ ipAddress })
    }
  }
}
