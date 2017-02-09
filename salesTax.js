var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/

// *total sales* and *total tax*, grouped by company.


function calculateSalesTax(salesData, taxRates) {
  /* Implement your code here

  */
  let taxCalc = {};
  for (let data in salesData) {
    let company = salesData[data]
    let companyName = company.name;
    if(!taxCalc.hasOwnProperty(companyName)) {
      taxCalc[companyName] = {
        totalTaxes: 0,
        totalSales: 0,
      };
    }
    let totalSales = 0;
    for (let prop in company.sales){
      console.log('prop >>', prop);
      console.log('company >>', company.sales);
      // console.log('company[prop] >>', company[prop])
    }
    // console.log('taxCalc >>', taxCalc);
  }
  return taxCalc;
}



var results = calculateSalesTax(companySalesData, salesTaxRates);



