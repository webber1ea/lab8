var total = 0;
var tax = 0;
var grandTotal = 0;

function addTo() {
  var newFood = document.getElementById('foodName').value;
  var newItemPrice = document.getElementById('foodPrice').value;
  console.log(foodName);
  total = total + parseInt(newItemPrice);
  tax = total * .06;
  grandTotal = total + tax;

  document.getElementById('shoppingCartTable').innerHTML = document.getElementById('shoppingCartTable').innerHTML + "<tr><td> " + newFood + "</td><td>" + newItemPrice + "</td></tr>";
  document.getElementById('total').innerHTML = total;
  document.getElementById('taxAmount').innerHTML = tax;
  document.getElementById('grandTotal').innerHTML = grandTotal;
}

function deleteFrom() {
  document.getElementById('shoppingCartTable').deleteRow(1);
}
