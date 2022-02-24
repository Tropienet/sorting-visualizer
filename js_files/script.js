const container = document.getElementById("bar-container");

function createArr() {
    let arr = [];
    for(i=0;i<100;i++){
        arr.push(Math.floor(Math.random()* (100-1) +1));
        addElementToPage(addStyle(arr, i));
    }
    console.log(arr);
}

function addStyle(arr, index) {
    const bar = document.createElement('div');
    bar.style.height = `${arr[index]}px`;
    bar.classList.add("showcase-bar");
    bar.style.backgroundColor = "yellow";
    return bar;
}

function addElementToPage(element){
    container.appendChild(element);
}

function removeElements(){
    const elementsToDelete = document.querySelectorAll(".showcase-bar");
    for(let i = 0; i<100;i++){
        elementsToDelete[i].remove();
    }
}

function createNewArrayButton() {
    const buttonForNewArray = document.querySelector(".new-array");

    buttonForNewArray.addEventListener("click", () => {
        removeElements();
        console.log("button works");
        createArr();
    })

}

createNewArrayButton();
createArr();