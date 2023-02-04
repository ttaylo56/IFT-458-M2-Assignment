const loanArray = [];

// JavaScript Object for loan
const Loan = function(id, customerName, phoneNumber, address, loanAmount, interest, loanTermYears, loanType, description) {
  this.id = id;
  this.customerName = customerName;
  this.phoneNumber = phoneNumber;
  this.address = address;
  this.loanAmount = loanAmount;
  this.interest = interest;
  this.loanTermYears = loanTermYears;
  this.loanType = loanType;
  this.description = description;
  this.calculatedLoanAmount = function() {
    return this.loanAmount * (1 + this.interest * this.loanTermYears);
  };
};

// Adding five instances of loan objects to the loanArray
loanArray.push(new Loan(1, "John Doe", "555-555-1212", "123 Main St", 1000, 0.06, 2, "Personal", "Car Loan"));
loanArray.push(new Loan(2, "Jane Doe", "555-555-1213", "124 Main St", 5000, 0.05, 5, "Home", "Home Loan"));
loanArray.push(new Loan(3, "Jim Smith", "555-555-1214", "125 Main St", 10000, 0.04, 3, "Business", "Business Loan"));
loanArray.push(new Loan(4, "Sarah Johnson", "555-555-1215", "126 Main St", 8000, 0.07, 4, "Student", "Student Loan"));
loanArray.push(new Loan(5, "Tom Davis", "555-555-1216", "127 Main St", 6000, 0.08, 1, "Auto", "Auto Loan"));

// List all the array elements with the grand total loan amount
let totalLoanAmount = 0;
for (const loan of loanArray) {
  console.log(`Loan Id: ${loan.id}`);
  console.log(`Customer Name: ${loan.customerName}`);
  console.log(`Phone Number: ${loan.phoneNumber}`);
  console.log(`Address: ${loan.address}`);
  console.log(`Loan Amount: $${loan.loanAmount}`);
  console.log(`Interest: ${loan.interest}`);
  console.log(`Loan Term (years): ${loan.loanTermYears}`);
  console.log(`Loan Type: ${loan.loanType}`);
  console.log(`Description: ${loan.description}`);
  console.log(`Calculated Loan Amount: $${loan.calculatedLoanAmount().toFixed(2)}`);
  console.log("");
  totalLoanAmount += loan.calculatedLoanAmount();
}
console.log(`Grand Total Loan Amount: $${totalLoanAmount.toFixed(2)}`);
