const content=document.querySelectorAll(".content");

let count=1;
setInterval(()=>{
     count++;
    
     let content1=document.querySelector(".current");
     content1.classList.remove("current");

    if(count>content.length){
        content[0].classList.add("current");
        console.log(content1);
        count=1;
    }
    else {

    content1.nextElementSibling.classList.add("current");

    }
   
    

},2000);








// const slidshowElements = document.querySelectorAll(".content");

// let countElements = 1;
// setInterval(() => {
//     countElements ++;
//     let currentElement = document.querySelector(".current");

//     currentElement.classList.remove("current");

//     if(countElements > slidshowElements.length){
//         slidshowElements[0].classList.add("current")
//     }else{
//         currentElement.nextElementSibling.classList.add("current");
//     }  
// }, 2000);