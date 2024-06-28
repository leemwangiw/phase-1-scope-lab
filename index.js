// Write your solution in this file!
// Declare customerName in the global scope
var customerName = 'bob';

function upperCaseCustomerName() {
  // Modify customerName to be uppercase
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  // Set the bestCustomer variable in the global scope
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBestCustomer) {
  // Overwrite the bestCustomer variable
  bestCustomer = newBestCustomer;
}

// Declare leastFavoriteCustomer in the global scope as a constant
const leastFavoriteCustomer = 'some initial value';

function changeLeastFavoriteCustomer() {
  // Try to reassign leastFavoriteCustomer, which will throw an error
  leastFavoriteCustomer = 'new value';
}
