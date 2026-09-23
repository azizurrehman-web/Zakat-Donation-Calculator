function calculatezakat() {
  amount = document.getElementById("amount").value;
  res = (amount * 2.5) / 100;
  document.getElementById("results").innerText =
    "Your Zakat Amount " + res + " Rs.";
}
