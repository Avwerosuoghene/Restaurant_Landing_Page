const Sections = document.querySelectorAll(".section")

const fs = document.querySelector(".fifthSection")

const navBtn = document.querySelector(".navBar")
const navLines = document.querySelectorAll(".line")

const menuPop = document.querySelector(".menupop")

const HTML = document.querySelector("html")

const nextImgButtons = document.querySelectorAll (".nav")

const firstSec = document.querySelector(".firstSection")

const header = document.getElementById("header")

const pageLinks = document.querySelectorAll(".pageLink")

const img1 =  "Images/FirstPageFood/slide1.jpg"
const img2 =  "Images/FirstPageFood/slide2.jpg"
const img3 =  "Images/FirstPageFood/slide3.jpg"
const img4 =  "Images/FirstPageFood/slide4.jpg"
const img5 =  "Images/FirstPageFood/slide5.jpg"

let timesclicked = 0;

pageLinks.forEach((link)=> {
    link.addEventListener("click", (e) => {
        pageLinks.forEach((link2)=> {
            link2.style.border = "none"
        })
        if (link.classList.contains("fab") == false){
            link.style.borderBottom = "solid white 1px"
        }
        
    })
}) 

function showHeaderBackground (){
let lastscroll = 0;

    window.addEventListener("scroll", (e)=> {
       let str = window.pageYOffset
       if (str > lastscroll) {
           header.classList.remove("showBackground")
           navBtn.style.position = "absolute"
       } else {
        header.classList.add("showBackground")
        navBtn.style.position = "fixed"
        
        if (window.pageYOffset > 10){
            return;
        } else {

            setTimeout(() => {
                header.classList.remove("showBackground")
            }, 1000);
            
        }
       }
        lastscroll = str; 
    })
}

showHeaderBackground()


Sections.forEach ((section) => {
    (section.offsetHeight/4);
    
});

window.addEventListener ("scroll", ()=>{
    Sections.forEach ((section) => {

        // Checks if 50% of the section is visible and displays section contents
        if ((section.getBoundingClientRect().top + (0.3*section.getBoundingClientRect().height)) <= window.innerHeight){
            section.classList.add ("displayEl")   
        }
        else {
            section.classList.remove("displayEl")
        }
    })
})


navBtn.addEventListener ("click", ()=> {
    navLines.forEach ((line)=>{
        line.classList.toggle ("click");

    })
        if (timesclicked == 0){
            header.classList.remove("showBackground")
        
            menuPop.classList.toggle ("hide")
            
            HTML.style.overflow == "hidden" ?
            HTML.style.overflow = "visible" :
            HTML.style.overflow = "hidden"
            ;
            timesclicked = 1;
        } else {
            if (window.pageYOffset > 10){
                navBtn.style.position = "absolute"
            } else {
                null;
            }

            header.classList.remove("showBackground")
        
            menuPop.classList.toggle ("hide")
            
            HTML.style.overflow == "hidden" ?
            HTML.style.overflow = "visible" :
            HTML.style.overflow = "hidden"
            ;
            timesclicked = 0;
        }
        
      
        })


      
// })
function buttonloop(){
    nextImgButtons.forEach (button => {
        nextImage(button)
    })
}

let imgNumb = 0;
let backGrndArray = [img1, img2, img3, img4, img5]

function nextImage (button){
    

    button.addEventListener("click", () => {
        
            if (button.classList.contains("navright")){
                if (imgNumb == 4){
                    imgNumb = 0
                } else {
                    imgNumb ++
                }
                
            } else {
                if (imgNumb == 0){
                    imgNumb =4
                } else {
                    imgNumb --
                }
                
            }
            firstSec.style.backgroundImage = `url("${backGrndArray[imgNumb]}")`
    

})
}

buttonloop()

setInterval(()=>{
    if (imgNumb == 4){
        imgNumb = 0
    } else {
        imgNumb ++
    }
    firstSec.style.backgroundImage = `url("${backGrndArray[imgNumb]}")`

}, 10 * 1000);



