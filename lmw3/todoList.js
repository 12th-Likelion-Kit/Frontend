const text = document.querySelector(".todoInput");
const button = document.querySelector(".addBtn");
const list = document.querySelector(".todoList");

const addItem = () => {
    if (text.value.trim() === "") {
        return;
    }

    const item = document.createElement("li");
    item.innerHTML = "<p class='content'>" + text.value + "</p>";
    item.classList.add("item");

    const doneBtn = document.createElement("button");
    doneBtn.innerText = "완료";
    doneBtn.classList.add = "done_btn";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "삭제";
    deleteBtn.classList.add = "delete_btn";

    doneBtn.addEventListener("click", (e) => {
        const target = e.target.parentNode.firstChild;
        target.classList.add("done");
    })

    deleteBtn.addEventListener("click", (e) => {
        const target = e.target.parentNode;
        list.removeChild(target);
    })

    item.appendChild(doneBtn);
    item.appendChild(deleteBtn);
    list.appendChild(item);

    text.value = "";
    text.focus();
}

text.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
        addItem();
    }
});

text.addEventListener("click", addItem);