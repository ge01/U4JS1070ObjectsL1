// Custormer Object
var customer = {
  firstName: 'Bill',
  lastName: 'Gates',
  // Simple Method
  displayFullName: function(){
    console.log('Full Name: ' + this.firstName + ' ' + this.lastName);
  }
};

console.log('First Name: ' + customer.firstName);
console.log('Last Name: ' + customer.lastName);

customer.displayFullName();
