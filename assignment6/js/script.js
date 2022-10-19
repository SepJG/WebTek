var incomeEl = document.getElementById('income')
var wealthEl = document.getElementById('wealth')
var taxEl    = document.getElementById('tax');

function calculate() {  
  var incomeTax = 0.35 * incomeEl.value;
  var wealthTax = 0.25 * wealthEl.value;
  var tax =  incomeTax + wealthTax;

  taxEl.value = Math.round(tax * 100) / 100;
}

incomeEl.addEventListener('input', calculate);
wealthEl.addEventListener('input', calculate);
