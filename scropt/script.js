let arrTusk = JSON.parse(localStorage.getItem("arr"))  || [];

  renderTask(arrTusk);

document.querySelector(".one").addEventListener("submit", (event) => {
  event.preventDefault();
  arrTusk.push({
    text: event.target.sting.value,
    id: Date.now(),
    checked: false,
  });
  renderTask(arrTusk);
  event.target.sting.value = "";
});

function renderTask(arr) {
  const list = document.querySelector(".list");
  list.innerHTML = "";
  arr.forEach((e) => {
    const div = document.createElement("div");
    list.append(div);
   if(e.checked) {div.className = "one container done__text"} else{
    div.className = "one container ";
   }
    div.innerHTML = `<p class = "input__main">${e.text}</p> <button id ="btn__done" class="btn__add">done</button> <button class="btn__add" id ="btn__del">delete</button>`;
    div
      .querySelector("#btn__del")
      .addEventListener("click", () => deleteHandler(e.id));
    div
      .querySelector("#btn__done")
      .addEventListener("click", () => doneHandler(e.id));
  });
  localStorage.setItem("arr", JSON.stringify(arrTusk))
}

function deleteHandler(id) {
  arrTusk = arrTusk.filter((e) => {
    return !(id === e.id);
  });
  renderTask(arrTusk);
}

function doneHandler(id) {
  arrTusk = arrTusk.map((e) =>{
    if (id === e.id){return { text: e.text, checked: !e.checked, id: e.id }} else{
      return e
    } ;
  });
  renderTask(arrTusk);
}
