const button = document.querySelector(".addBtn");
const list = document.querySelector(".todoList");
const text = document.querySelector(".todoInput");


const addItem = () => {
    if (text.value.trim === "") {
        return;
    }

    const item = document.createElement("li");
    item.innerHTML = "<p class='content'>" + text.value + "</p>";
    item.classList.add('item');

    const doneBtn = document.createElement("button");
    doneBtn.innerHTML = "완료";
    doneBtn.classList.add = "done_btn";

    doneBtn.addEventListener("click", (e) => {
        const target = e.target.parentNode.firstChild;
        target.classList.add("done");
    })

    deleteBtn.addEventListener("click", (e) => {
        const target = e.target.parentNode;
        list.removeChild(target);
    })
}