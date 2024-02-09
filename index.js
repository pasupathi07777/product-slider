let box = document.querySelector(".box-2")
let img_btn = box.querySelectorAll(".img-box")
let play_box = document.querySelector(".box-1")
let box_1 = document.querySelector(".box-1")
let box_1_image = box_1.querySelectorAll("img")
// console.log(box_1_image)
let wid;


// init()
// function init(){
//     // let width=document.querySelector(".box-1 img:first-child").clientWidth
//     // let cha_wid=document.querySelector(".box-1 img:first-child")
//     // cha_wid.addEventListener("resize",()=>{
//     //     console.log(width)

//     // })
//     // )
//     window.addEventListener("resize",()=>{
     
//         // let width=document.querySelector(".section-1").clientWidth
//         // let t_wid=width
//         // console.log(t_wid,"t-width")
//         // let size_img=document.querySelector(".box-1")
//         // console.log(size_img.clientWidth)
//         // size_img.style.width="100%"
//     })
    
    

// }

let index;


img_btn.forEach((a,i)=>{
    a.addEventListener("click",(e)=>{
        index=i+1
        // console.log(index)
        updatebox(index)
    })
})
console.log(index)

function updatebox(index){

    let width=document.querySelector(".box-1 img:first-child").clientWidth
    width=(index-1)*width
    console.log(width)
    box_1.style.transform=`translateX(${-width}px)`; 

    
  
}

let stars=document.querySelector(".star-box")
let star_btn=stars.querySelectorAll(".star i")
star_btn.forEach((a,i)=>{
    a.addEventListener("click",()=>{
      
        
        star_btn[i].style.color="yellow"
       
    })
})


let ouantity=document.querySelector(".ouantity-box")
let oua_btn=ouantity.querySelectorAll(".button")
let input=document.querySelector(".qu-input")
console.log(input)
let inp=input.value
console.log(inp)

oua_btn[0].addEventListener("click",()=>{
      
    inp=(inp>0)?--inp:inp
  
    
    
    document.querySelector(".qu-input").value=inp

   
    


    
    
    
})
oua_btn[1].addEventListener("click",()=>{

      
    inp=++inp
 
    
    
    document.querySelector(".qu-input").value=inp
})



    
   

   
    











    
  








