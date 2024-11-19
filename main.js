let InputText = document.querySelector(".inputS input");
let SubmitBtn = document.querySelector(".submit")
let container = document.querySelector(".container")
let itemsArray = localStorage.getItem("item") ? JSON.parse(localStorage.getItem("item")) : [];

InputText.onfocus = () => {
    InputText.classList.add("active")
}

InputText.onblur = () => {
    InputText.classList.remove("active")
}

// submit button to achieve tasks 
SubmitBtn.onclick = function () {
    // check if input is empty or not 
    if (InputText.value !== "") {
        let item = {
            val: InputText.value,
            completed: false
        }
        itemsArray.push(item)
        localStorage.setItem("item", JSON.stringify(itemsArray))
        console.log(itemsArray)
        createItems()
        InputText.value = ""
        InputText.focus()
    }
}

// create Items 
function createItems() {
    container.innerHTML = "";
    itemsArray.forEach((ele, ind) => {
        // create Content for item
        let box = `
            <div class="box ${itemsArray[ind].completed ? "active" : ""}" onclick="checked(${ind}  )" >
                <h2>${ele.val}</h2>
                <button class="del" onclick="delBtn(${ind})">Delete</button>
            </div>
        `
        container.innerHTML += box
    });
}

// to create items when application run
createItems()

// delete button for item  
let delBtn = (i) => {
    let filArr = itemsArray.filter(e => e !== itemsArray[i])
    itemsArray = filArr
    localStorage.setItem("item", JSON.stringify(itemsArray))
    createItems()
}

// checked box function 

function checked(i) {
    if (itemsArray[i].completed == false) {
        itemsArray[i].completed = true
        document.querySelectorAll(".box")[i].classList.add("active")
    } else {
        itemsArray[i].completed = false
        document.querySelectorAll(".box")[i].classList.remove("active")

    }

    localStorage.setItem("item", JSON.stringify(itemsArray))
    console.log(itemsArray[i].completed)

    console.log(i)
    // console.log(item)
}
