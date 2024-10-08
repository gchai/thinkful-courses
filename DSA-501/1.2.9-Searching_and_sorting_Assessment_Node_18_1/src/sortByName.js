const sort = require("./sort");

function compare(nameOne, nameTwo) {
  if (nameOne === nameTwo) return 0;
  if (nameOne > nameTwo) return 1;
  if (nameOne < nameTwo) return -1;
}
/**
 * Sort the array of customers by first and last name
 * @param {array} customers
 */
function sortByName(customers) {
  let sortedNames = [];
  let fullName = customers.map((customer) => {
    return customer.lastName + customer.firstName;
  });

  const sortByLastName = sort(compare, fullName);

  sortByLastName.forEach((name) => {
    let lastName = name.slice(0, 1);
    let firstName = name.slice(1);
    let finalName = { firstName, lastName };
    sortedNames.push(finalName);
  });
  return sortedNames;
}
module.exports = sortByName;
