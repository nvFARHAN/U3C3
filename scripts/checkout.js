// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let amount = localStorage.getItem("amount");
document.querySelector("#wallet").innerText = amount;

let movie = JSON.parse(localStorage.getItem("movie"));

let box = document.createElement("div");
let image = document.createElement("img");
image.src = movie.Poster;
let title = document.createElement("h2");
title.innerText = movie.Title;
box.append(title, image);
document.querySelector("#movie").append(box);

document.querySelector("#confirm").addEventListener("click", () => {
  let seats = document.querySelector("#number_of_seats").value;
  let remainingBalance = amount - seats * 100;
  if (remainingBalance < 0) {
    alert("Insufficient Balance!");
  } else {
    alert("Booking successful!");
    document.querySelector("#wallet").innerText = remainingBalance;
    localStorage.setItem("amount", remainingBalance);
  }
});
