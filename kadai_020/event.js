const text = document.getElementById("text");
const btn = document.getElementById("btn");

function changeText() {
  text.textContent = "ボタンをクリックしました";
}

btn.addEventListener("click",changeText);