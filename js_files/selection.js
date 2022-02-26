

async function selectionSort() {
    const ARR_SIZE = 100;
    const arr = document.querySelectorAll(".showcase-bar");
    
    let i,j, min_idx;

    for(i=0;i<ARR_SIZE-1;i++){
        min_idx = i;
        
        await new Promise(resolve => setTimeout(resolve, 25));
        for(j=i+1;j<ARR_SIZE;j++){
            
            if(arr[j].clientHeight < arr[min_idx].clientHeight){
                min_idx = j;
            }
          
            swap(arr[min_idx],arr[i]);
        }
        
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

function createSelectionSortButton() {
    const buttonForSelectionSort = document.querySelector(".selection-sort");

    buttonForSelectionSort.addEventListener("click", () => {
        console.log("This button works");
        selectionSort();
    })
}



createSelectionSortButton();