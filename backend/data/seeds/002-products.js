exports.seed = function (knex) {
  // Deletes ALL existing entries
  // return knex('administrators').truncate()
  // .then(function () {
  // Inserts seed entries
  return knex("products").insert([
    {
      item: "Community Support Box",
      price: 35.0,
    },
    {
      item: "Mutual Aid Box",
      price: 10.0,
    },
    {
      item: "Donation",
    },
  ]);
  // });
};
