const listYaniUL = document.getElementById("list");

const localdeVarOlanItemlarıGostermek = function () {
  const todos = JSON.parse(localStorage.getItem("todos"));
  if (!todos) {
    localStorage.setItem("todos", JSON.stringify([]));
  } else {
    for (let i = 0; i < todos.length; i++) {
      function newElementForLocal() {
        let yeniLi = document.createElement("li");
        let inputValue = todos[i].text;
        let valueMetni = document.createTextNode(inputValue);
        yeniLi.appendChild(valueMetni);

        let span = document.createElement("span");
        let carpi = document.createTextNode("x");
        span.className = "close";
        span.appendChild(carpi);
        yeniLi.appendChild(span);
        listYaniUL.appendChild(yeniLi);

        if (todos[i].isChecked == true) {
          yeniLi.classList.add("checked");
        } else {
          yeniLi.classList.remove("checked");
        }
      }
      newElementForLocal();
    }
  }
};
localdeVarOlanItemlarıGostermek();

let listItems = document.getElementsByTagName("li");

for (let i = 0; i < listItems.length; i++) {
  let span = document.createElement("span");
  let carpi = document.createTextNode("x");
  span.className = "close";
  span.appendChild(carpi);
  listItems[i].appendChild(span);
}

let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";

    const icerikMetni = div.textContent;
    const icerikMetniKesilmis = icerikMetni.slice(0, icerikMetni.length - 2);

    let todos = JSON.parse(localStorage.getItem("todos")); // todos listesini array olarak aldım.
    todos = todos.filter((item) => item.text != icerikMetniKesilmis);
    localStorage.setItem("todos", JSON.stringify(todos));
  };
}

function yeniElement() {
  let yeniLi = document.createElement("li");
  let inputValue = document.getElementById("task").value;
  let valueMetni = document.createTextNode(inputValue);
  yeniLi.appendChild(valueMetni);
  if (inputValue === "" || inputValue.replace(/^\s+|\s+$/g, "").length == 0) {
    $(".error").toast("show");
  } else {
    $(".success").toast("show");
    listYaniUL.appendChild(yeniLi);
  }
  document.getElementById("task").value = "";

  let span = document.createElement("span");
  let carpi = document.createTextNode("x");
  span.className = "close";
  span.appendChild(carpi);
  yeniLi.appendChild(span);

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }

  const todo = {
    text: inputValue,
    isChecked: false,
  };

  const todos = JSON.parse(localStorage.getItem("todos"));
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

var input = document.getElementById("task");

input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("liveToastBtn").click();
  }
});

listYaniUL.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");

      const icerikMetni = event.target.textContent;
      const icerikMetniKesilmis = icerikMetni.slice(0, icerikMetni.length - 2);

      if (event.target.classList.contains("checked") == true) {
        const todos = JSON.parse(localStorage.getItem("todos"));
        todos.forEach((element) => {
          if (element.text == icerikMetniKesilmis) {
            element.isChecked = true;
          }
          localStorage.setItem("todos", JSON.stringify(todos));
        });
      } else if (event.target.classList.contains("checked") == false) {
        const todos = JSON.parse(localStorage.getItem("todos"));
        todos.forEach((element) => {
          if (element.text == icerikMetniKesilmis) {
            element.isChecked = false;
          }
          localStorage.setItem("todos", JSON.stringify(todos));
        });
      }
    }
  },
  false
);
