const btn = document.querySelector("#btn");
const body = document.querySelector("body");

let checkbtn = true;
btn.addEventListener("click", () => {
  body.style.backgroundColor = checkbtn ? "black" : "white";
  checkbtn = !checkbtn;
});
