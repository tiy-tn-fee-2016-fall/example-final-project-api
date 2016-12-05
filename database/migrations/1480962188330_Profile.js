'use strict';

const Schema = use('Schema');

class ProfileSchema extends Schema {

  up() {
    this.create('profiles', (table) => {
      table.increments();
      table.string('first_name');
      table.string('last_name');
      table.text('bio');
      table.timestamps();
    });
  }

  down() {
    this.drop('profiles');
  }

}

module.exports = ProfileSchema;
