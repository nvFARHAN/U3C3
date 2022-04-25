// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let id;
let key = "d05c3388";
let amount = localStorage.getItem("amount");
document.querySelector("#wallet").innerText = amount;
let getData = () => {
  let search = document.querySelector("#search").value;
  let url = `http://www.omdbapi.com/?apikey=${key}&s=${search}&type=movie`;
  return fetchFunc(url);
};

let fetchFunc = async (url) => {
  let res = await fetch(url);
  let data = await res.json();
  return data.Search;
};

let append = (data) => {
  document.querySelector("#movies").innerHTML = null;
  if (data == undefined) return;
  data.forEach((e) => {
    let box = document.createElement("div");
    let image = document.createElement("img");
    image.src = e.Poster;
    let title = document.createElement("p");
    title.innerText = e.Title;
    let book = document.createElement("button");
    book.innerText = "Book Now";
    book.setAttribute("class", "book_now");
    book.addEventListener("click", () => {
      localStorage.setItem("movie", JSON.stringify(e));
      window.location.href = "checkout.html";
    });
    box.append(image, title, book);
    document.querySelector("#movies").append(box);
  });
};

let main = async () => {
  let data = await getData();
  console.log(data);
  append(data);
};

let debounce = (func, time) => {
  if (id) clearTimeout(id);
  id = setTimeout(() => {
    func();
  }, time);
};
