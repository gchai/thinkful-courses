/**
 * Use a binary search to find the customer with given name
 * @param {string} firstName
 * @param {string} lastName
 * @param {array} customers
 */
function searchByName(firstName, lastName, customers) {
  let left = 0;
  let right = customers.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const customer = customers[middle];

    if (customer.firstName === firstName && customer.lastName === lastName) {
      return middle;
    } else if (
      customer.lastName === lastName
        ? customer.firstName.localeCompare(firstName) < 0
        : customer.lastName.localeCompare(lastName) < 0
    ) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}
module.exports = searchByName;
