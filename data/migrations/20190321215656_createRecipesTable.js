
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', tbl => {
    tbl.increments();
    tbl.string('recipe')
       .notNullable()
       .unique();

    tbl.integer('dish_id')
       .unsigned()
       .references('id')
       .inTable('dishes')
       .onDelete('CASCADE')
       .onUpdate('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
