// Store the wallet amount to your local storage with key "amount"
let balance = localStorage.getItem("amount") || 0;
document.querySelector("#wallet").innerText = balance;
document.querySelector("#add_to_wallet").addEventListener("click", () => {
  let amount = document.querySelector("#amount").value;
  balance = +balance + +amount;
  document.querySelector("#wallet").innerText = balance;
  localStorage.setItem("amount", balance);
});

document.querySelector("#book_movies").addEventListener("click", () => {
  window.location.href = "movies.html";
});
