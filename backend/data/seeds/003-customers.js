const bcrypt = require("bcryptjs");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  // return knex('administrators').truncate()
  // .then(function () {
  // Inserts seed entries
  return knex("customers").insert([
    {
      name: "Lucas Solorzano",
      email: "lucas.solorzano@gmail.com",
      password: bcrypt.hashSync("pollard", 8),
      address: "5461 Cole St",
      city: "Oakland",
      state: "CA",
      zip: "94601",
    },
    {
      name: "Gleyson Coelho",
      email: "gleyson.coelho@gmail.com",
      password: bcrypt.hashSync("coelho", 8),
      address: "5542 Foothill Blvd",
      city: "Oakland",
      state: "CA",
      zip: "94605",
    },
    {
      name: "Leroy Gatlin",
      email: "leroy.gatlin@gmail.com",
      password: bcrypt.hashSync("gatlin", 8),
      address: "6232 Boulder Lane",
      city: "Oakland",
      state: "CA",
      zip: "94605",
    },
  ]);
  // });
};
