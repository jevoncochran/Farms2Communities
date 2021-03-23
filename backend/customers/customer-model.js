const db = require("../data/dbConfig");

module.exports = { addNewCustomer, findCustomerById };

function addNewCustomer(customer) {
  return db("customers")
    .insert(customer, "id")
    .then((ids) => {
      const [id] = ids;
      return findCustomerById(id);
    });
}

function findCustomerById(id) {
  return db("customers").where({ id }).first();
}
