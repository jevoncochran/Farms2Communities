exports.up = function (knex) {
  return knex.schema.createTable("products", (tbl) => {
    tbl.increments();

    tbl.string("item", 255).notNullable();

    tbl.decimal("price", null);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("products");
};
