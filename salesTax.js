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

function calculateSalesTax(salesData, taxRates) {
  // create an object as output

  let output = {}
  let totalSales = 0;

  //company are the objects within companySalesData
  for(let company in salesData){
    if(!output[salesData[company]["name"]]){
        let compName = salesData[company]["name"];
        output[compName] = {};

          for(let i = 0; i < salesData[company]["sales"].length;i++){
            totalSales += salesData[company]["sales"][i];
          }

        output[compName]["totalSales"] = totalSales;
        output[compName]["totalTaxes"] = provTax(totalSales, salesData[company]["province"]);
    }
    else {

        let compName = salesData[company]["name"];

          for(let i = 0; i < salesData[company]["sales"].length;i++){
            totalSales += salesData[company]["sales"][i];
          }

        output[compName]["totalSales"] += totalSales;
        output[compName]["totalTaxes"] += provTax(totalSales, salesData[company]["province"]);
    }


    totalSales = 0;

  }

return output;

}

function provTax (sales, prov){
if(prov == 'BC'){
  return Math.round(sales * 0.12);
}
else if (prov == 'AB'){
  return Math.round(sales * 0.05);
}
else if(prov == 'SK'){
  return Math.round(sales * 0.10);
}

}

console.log(calculateSalesTax(companySalesData, salesTaxRates));

//var results = calculateSalesTax(companySalesData, salesTaxRates);

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