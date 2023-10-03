const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imageContainerEl = document.querySelector(".image-container");
const imgsEl = document.querySelectorAll("img");

let currentImg = 0;


nextEl.addEventListener("click", () => {
    clearTimeout(Timeout)
   currentImg++
   if(currentImg > imgsEl.length-1){
    currentImg = 0;
    }
    updateImg();
    
    
})


prevEl.addEventListener("click", () => {
    clearTimeout(Timeout)
   currentImg--
   if(currentImg < 0){
    currentImg = imgsEl.length-1;
    }
    updateImg();
})

function updateImg(){

    imageContainerEl.style.transform = `translateX(-${currentImg*500}px)`;
    Timeout = setTimeout(()=>{
        currentImg++
         if(currentImg > imgsEl.length-1){
        currentImg = 0;
        }
        updateImg();
    },3000)
    
}

updateImg()
