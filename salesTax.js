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

  get

  */
}

function generateOuterObject(salesData) {
  var table = {}
  totals = addSales(salesData);
  for (var i = 0; i < salesData.length; i++) {
    for ( item in salesData[i]) {
      if ( item === "name") {
        var companyTotal = totals.shift();
        table[salesData[i][item]] = {
          totalSales: companyTotal,
          totalTaxes: null
        }
      }
    }
  }
  console.log(table)
  return table;
}

function addSales(salesData) {
  var totals = []
  for (var i = 0; i < salesData.length; i++) {
    for ( item in salesData[i]) {
      if ( item === "sales") {
        totals.push(salesData[i][item].reduce((a, b) => a + b));
      }
    }
  }
  console.log('table', totals)
  return totals;
}

generateOuterObject(companySalesData);

addSales(companySalesData)

//var results = calculateSalesTax(companySalesData, salesTaxRates);



