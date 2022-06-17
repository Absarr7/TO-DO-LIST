values = []
const input = document.getElementById("input");
const saveBtn = document.getElementById("saveBtn");
const saveList = document.getElementById("save-list");
const delBtn = document.getElementById("delBtn");


let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myleads"));
console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage) {
    values = leadsFromLocalStorage
    renderLeads(values)
}

function renderLeads(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li class="tasks">
        ${leads[i]}
        <div class="actions">
        <button class="delete" ondblclick="del()"><img src="Images/trash-2.svg"></button>
        </div>
        </li>`
    }
    saveList.innerHTML = listItems
};

saveBtn.addEventListener("click", function() {
    if (input.value.length == 0) {
        alert("Please Enter a Task")
    } else {
        values.push(input.value)
        input.value = "";
        localStorage.setItem("myleads", JSON.stringify(values));
        renderLeads(values)
    }
});

delBtn.addEventListener("dblclick", () => {
    localStorage.clear()
    values = []
    renderLeads(values)
})

let current_tasks = document.querySelectorAll(".delete");

function del(index) {
    values.splice(index, 1);
    renderLeads(values)
}

saveList.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);