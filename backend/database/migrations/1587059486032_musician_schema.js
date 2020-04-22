'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MusicianSchema extends Schema {
  up () {
    this.create('musicians', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('professional').nullable()
      table.string('orchestra').nullable()
      table.string('instrument').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('musicians')
  }
}

module.exports = MusicianSchema
