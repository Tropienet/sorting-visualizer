

function timeout(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubbleSort(){
    const ARR_SIZE = 100;
    const elementsArray = document.querySelectorAll(".showcase-bar");
    
   
   
    let k=0;

    let i, j;
    for( i=0;i<ARR_SIZE-1;i++){
        for(j=0;j<ARR_SIZE-i-1;j++){

            
                
           
            await new Promise(resolve => setTimeout(resolve, 25));
            if(elementsArray[j].clientHeight>elementsArray[j+1].clientHeight){
                elementsArray[j].style.background="red";
                elementsArray[j+1].style.background="red";
                await new Promise(resolve => setTimeout(resolve, 25));
                swap(elementsArray[j],elementsArray[j+1]);
                elementsArray[j].style.background="yellow";
                elementsArray[j+1].style.background="yellow";

            }
            elementsArray[j+1].style.background="green";
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



function createBubbleSortButton(){
    const bubbleSortButton = document.querySelector(".bubble-sort");

    bubbleSortButton.addEventListener("click", () => {
        
        bubbleSort();
        
    })
}

createBubbleSortButton();