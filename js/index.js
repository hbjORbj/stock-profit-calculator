function calculate() {
  var buying_price = document.getElementById("buying_price").value;
  var selling_price = document.getElementById("selling_price").value;
  var answer = ((selling_price - buying_price) / buying_price - 0.005) * 100;
  answer = Math.round(answer * 1000) / 1000 + "%";
  document.getElementById("profit_rate").textContent = answer;
}
