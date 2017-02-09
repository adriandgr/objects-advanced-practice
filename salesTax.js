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

function reducer(array) {
  return array.reduce(function(pre, cur) {
    return pre + cur;
  }, 0);
}

function calculateSalesTax(salesData, taxRates) {
  let taxCalc = {};
  for (let data in salesData) {
    let company = salesData[data]
    let companyName = company.name;
    let prov = company.province;
    if(!taxCalc.hasOwnProperty(companyName)) {
      taxCalc[companyName] = {
        totalSales: 0,
        totalTaxes: 0

      };
    }
    let totalSales = reducer(company.sales);

    let totalTax = totalSales * taxRates[prov];
    taxCalc[companyName].totalTaxes += totalTax;
    taxCalc[companyName].totalSales += totalSales;

  }
  return taxCalc;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results);

