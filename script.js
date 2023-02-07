const loan = {
  Id: 0,
  customerName: "",
  phoneNumber: "",
  address: "",
  loanAmount: 0,
  interest: 0,
  loanTermYears: 0,
  loanType: "",
  description: "",
  calculatedLoanAmount: function() {
    return this.loanAmount * (1 + this.interest * this.loanTermYears);
  }
};


let loans = [
  {
    Id: 0,
    customerName: "John Doe",
    phoneNumber: "555-555-5555",
    address: "123 Main St, Anytown, CA 12345",
    loanAmount: 10000,
    interest: 0.05,
    loanTermYears: 5,
    loanType: "Personal",
    description: "Loan for home improvement project",
    calculatedLoanAmount: function() {
      return this.loanAmount * (1 + this.interest * this.loanTermYears);
    }
  },
  {
    Id: 1,
    customerName: "Jane Smith",
    phoneNumber: "555-555-5556",
    address: "456 Elm St, Anytown, CA 12345",
    loanAmount: 20000,
    interest: 0.06,
    loanTermYears: 7,
    loanType: "Business",
    description: "Loan for small business expansion",
    calculatedLoanAmount: function() {
      return this.loanAmount * (1 + this.interest * this.loanTermYears);
    }
  },
  {
    Id: 2,
    customerName: "Bob Johnson",
    phoneNumber: "555-555-5557",
    address: "789 Oak St, Anytown, CA 12345",
    loanAmount: 15000,
    interest: 0.05,
    loanTermYears: 4,
    loanType: "Personal",
    description: "Loan for car purchase",
    calculatedLoanAmount: function() {
      return this.loanAmount * (1 + this.interest * this.loanTermYears);
    }
  },
  {
    Id: 3,
    customerName: "Alice Lee",
    phoneNumber: "555-555-5558",
    address: "246 Pine St, Anytown, CA 12345",
    loanAmount: 12000,
    interest: 0.04,
    loanTermYears: 3,
    loanType: "Business",
    description: "Loan for equipment purchase",
    calculatedLoanAmount: function() {
      return this.loanAmount * (1 + this.interest * this.loanTermYears);
    }
  },
  {
    Id: 4,
    customerName: "Tom Davis",
    phoneNumber: "555-555-5559",
    address: "369 Maple St, Anytown, CA 12345",
    loanAmount: 9000,
    interest: 0.06,
    loanTermYears: 5,
    loanType: "Personal",
    description: "Loan for home renovation",
    calculatedLoanAmount: function() {
      return this.loanAmount * (1 + this.interest * this.loanTermYears);
    }
  }
]

let grandTotal = 0;
for (let i = 0; i < loans.length; i++) {
  console.log(`Loan ID: ${loans[i].Id}`);
  console.log(`Customer Name: ${loans[i].customerName}`);
  console.log(`Phone Number: ${loans[i].phoneNumber}`);
  console.log(`Address: ${loans[i].address}`);
  console.log(`Loan Amount: ${loans[i].loanAmount}`);
  console.log(`Interest: ${loans[i].interest}`);
  console.log(`Loan Term (Years): ${loans[i].loanTermYears}`);
  console.log(`Loan Type: ${loans[i].loanType}`);
  console.log(`Description: ${loans[i].description}`);
  console.log(`Calculated Loan Amount: ${loans[i].calculatedLoanAmount()}`);
  console.log('');

  grandTotal += loans[i].calculatedLoanAmount();
}

console.log(`Grand Total Loan Amount: ${grandTotal}`);
