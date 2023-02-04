const http = require('http');
const url = require('url');
const fs = require('fs');

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

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === "/loans") {
    let totalLoanAmount = 0;
    let loans = "";
    for (const loan of loanArray) {
      loans += `Loan Id: ${loan.id}<br>`;
      loans += `Customer Name: ${loan.customerName}<br>`;
      loans += `Phone Number: ${loan.phoneNumber}<br>`;
      loans += `Address: ${loan.address}<br>`;
      loans += `Loan Amount: $${loan.loanAmount}<br>`;
      loans += `Interest: ${loan.interest}<br>`;
      loans += `Loan Term (years): ${loan.loanTermYears}<br>`;
      loans += `Loan Type: ${loan.loanType}<br>`;
      loans += `Description: ${loan.description}<br>`;
      loans += `Calculated Loan Amount: $${loan.calculatedLoanAmount().toFixed(2)}<br><br>`;
      totalLoanAmount += loan.calculatedLoanAmount();
    }
    loans += `Grand Total Loan Amount: $${totalLoanAmount.toFixed(2)}`;
    res.end(loans);}})

    const createServer = http.createServer((req, res) => {
        const parsedUrl = url.parse(req.url, true);
      
        if (parsedUrl.pathname === "/loans") {
          let totalLoanAmount = 0;
          let loans = "<html><head><style>table, th, td {border: 1px solid black;}</style></head><body><table><tr><th>Loan Id</th><th>Customer Name</th><th>Phone Number</th><th>Address</th><th>Loan Amount</th><th>Interest</th><th>Loan Term (years)</th><th>Loan Type</th><th>Description</th><th>Calculated Loan Amount</th></tr>";
          for (const loan of loanArray) {
            loans += "<tr><td>" + loan.id + "</td><td>" + loan.customerName + "</td><td>" + loan.phoneNumber + "</td><td>" + loan.address + "</td><td>$" + loan.loanAmount + "</td><td>" + loan.interest + "</td><td>" + loan.loanTermYears + "</td><td>" + loan.loanType + "</td><td>" + loan.description + "</td><td>$" + loan.calculatedLoanAmount().toFixed(2) + "</td></tr>";
            totalLoanAmount += loan.calculatedLoanAmount();
          }
          loans += "</table><br><b>Grand Total Loan Amount: $" + totalLoanAmount.toFixed(2) + "</b></body></html>";
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(loans);
        }
      });
      
      const port = process.env.PORT || 3000;
      server.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
      
