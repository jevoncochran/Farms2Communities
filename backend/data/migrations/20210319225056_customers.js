exports.up = function (knex) {
  return knex.schema.createTable("customers", (tbl) => {
    tbl.increments();

    tbl.string("name", 255).notNullable();

    tbl.string("email", 255).notNullable().unique();

    tbl.string("password", 255).notNullable();

    tbl.string("address", 255).notNullable();

    tbl.string("city", 255).notNullable();

    tbl.string("state", 2).notNullable();

    tbl.string("zip", 12).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("customers");
};
