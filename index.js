let box = document.querySelector(".box-2")
let img_btn = box.querySelectorAll(".img-box")
let play_box = document.querySelector(".box-1")
let box_1 = document.querySelector(".box-1")
let box_1_image = box_1.querySelectorAll("img")

let wid;



let index;


img_btn.forEach((a,i)=>{
    a.addEventListener("click",(e)=>{
        
        index=i+1
       
        updatebox(index)
    })
})
console.log(index)

function updatebox(index){

    let width=document.querySelector(".box-1 img:first-child").clientWidth
    width=(index-1)*width
    console.log(width)
    box_1.style.transform=`translateX(${-width}px)`; 

    // let f_ind=(index==0)?0:index-1
    let boder_int=index-1
    

    // img_btn[index-1].classList.add("img-box-active")
    img_btn.forEach((a,i)=>{
        if(boder_int==0){
            img_btn[0].classList.add("img-box-active")
            img_btn[1].classList.remove("img-box-active")
            img_btn[2].classList.remove("img-box-active")
            

        }
        else if(boder_int==1){
            img_btn[1].classList.add("img-box-active")
            img_btn[0].classList.remove("img-box-active")
            img_btn[2].classList.remove("img-box-active")
        2

        }
        else if(boder_int==2){
            img_btn[2].classList.add("img-box-active")
            img_btn[0].classList.remove("img-box-active")
            img_btn[1].classList.remove("img-box-active")
            

        }
    })


    
  
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



    
   

   
    











    
  








