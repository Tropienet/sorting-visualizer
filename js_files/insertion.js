async function insertionSort() {
    const ARR_SIZE = 100;
    const elementsArray = document.querySelectorAll(".showcase-bar");
    let i,key,j;


    for(i=1;i<ARR_SIZE;i++){
       
        key = elementsArray[i].clientHeight;
        j = i -1;
        
        while(j >=0 && elementsArray[j].clientHeight>key){
            await new Promise(resolve => setTimeout(resolve, 25));
            elementsArray[j+1].style.background="red";
            await new Promise(resolve => setTimeout(resolve, 25));
            swap(elementsArray[j+1], elementsArray[j])
            await new Promise(resolve => setTimeout(resolve, 25));
            elementsArray[j+1].style.background="green";
         
            j = j -1;
        }
        elementsArray[j+1].clientHeight = key;
    }
}

function swap(el1, el2){
     
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");

    el1.style.height = transform2;
    el2.style.height = transform1;
    
}

function createInsertionSortButton() {
    const buttonForInsertionSort = document.querySelector(".insertion-sort");

    buttonForInsertionSort.addEventListener("click", () => {
        console.log("Insertion sort button works");
        insertionSort();
    })
}

createInsertionSortButton();