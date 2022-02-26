function partition(arr, low, high) {
    let pivot = arr[high].clientHeight;

    let i = (low -1);

    for (let j=low;j<=high-1;j++){
        if(arr[j].clientHeight<pivot){
            i++;
            swap(arr[i],arr[j]);
        }
    }
    swap(arr[i+1], arr[high])
    return (i +1);
}

async function quickSort(arr, low, high) {
    if(low<high) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        let pi = partition(arr,low, high);
        await new Promise(resolve => setTimeout(resolve, 1000));
        quickSort(arr, low, pi-1);
       
        quickSort(arr,pi+1, high);
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



function callQuickSort(){
    const ARR_SIZE = 100;
    const arr = document.querySelectorAll(".showcase-bar");
    
    quickSort(arr,0,ARR_SIZE-1);
}

function createQuickSortButton(){
    const buttonForQuickSort = document.querySelector(".quick-sort");

    buttonForQuickSort.addEventListener("click", () => {
        console.log("quick Sort button works");
        callQuickSort();
    })
}


createQuickSortButton();