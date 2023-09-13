const button = document.querySelector("#more")
const card = document.querySelector(".hide")

item = 2;

button.addEventListener("click", function () {
    let box = document.querySelectorAll(".bom")
    
    for (var i = item; i < item + 1; i++) {
        console.log(box[i])
        box[i].style.display = 'flex';
    }

    item += 1;

    if (item >= 4) {
        button.style.display = "none"
    }
})

